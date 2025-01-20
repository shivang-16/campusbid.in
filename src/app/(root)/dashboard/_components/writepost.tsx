"use client";
import { getSignedUrls } from "@/actions/files_action";
import { createPost, getPosts } from "@/actions/post_action";
import { uploadImageToS3 } from "@/actions/s3_actions";
import { useAppDispatch } from "@/redux/hooks";
import { postsData } from "@/redux/slices/postSlice";
import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaFolder, FaImage, FaMicrophone, FaStop, FaSmile, FaUserCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShareSomething = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [text, setText] = useState("");
    const [isDragOver, setIsDragOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const dispatch = useAppDispatch();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const scrollContainer = (direction: number) => {
        const container = document.querySelector('.relative.w-full.h-full.overflow-x-auto') as HTMLElement;
        if (container) {
            const scrollAmount = direction * (container.offsetWidth / 2); // Scroll half the container width
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);
        return () => {
            newPreviews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [files]);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles([...files, ...Array.from(event.target.files)]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(false);
        if (event.dataTransfer.files.length <= 4) {
            if (event.dataTransfer.files) {
                setFiles([...files, ...Array.from(event.dataTransfer.files)]);
            }
        }
        else {
            toast.error("Please choose upto 4 images, videos or GIFs.")
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleCreatePost = async () => {
        try {
            // Format files for signed URL request
            const formattedFiles = files.map((file) => ({
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type
            }));
    
            // Fetch signed URLs
            const UrlsResponse = await getSignedUrls(formattedFiles) as { files: { putUrl: string }[] };

            if (!UrlsResponse) {
                throw new Error("Failed to fetch signed URLs.");
            }
    
            // Upload files to S3 using the signed URLs
            const uploadFiles = UrlsResponse.files.map((signedUrl, index) => {
                const file = files[index];
                return uploadImageToS3(file, signedUrl.putUrl);
            });
    
            // Await all uploads to complete
            await Promise.all(uploadFiles);

    
            // Prepare data for creating post
            const formattedData = {
                text,
                files: UrlsResponse.files,
                type: "post"
            };
    
            // Create the post
            const response = await createPost(formattedData);
            if (!response || !response.success) {
                throw new Error("Failed to create post.");
            }
        
            toast.success("Post created successfully!");
            const res = await getPosts();
            dispatch(postsData(res.posts));
    
            // Reset states after successful post
            setText('');
            setFiles([]);
            setPreviews([]);
            setIsExpanded(false);
        } catch (error) {
            console.error("Error creating post:", error);
            toast.error("Failed to create post.");
        }
    };


    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };


    const startRecording = async () => {
        if (navigator.mediaDevices) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                const chunks: Blob[] = [];
                recorder.ondataavailable = (event) => {
                    chunks.push(event.data);
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(chunks, { type: 'audio/wav' });
                    setAudioBlob(audioBlob);
                    setAudioUrl(URL.createObjectURL(audioBlob));
                };

                recorder.start();
                setIsRecording(true);
            } catch (error) {
                toast.error("Permission denied or error while recording.");
            }
        }
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    return (
        <div
            ref={containerRef}
            className={`w-full mx-auto rounded-3xl p-4 sticky bottom-2 ${isDragOver ? "blur-sm" : ""}`}
            style={{ backgroundColor: "#f4ecd3" }}


        >
            <div
                className={`flex flex-col gap-3 font-medium bg-[#f7f4ea] rounded-3xl shadow-sm px-2 `}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`flex ${isExpanded ? "pt-3 items-start" : "items-center"} gap-3 cursor-pointer`}
                >
                    <FaUserCircle className="text-gray-600 text-2xl" />
                    <textarea
                        placeholder="Share something..."
                        className={`resize-none flex-grow flex text-sm bg-transparent focus:outline-none placeholder:text-gray-500 transition-all duration-300 ${isExpanded
                            ? "h-40 items-start leading-4"
                            : "h-10 items-center leading-10"
                            }`}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <FaSmile className="text-gray-600 text-xl cursor-pointer" />
                </div>
                <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                />

                {audioUrl && (
                    <div className="mt-4">
                        <audio controls src={audioUrl} />
                    </div>
                )}
                
                {files.length > 0 && (
                    <div className="mt-4 p-3">
                        {files.length === 1 && (
                            <div className="relative w-full h-64 bg-gray-100 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                                {files[0].type.startsWith('image/') && (
                                    <img src={previews[0]} alt="preview" className="w-full h-full object-cover" />
                                )}
                                <button
                                    className="absolute top-1 right-1 text-black text-2xl hover:text-gray-600 transition-all"
                                    onClick={() => handleRemoveFile(0)}
                                >
                                    <IoMdCloseCircle />
                                </button>
                            </div>
                        )}

                        {files.length === 2 && (
                            <div className="flex gap-3">
                                {files.map((file, index) => (
                                    <div key={index} className="relative flex-1 h-64 bg-gray-100 border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                                        {file.type.startsWith('image/') && (
                                            <img src={previews[index]} alt="preview" className="w-full h-full object-cover" />
                                        )}
                                        <button
                                            className="absolute top-1 right-1 text-black text-2xl hover:text-gray-600 transition-all"
                                            onClick={() => handleRemoveFile(index)}
                                        >
                                            <IoMdCloseCircle />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {files.length > 2 && (
                            <Carousel
                                responsive={responsive}
                                infinite={false} // Disable infinite scrolling
                                autoPlay={false} // No auto-play
                                keyBoardControl={true}
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px px-1.5"
                                showDots={false} // Disable dots if unnecessary
                                arrows={true} // Enable default navigation arrows
                            >
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full h-64 bg-gray-100 border border-gray-300 shadow-sm rounded-lg overflow-hidden"
                                    >
                                        {file.type.startsWith("image/") && (
                                            <img
                                                src={previews[index]}
                                                alt={`preview-${index}`}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                        <button
                                            className="absolute top-1 right-1 text-black shadow-xl rounded-full text-2xl hover:text-gray-600 transition-all"
                                            onClick={() => handleRemoveFile(index)}
                                        >
                                            <IoMdCloseCircle />
                                        </button>
                                    </div>
                                ))}
                            </Carousel>
                        )}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-6 font-medium text-gray-800">
                    <div
                        className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors"
                        onClick={() => inputRef.current?.click()}
                    >
                        <FaFolder />
                        <span className="text-sm">File</span>
                    </div>
                    <div
                        className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors"
                        onClick={() => inputRef.current?.click()}
                    >
                        <FaImage />
                        <span className="text-sm">Image</span>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    {isRecording ? (
                        <button
                            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-500"
                            onClick={stopRecording}
                        >
                            <FaStop className="text-2xl" />
                        </button>
                    ) : (
                        <button
                            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-500"
                            onClick={startRecording}
                        >
                            <FaMicrophone className="text-2xl" />
                        </button>
                    )}
                    <button
                        className="bg-black text-white font-medium text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
                        onClick={handleCreatePost}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareSomething;
