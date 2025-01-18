"use client"
import React from 'react';
import UserProfile from './profileTemplate';

const ProfilePage = () => {
    return (
        <div className="h-full bg-white font-sans ">
            <div className="flex justify-center gap-4">
                <main className="col-span-6">
                    <div className="space-y-6 pb-6 mt-4 min-w-[600px]">
                        <UserProfile avatar="path_to_avatar_image" username="Pearl55" followers={1000} following={233} bio="My name is Pearl, I am a tech enthusiast and I love to take up challenges, willing to learn, unlearn, and relearn." photos={["/assets/image1.webp", "/assets/image2.jpg", "/assets/image3.jpeg", "/assets/image1.webp", "/assets/image2.jpg", "/assets/image2.jpg", "/assets/image2.jpg", "/assets/image3.jpeg", "/assets/image1.webp", "/assets/image2.jpg", "/assets/image2.jpg"]}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;
