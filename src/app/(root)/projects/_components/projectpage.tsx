"use client"
import React from 'react';
import LeftNavbar from '../../dashboard/_components/leftnavbar';
import RightSideBar from '../../dashboard/_components/rightsidebar';
import Projects from './projects';

const ProfilePage = () => {
    return (
        <div className="min-h-screen w-full bg-white font-sans">
            <div className="flex justify-center gap-4">
                <LeftNavbar />
                <main className="col-span-6">
                    <div className="space-y-6 pb-6 mt-4 min-w-[600px]">
                        <Projects />
                    </div>
                </main>
                <RightSideBar />
            </div>
        </div>
    );
};

export default ProfilePage;

