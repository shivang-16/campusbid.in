// LandingPage.tsx
import React from 'react';
import GreenButton from '@/components/GreenButton';

const Navbar: React.FC = () => {
    return (
        <header className="w-full px-6 flex justify-between items-center backdrop-blur-3xl shadow-md fixed top-0 left-0 z-50">
            <div className="flex items-center space-x-2">
                <img src="/campusbid_logo.ico" alt="Logo" className="w-16 h-16" />
                <span className="text-xl font-extrabold text-teal-600">CampusBid</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                <a href="#product" className="hover:text-teal-500">About</a>
                <a href="#solutions" className="hover:text-teal-500">How It Works</a>
                <a href="#pricing" className="hover:text-teal-500">Pricing</a>
                <a href="#resources" className="hover:text-teal-500">Blog</a>
            </nav>
        </header>
    );
};

export default Navbar;
