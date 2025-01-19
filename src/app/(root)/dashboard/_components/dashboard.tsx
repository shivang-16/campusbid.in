import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { IoEyeSharp } from "react-icons/io5";
import { FaPalette, FaMusic, FaUtensils, FaMountain } from 'react-icons/fa';
import LeftNavbar from './leftnavbar';
import RightSideBar from './rightsidebar';
import PostList from './postslist';
import ShareSomething from './writepost';
import SpillSomething from './spillmode';

const DashboardPage = () => {
  return (
    <div className="h-full flex bg-white font-sans">
      <div className="flex justify-center mx-auto gap-4">
        <main className="col-span-6">
          <div className="space-y-6 pb-6 mt-4 max-w-[650px]">
            <PostList />
            <ShareSomething />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
