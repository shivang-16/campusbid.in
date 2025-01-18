"use client"

import React, { useState, useRef, useEffect } from "react";
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { IoEyeSharp } from 'react-icons/io5';
import { MdVerified } from "react-icons/md";
import { CgMore } from "react-icons/cg";
import { FaCrown } from "react-icons/fa6";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";


// Define type for the post
interface Post {
    avatar: string;
    name: string;
    timeAgo: string;
    text: string;
    images: string[];
    likes: number;
    comments: number;
    views: number;
    bgColor: string;  // Optional field for background color (used dynamically)
}

// Define type for PostCard props
interface PostCardProps {
    post: Post;
}

// Define the posts data array with types
const posts: Post[] = [
    {
        avatar: '/assets/user.jpeg',
        name: 'George Lobko',
        timeAgo: '2 hours ago',
        text: 'Hi everyone, today I was on the most beautiful mountain in the world! 🌄',
        images: ['/assets/image3.jpeg', '/assets/image2.jpg', '/assets/image1.webp'],
        likes: 6355,
        comments: 234,
        views: 1024,
        bgColor: "bg-blue-50"
    },
    {
        avatar: '/assets/my.jpeg',
        name: 'Piyush Joshi',
        timeAgo: '4 hours ago',
        text: 'Hello, I am very new to this platform, hope it will help me grow further. What a fantastic trip to the countryside! The fresh air and serenity were unmatched. 🌻',
        images: [],
        likes: 7981,
        comments: 493,
        views: 2024,
        bgColor: "bg-teal-50"
    },
    {
        avatar: '/assets/user2.jpeg',
        name: 'Elena Gilbert',
        timeAgo: '1 day ago',
        text: 'What a fantastic trip to the countryside! The fresh air and serenity were unmatched. 🌻',
        images: ['/assets/image2.jpg', '/assets/image1.webp', '/assets/image3.jpeg'],
        likes: 4321,
        comments: 143,
        views: 894,
        bgColor: "bg-pink-50"
    },
    {
        avatar: '/assets/user3.jpeg',
        name: 'John Doe',
        timeAgo: '6 hours ago',
        text: 'Tried my hand at cooking today. Here’s what I made! 🍲 #HomeChef',
        images: ['/assets/image3.jpeg', '/assets/image1.webp', '/assets/image2.jpg'],
        likes: 2890,
        comments: 89,
        views: 654,
        bgColor: "bg-yellow-50"
    },
    {
        avatar: '/assets/user4.jpeg',
        name: 'Samantha Ray',
        timeAgo: '2 days ago',
        text: 'Just completed my first marathon! Feeling accomplished and tired. 🏃‍♀️💪',
        images: ['/assets/image1.webp', '/assets/image2.jpg', '/assets/image3.jpeg'],
        likes: 5012,
        comments: 210,
        views: 1200,
        bgColor: "bg-red-50"
    },
    {
        avatar: '/assets/user5.jpeg',
        name: 'Michael Smith',
        timeAgo: '8 hours ago',
        text: 'Spent the day exploring the city’s hidden gems. Such an adventure! 🗺️',
        images: ['/assets/image2.jpg', '/assets/image3.jpeg', '/assets/image1.webp'],
        likes: 7245,
        comments: 345,
        views: 1320,
        bgColor: "bg-gray-50"
    },
    {
        avatar: '/assets/user6.jpeg',
        name: 'Anna Johnson',
        timeAgo: '10 hours ago',
        text: 'Captured the perfect sunset today. Mother Nature never disappoints. 🌅',
        images: ['/assets/image3.jpeg', '/assets/image1.webp', '/assets/image2.jpg'],
        likes: 6321,
        comments: 298,
        views: 1100,
        bgColor: "bg-orange-50"
    },
    {
        avatar: '/assets/user7.jpeg',
        name: 'Chris Evans',
        timeAgo: '3 days ago',
        text: 'Finally had the chance to go hiking again! The view from the top was breathtaking. 🏔️',
        images: ['/assets/image1.webp', '/assets/image3.jpeg', '/assets/image2.jpg'],
        likes: 8700,
        comments: 430,
        views: 1600,
        bgColor: "bg-green-50"
    }
];


const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`${post.bgColor} rounded-xl p-6 mb-5`}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <AnimatedTooltip
                        item={{
                            id: 2,
                            name: post.name,
                            image: post.avatar
                        }}
                    />
                    <div>
                        <h3 className="font-bold">{post.name}</h3>
                        <p className="text-gray-400 text-xs">{post.timeAgo}</p>
                    </div>
                </div>
                <div className="relative" ref={menuRef}>
                    <button
                        className="text-gray-600 text-xl hover:bg-gray-200 transition delay-75 rounded-full p-1"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <CgMore />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                            <ul className="py-0.5">
                                <li className="px-4 py-2 font-medium text-sm hover:bg-gray-100 cursor-pointer">
                                    View Profile
                                </li>
                                <li className="px-4 py-2 font-medium text-sm hover:bg-gray-100 cursor-pointer">
                                    Delete
                                </li>
                                <li className="px-4 py-2 font-medium text-sm hover:bg-gray-100 cursor-pointer">
                                    Report
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <p className="mb-4 font-medium">{post.text}</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
                {post.images.map((image, index) => (
                    
                        <img
                            key={index}
                            src={image}
                            alt={`Post ${index + 1}`}
                            className="rounded-lg h-52 w-full object-cover"
                        />

                ))}
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                        <AiOutlineHeart className="mr-1" /> {post.likes}
                    </div>
                    <div className="flex items-center text-gray-600">
                        <AiOutlineComment className="mr-1" /> {post.comments}
                    </div>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-1">
                            <IoEyeSharp />
                        </span>{" "}
                        {post.views}
                    </div>
                </div>
                <button className="bg-pink-400 text-white text-sm font-semibold px-3 py-1 rounded-2xl">
                    🔥Woow!!!
                </button>
            </div>

        </div>
    );
};


const PostList: React.FC = () => (
    <div className="w-full">
        <section className="  bg-opacity-80 backdrop-blur-xl sticky top-0 z-50 w-full flex items-center justify-between pt-4 pb-4 px-6 mb-3 ">
            <h2 className="text-xl font-bold">Feeds</h2>
            <div className="flex justify-between font-semibold gap-4 items-center text-sm">
                <button className="text-gray-400 hover:text-blue-600">Recents</button>
                <button className="text-gray-900 hover:text-blue-600">Friends</button>
                <button className="text-gray-400 hover:text-blue-600">Popular</button>
            </div>
        </section>
        {posts.map((post, index) => (
            <PostCard key={index} post={{ ...post }} />
        ))}
    </div>
);

export default PostList;
