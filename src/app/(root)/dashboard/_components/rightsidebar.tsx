import React from 'react';
import { FaPalette, FaMusic, FaUtensils, FaMountain } from 'react-icons/fa';


const RightSideBar = () => {
    const users = [
        { id: 1, name: "Nick Shelburne", image: "/assets/image1.webp" },
        { id: 2, name: "Brittni Lando", image: "/assets/image2.jpg" },
        { id: 3, name: "Piyush Joshi", image: "/assets/image3.jpeg" },
    ];
    return (
        <aside className="col-span-3 fixed right-44 w-[290px]">
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
                <h2 className="text-xl font-bold mb-4">Recommendations</h2>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col items-center justify-center bg-blue-100 rounded-full h-28 w-h-28 hover:bg-blue-200 transition-colors duration-300 ease-in-out">
                        <FaPalette className="text-2xl text-blue-400" />
                        <span className="text-lg font-bold mt-2">UI/UX</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-pink-100 rounded-full h-28 w-h-28 hover:bg-pink-200 transition-colors duration-300 ease-in-out">
                        <FaMusic className="text-2xl text-pink-400" />
                        <span className="text-lg font-bold mt-2">Music</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-cover bg-orange-200 bg-center h-28 w-h-28 rounded-full hover:opacity-90 transition-opacity duration-300 ease-in-out" style={{ backgroundImage: "url('/path-to-cooking-image.jpg')" }}>
                        <FaUtensils className="text-2xl text-orange-400" />
                        <span className="text-lg font-bold mt-2">Cooking</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-purple-100 rounded-full h-28 w-h-28 hover:bg-purple-200 transition-colors duration-300 ease-in-out">
                        <FaMountain className="text-2xl text-purple-400" />
                        <span className="text-lg font-bold mt-2">Hiking</span>
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default RightSideBar;
