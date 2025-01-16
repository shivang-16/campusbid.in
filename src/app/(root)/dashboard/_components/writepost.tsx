"use client"
import React, { useState, useEffect, useRef } from "react";
import { FaFolder, FaImage, FaMapMarkerAlt, FaGlobe, FaSmile, FaUserCircle } from "react-icons/fa";

const ShareSomething = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle click outside to collapse the input
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

    return (
        <div
            ref={containerRef}
            className="w-full mx-auto  rounded-3xl p-4 sticky bottom-2"
            style={{ backgroundColor: "#f4ecd3" }}
        >
            <div className="flex flex-col gap-3 font-medium bg-[#f7f4ea] rounded-3xl shadow-sm px-2">
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`flex ${isExpanded ? " pt-3 items-start" : "items-center"} gap-3 cursor-pointer`}
                >
                    <FaUserCircle className="text-gray-600 text-2xl" />
                    <textarea
                        placeholder="Share something..."
                       
                        className={`resize-none flex-grow flex text-sm bg-transparent focus:outline-none placeholder:text-gray-500 transition-all duration-300 ${isExpanded
                                ? "h-40 items-start leading-4"
                                : "h-10 items-center leading-10"
                            }`}
                    />
                    <FaSmile className="text-gray-600 text-xl cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-6 font-medium text-gray-800">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors">
                        <FaFolder />
                        <span className="text-sm">File</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors">
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
                <button className="bg-black text-white font-medium text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                    Post
                </button>
            </div>
        </div>
    );
};

export default ShareSomething;
