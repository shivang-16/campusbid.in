'use client'
import React from 'react';
import {
  FaUserFriends,
  FaCog,
  FaHome,
  FaComments,
  FaPhotoVideo,
} from 'react-icons/fa';
import Image from 'next/image';
import { GrGroup } from "react-icons/gr";
import { FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import { useAppSelector } from '@/redux/hooks';

const LeftNavbar = () => {

  const user = useAppSelector(state => state.user.user);
  console.log(user, "here is the user")

  return (
    <aside className="fixed col-span-2 rounded-xl py-2 mt-4">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-20 h-20">
          <Image
            src="/assets/favicon.ico"
            alt="CampusBid Logo"
            width={20}
            height={20}
            className="w-full h-full rounded-full object-cover absolute right-7"
          />
          <div className="w-20 h-20 absolute left-7 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <span className="text-white font-bold text-lg">BN</span>
          </div>
        </div>

        <div className="ml-4 flex flex-col items-center">
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-gray-500">@{user?.username}</p>
        </div>
      </div>
      <nav>
        <ul className="space-y-3">
          <li className="flex items-center text-base font-semibold text-white hover:cursor-pointer bg-gray-900 py-2 rounded-2xl px-4">
            <FaHome className="mr-3" /> Home
          </li>
          <li className="flex items-center text-base text-gray-800 font-semibold py-2  hover:cursor-pointer hover:bg-gray-100 rounded-2xl px-4 transition delay-2000">
            <FaComments className="mr-3" /> Messages
          </li>
          <li className="flex items-center text-base text-gray-800 font-semibold py-2  hover:cursor-pointer hover:bg-gray-100 rounded-2xl px-4 transition delay-2000">

            <GrGroup className="mr-3" /> Spill
          </li>
          <li className="flex items-center text-base text-gray-800 font-semibold py-2  hover:cursor-pointer hover:bg-gray-100 rounded-2xl px-4 transition delay-2000">

            <FaUserFriends className="mr-3" /> Friends
          </li>
          <li className="flex items-center text-base text-gray-800 font-semibold py-2  hover:cursor-pointer hover:bg-gray-100 rounded-2xl px-4 transition delay-2000">

            <FaPhotoVideo className="mr-3" /> Media
          </li>
          <li className="flex items-center text-base text-gray-800 font-semibold py-2  hover:cursor-pointer hover:bg-gray-100 rounded-2xl px-4 transition delay-2000">

            <FaCog className="mr-3" /> Settings
          </li>
        </ul>
        <section className="space-y-1 mt-5 flex flex-col items-center border-2 border-dashed hover:bg-gray-50 transition border-blue-200 p-4 rounded-3xl">
          <FaLaptopCode className="text-3xl" />
          <h2 className="text-xl font-bold rounded-2xl px-4 ">Explore!</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center pb-4">
              <p className="text-sm flex font-semibold text-gray-500">Explore freelancing projects today.</p>
            </div>
            <button className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 hover:bg-yellow-200 font-semibold rounded-full transform transition-all duration-300 ease-in-out hover:scale-105">
              <span className="text-base">Go</span>
              <FaArrowRight className="text-base" />
            </button>
          </div>
        </section>
      </nav>
    </aside>
  );
};

export default LeftNavbar;
