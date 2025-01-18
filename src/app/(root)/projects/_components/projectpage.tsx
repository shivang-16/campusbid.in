"use client"
import React from 'react';
import Projects from './projects';

const ProfilePage = () => {
    return (
        <div className="h-full bg-white font-sans ">
            <div className="flex justify-center gap-4">
                <main className="col-span-6">
                    <div className="space-y-6 pb-6 mt-4 min-w-[600px]">
                        <Projects />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;

