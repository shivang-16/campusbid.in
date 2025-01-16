import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { IoEyeSharp } from "react-icons/io5";
import { FaPalette, FaMusic, FaUtensils, FaMountain } from 'react-icons/fa';
import LeftNavbar from './leftnavbar';
import RightSideBar from './rightsidebar';
import PostList from './postslist';
import ShareSomething from './writepost';


const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans pl-48 pr-32">
      <div className="grid grid-cols-12 gap-4">
        <LeftNavbar />
        <main className="col-span-6 ml-5 relative left-[265px]">
          <section className="bg-white bg-opacity-80 backdrop-blur-xl fixed z-50 w-[572px] flex items-center justify-between pt-6 pb-2 px-6 mb-6 ">
            <h2 className="text-xl font-bold">Feeds</h2>
            <div className="flex justify-between font-semibold gap-4 items-center text-sm">
              <button className="text-gray-400 hover:text-blue-600">Recents</button>
              <button className="text-gray-900 hover:text-blue-600">Friends</button>
              <button className="text-gray-400 hover:text-blue-600">Popular</button>
            </div>
          </section>
          <div className="space-y-6 pb-6 pt-20">
            <PostList />
            <ShareSomething/>
          </div>
        </main>
        <RightSideBar />
      </div>
    </div>
  );
};

export default DashboardPage;
