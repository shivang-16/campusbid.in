"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFolder, FaImage, FaMapMarkerAlt, FaGlobe, FaSmile, FaUserCircle } from "react-icons/fa";
import axios from 'axios';

const ShareSomething = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [text, setText] = useState("");
    const [isDragOver, setIsDragOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
        // Generate previews for image files
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);

        // Clean up object URLs when the component unmounts
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
        if (event.dataTransfer.files) {
            setFiles([...files, ...Array.from(event.dataTransfer.files)]);
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
        const media = await Promise.all(
            files.map(async (file) => {
                const formData = new FormData();
                formData.append('file', file);

                console.log(formData, "hello")
        
            })

        );

        console.log(files, "media")
        console.log(text, "text")
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    return (
        <div
            ref={containerRef}
            className="w-full mx-auto rounded-3xl p-4 sticky bottom-2"
            style={{ backgroundColor: "#f4ecd3" }}
        >
            <div
                className={`flex flex-col gap-3 font-medium bg-[#f7f4ea] rounded-3xl shadow-sm px-2 ${isDragOver ? "blur-sm" : ""}`}
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
                    ref={inputRef}
                />
                <div className="flex gap-2 flex-wrap mt-3">
                    {files.map((file, index) => (
                        <div key={index} className="relative w-16 h-16 bg-gray-200 flex items-center justify-center rounded-lg">
                            {file.type.startsWith('image/') && <img src={previews[index]} alt="preview" className="absolute w-full h-full object-cover rounded-lg" />}
                            <button
                                className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full"
                                onClick={() => handleRemoveFile(index)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
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
                    <div className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors">
                        <FaMapMarkerAlt />
                        <span className="text-sm">Location</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors">
                        <FaGlobe />
                        <span className="text-sm">Public</span>
                    </div>
                </div>
                <button
                    className="bg-black text-white font-medium text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
                    onClick={handleCreatePost}
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default ShareSomething;
