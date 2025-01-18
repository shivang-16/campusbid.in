"use client"
import React from 'react';
import LeftNavbar from '../../dashboard/_components/leftnavbar';
import RightSideBar from '../../dashboard/_components/rightsidebar';
import SpillComponent from './spill';

const SpillPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans pl-48 pr-32">
            <div className="grid grid-cols-12 gap-4">
                <LeftNavbar />
                <main className="col-span-6 relative left-[265px]">
                    <div className=" pb-6 pt-4">
                        <SpillComponent/>
                    </div>
                </main>
                <RightSideBar />
            </div >
        </div >
    );
};

export default SpillPage;
