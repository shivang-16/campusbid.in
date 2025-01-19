"use client"
import React from 'react';
import LeftNavbar from '../../dashboard/_components/leftnavbar';
import RightSideBar from '../../dashboard/_components/rightsidebar';
import SpillComponent from './spill';

const SpillPage = () => {
    return (
        <div className="h-full bg-white font-sans ">
            <div className="flex justify-center gap-4">
                <main className="col-span-6">
                    <div className="space-y-6 pb-6 mt-4 max-w-[600px]">
                        <SpillComponent/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SpillPage;
