import React from 'react';
import { FaPalette, FaMusic, FaUtensils, FaMountain } from 'react-icons/fa';
import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';




const RightSideBar = () => {
    const users = [
        { id: 1, name: "Nick Shelburne", image: "/assets/image1.webp" },
        { id: 2, name: "Brittni Lando", image: "/assets/image2.jpg" },
        { id: 3, name: "Piyush Joshi", image: "/assets/image3.jpeg" },
    ];

    const spills = [
        { id: 1, name: "Worlds news", image: "/assets/image1.webp", online: true, lastOnline: new Date() },
        { id: 2, name: "Happens next", image: "/assets/image2.jpg", online: false, lastOnline: new Date('2025-01-17T12:00:00') },
        { id: 3, name: "What's new", image: "/assets/image3.jpeg", online: true, lastOnline: new Date() },
    ];

    // Function to calculate time passed since the last online
    const getTimePassed = (lastOnline: any) => {
        const now = new Date();
        const diff = now - new Date(lastOnline);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);

        if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else {
            return "Yesterday"
        }
    }

    return (
        <aside className="h-screen w-[300px]">
            <section className="bg-white rounded-xl p-6 mb-3">
                <h2 className="text-xl font-bold mb-4">Stories</h2>
                <div className="flex space-x-4">
                    {["/assets/image1.webp", "/assets/image2.jpg"].map((src, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={src}
                                alt={`Post ${index + 1}`}
                                className="w-20 h-32 rounded-lg transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="white"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 12c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 12c0 7.5-7.5 9-7.5 9s-7.5-1.5-7.5-9 7.5-9 7.5-9 7.5 1.5 7.5 9z"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white rounded-xl px-6">
                <h2 className="text-xl font-bold mb-4">Suggestions</h2>
                <ul className="space-y-3">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="flex justify-between items-center px-3 py-1 transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-9 h-9 rounded-3xl"
                                />
                                <span className="text-sm font-semibold text-gray-800">
                                    {user.name}
                                </span>
                            </div>
                            <button className="text-white font-semibold text-xs border-black border-[1px] rounded-xl px-2.5 py-[3px] bg-black hover:bg-gray-800 transition-all">
                                Follow
                            </button>
                        </li>
                    ))}
                    <li className="flex justify-start px-3">
                        <p className="text-gray-500 text-sm font-medium hover:underline cursor-pointer">
                            See all
                        </p>
                    </li>
                </ul>
            </section>

            <section className="bg-white px-6 py-6">
                <h2 className="text-xl font-bold mb-4">Top Spills</h2>
                <ul className="space-y-3">
                    {spills.map((user) => (
                        <li
                            key={user.id}
                            className="flex justify-between items-center px-3 py-1 transition-colors"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                                />
                                <span className="text-sm font-semibold text-gray-800">{user.name}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                {/* Online status */}
                                {user.online ? (
                                    <div className="h-2 w-2 bg-green-500 shadow-green-500 shadow-md rounded-full animate-pulse" title="Online"></div>
                                ) : (
                                    <div className="h-2 w-2 bg-red-500 rounded-full" title="Offline"></div>
                                )}
                                {/* Join button */}
                                <button className="text-white font-semibold text-xs px-3 py-1 bg-black rounded-2xl hover:bg-gray-800 transition-all">
                                    Join
                                </button>
                            </div>
                        </li>
                    ))}
                    <li className="flex justify-start px-3">
                        <p className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                            See all
                        </p>
                    </li>
                </ul>
            </section>



        </aside>
    );
};

export default RightSideBar;
