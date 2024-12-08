// LandingPage.tsx
import React from 'react';
import GreenButton from '@/components/GreenButton';

const Navbar: React.FC = () => {
    return (
        <header className="w-full px-2 sm:py-[0.5px] rounded-b-3xl lg:px-6 flex justify-between items-center backdrop-blur-3xl shadow-md fixed top-0 left-0 z-50">
            <div className="flex items-center space-x-2 py-1.5 sm:py-2">
                <img src="/campusbid_logo.ico" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
                <span className="text-xl font-extrabold text-teal-600">CampusBid</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <a
                    href="https://app.campusbid.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` rounded-lg text-teal-800 font-semibold px-6 py-2 hover:bg-teal-200 transition duration-200 ease-in-out`}
                >
                    Start
                </a>

            </nav>
        </header>
    );
};

export default Navbar;
