"use client"
import React from 'react';
import LeftNavbar from '../../dashboard/_components/leftnavbar';
import RightSideBar from '../../dashboard/_components/rightsidebar';
import UserProfile from './profileTemplate';

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-white font-sans pl-48 pr-32">
            <div className="grid grid-cols-12 gap-4">
                <LeftNavbar />
                <main className="col-span-6 relative left-[265px]">
                    <div className=" pb-6 pt-4">
                        <UserProfile avatar="path_to_avatar_image" username="Pearl55" followers={1000} following={233} bio="My name is Pearl, I am a tech enthusiast and I love to take up challenges, willing to learn, unlearn, and relearn." photos={["/assets/image1.webp", "/assets/image2.jpg", "/assets/image3.jpeg", "/assets/image1.webp", "/assets/image2.jpg", "/assets/image2.jpg",  "/assets/image2.jpg", "/assets/image3.jpeg", "/assets/image1.webp", "/assets/image2.jpg", "/assets/image2.jpg" ]}
                        />
                    </div>
                </main>
                <RightSideBar />
            </div>
        </div>
    );
};

export default ProfilePage;
