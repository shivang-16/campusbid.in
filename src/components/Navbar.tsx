// LandingPage.tsx
import React from 'react';
import GreenButton from '@/components/GreenButton';

const Navbar: React.FC = () => {
    return (
        <header className="w-full px-2 lg:px-6 flex justify-between items-center backdrop-blur-3xl shadow-md fixed top-0 left-0 z-50">
            <div className="flex items-center space-x-2 py-2">
                <img src="/campusbid_logo.ico" alt="Logo" className="w-12 h-12" />
                <span className="text-xl font-extrabold text-teal-600">CampusBid</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                {/* <a href="#product" className="hover:text-teal-500">About</a>
                <a href="#solutions" className="hover:text-teal-500">How It Works</a>
                <a href="#pricing" className="hover:text-teal-500">Pricing</a>
                <a href="#resources" className="hover:text-teal-500">Blog</a> */}
                <a
                    href="https://app.campusbid.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-teal-100 rounded-lg text-teal-800 font-semibold px-6 py-2 hover:bg-teal-200 transition duration-200 ease-in-out`}
                >
                    Start
                </a>

            </nav>
        </header>
    );
};

export default Navbar;
