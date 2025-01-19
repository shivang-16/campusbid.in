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
        { id: 1, name: "News", image: "/assets/image1.webp", online: true, lastOnline: new Date(), bgColor: "bg-yellow-50" },
        { id: 2, name: "Happen", image: "/assets/image2.jpg", online: false, lastOnline: new Date('2025-01-17T12:00:00'), bgColor: "bg-pink-50" },
        { id: 3, name: "Newest", image: "/assets/image3.jpeg", online: true, lastOnline: new Date(), bgColor: "bg-blue-50" },
    ];

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
                                    className="w-10 h-10 rounded-full border-[2px] border-gray-200"
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

            <section className="bg-white px-6 py-8">
                <h2 className="text-xl font-bold mb-4">Top Spills</h2>
                <div className="grid grid-cols-6 gap-1">
                    {spills.map((user, index) => (
                        <div
                            key={user.id}
                            className={`w-full rounded-lg ${user.bgColor} flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-md ${index === 0
                                ? "col-span-4 row-span-2 h-[220px] px-4 py-8" // Large first image
                                : index === 1
                                    ? "col-span-2 row-span-1 h-[105px] px-2 py-4" // Medium image
                                    : "col-span-2 row-span-1 h-[105px] px-2 py-4" // Small images
                                }`}
                        >
                            <div className="flex flex-col items-start h-full justify-between">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className={`rounded-full border-[3px] border-gray-300 ${index === 0
                                        ? "w-24 h-24" // Large first image
                                        : "w-10 h-10" // Smaller images
                                        }`}
                                />
                                <div className='flex items-center gap-3'>
                                    <span className={`block ${index === 0 ? "text-lg" : "text-xs"} font-semibold text-gray-600`}>
                                        {user.name}
                                    </span>
                                    <div className="flex items-center space-x-2">
                                        {user.online ? (
                                            <div
                                                className={` ${index === 0
                                                    ? " h-3 w-3" // Large first image
                                                    : "w-1.5 h-1.5"}  bg-green-500 shadow-md rounded-full animate-pulse`}
                                                title="Online"
                                            ></div>
                                        ) : (
                                            <div className={`${index === 0
                                                ? " h-3 w-3" // Large first image
                                                : "w-1.5 h-1.5"} bg-red-500 rounded-full`} title="Offline"></div>
                                        )}
                                        {/* <button className="text-white text-xs font-medium px-4 py-1.5 bg-black rounded-full hover:bg-gray-900 transition-all">
                                            Join
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-span-6 flex justify-center mt-4">
                        <p className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                            See all
                        </p>
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default RightSideBar;
