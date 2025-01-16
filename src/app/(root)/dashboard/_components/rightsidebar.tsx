import React from 'react';
import { FaPalette, FaMusic, FaUtensils, FaMountain } from 'react-icons/fa';


const RightSideBar = () => {
    return (
        <aside className="col-span-3 fixed right-44 w-[290px]">
            <section className="bg-white rounded-xl p-6 mb-3">
                <h2 className="text-xl font-bold mb-4">Stories</h2>
                <div className="flex space-x-4">
                    <img
                        src="/assets/image1.webp"
                        alt="Post 1"
                        className="w-20 h-32 rounded-lg"
                    />
                    <img
                        src="/assets/image2.jpg"
                        alt="Post 2"
                        className="w-20 h-32 rounded-lg"
                    />
                </div>
            </section>
            <section className="bg-white rounded-xl px-6">
                <h2 className="text-xl font-bold mb-4">Suggestions</h2>
                <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                        <img
                            src="/assets/image1.webp"
                            alt="Post 1"
                            className="w-9 h-9 rounded-3xl"
                        />

                        <span className='text-sm flex font-semibold justify-start'>Nick Shelburne</span>
                        <button className="text-white  font-semibold text-xs border-black border-[1px] rounded-xl px-2.5 py-[3px] bg-black">Follow</button>
                    </li>
                    <li className="flex justify-between items-center">
                        <img
                            src="/assets/image2.jpg"
                            alt="Post 2"
                            className="w-9 h-9 rounded-3xl"
                        />
                        <span className='text-sm flex justify-start font-semibold'>Brittni Lando</span>
                        <button className="text-white  font-semibold text-xs border-black border-[1px] rounded-xl px-2.5 py-[3px] bg-black">Follow</button>
                    </li>
                    <li className="flex justify-between items-center">
                        <img
                            src="/assets/image3.jpeg"
                            alt="Post 2"
                            className="w-9 h-9 rounded-3xl"
                        />
                        <span className='text-sm flex justify-start font-semibold'>Piyush Joshi</span>
                        <button className="text-white  font-semibold text-xs border-black border-[1px] rounded-xl px-2.5 py-[3px] bg-black">Follow</button>
                    </li>
                    <li className="flex justify-between items-center">
                        <p className='text-gray-400 text-xs hover:underline cursor-pointer font-medium'>See all</p>
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
