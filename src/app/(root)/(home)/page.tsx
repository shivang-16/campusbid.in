"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-purple-100 via-white to-teal-100 font-sans h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <main className="flex flex-col items-center py-20 px-6 text-center pt-36 h-full justify-center">
        <div className="bg-teal-50 text-sm text-teal-500 font-medium px-4 py-1 rounded-full mb-4"> 
          Join now to find skilled professionals for your next project →
        </div>
        <h1 className="text-2xl md:text-5xl sm:text-3xl font-bold text-teal-500 mb-2">
        The work you want, <span className="text-gray-800">The bids you need</span>.
        </h1>
        <p className="text-gray-700 max-w-2xl mb-8 text-sm md:text-lg text-justify md:text-center pt-4">
          CampusBid connects people looking to get projects done with skilled individuals ready to work. From small tasks to major projects, our platform makes it easy to collaborate, bid, and achieve more together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://app.campusbid.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow font-semibold hover:bg-gray-900 transition duration-300"
          >
            Learn More
          </a>
          <a
            href="https://app.campusbid.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-200 text-teal-800 font-semibold flex items-center px-6 py-3 rounded-lg shadow hover:bg-teal-200 transition duration-200 ease-in-out"
          >
            Start Bidding — it’s free
          </a>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row justify-center mt-8 text-sm text-gray-600 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-1">
            <span className='text-green-700'>✓</span>
            <span>Fully secured and reliable</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className='text-green-700'>✓</span>
            <span>Easy project posting</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className='text-green-700'>✓</span>
            <span>Competitive bidding for fair prices</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm lg:text-lg bg-gradient-to-r from-purple-100 via-white to-teal-100 text-gray-700 font-medium">
        © 2024 CampusBid, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
