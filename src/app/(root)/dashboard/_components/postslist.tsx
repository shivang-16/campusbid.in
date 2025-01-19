"use client";

import React, { useState, useEffect } from "react";
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { IoEyeSharp } from 'react-icons/io5';
import { MdVerified } from "react-icons/md";
import { CgMore } from "react-icons/cg";
import { FaCrown } from "react-icons/fa6";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { getPosts } from "@/actions/post_action";
import { useAppDispatch } from "@/redux/hooks";
import { postsData } from "@/redux/slices/postSlice";

// Define type for the post
interface Post {
    _id: string;
    user: string;
    text: string;
    files: string[];
    type: string;
    createdAt: string;
    updatedAt: string;
    bgColor: string;
    isComment: {
        comment: boolean;
    };
}

// Define type for PostCard props
interface PostCardProps {
    post: Post;
    bgColor: string;
}


const PostCard: React.FC<PostCardProps> = ({ post, bgColor }) => {
    return (
        <div className={`bg-[${bgColor}] rounded-xl p-6 mb-5`}>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <AnimatedTooltip
                        item={{
                            id: 2,
                            name: "User Name", // Replace with actual data if available
                            image: "/assets/user.jpeg" // Placeholder avatar
                        }}
                    />
                    <div>
                        <h3 className="font-bold">User Name</h3>
                        <p className="text-gray-400 text-xs">{new Date(post.createdAt).toLocaleString()}</p>
                    </div>
                </div>
                <div className="relative">
                    <button
                        className="text-gray-600 text-xl hover:bg-gray-200 transition delay-75 rounded-full p-1"
                    >
                        <CgMore />
                    </button>
                </div>
            </div>
            <p className="mb-4 font-medium">{post.text}</p>
            {post.files.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                    {post.files.map((file, index) => (
                        <img
                            key={index}
                            src={file}
                            alt={`Post file ${index + 1}`}
                            className="rounded-lg h-52 w-full object-cover"
                        />
                    ))}
                </div>
            )}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                        <AiOutlineHeart className="mr-1" /> 0 {/* Placeholder for likes */}
                    </div>
                    <div className="flex items-center text-gray-600">
                        <AiOutlineComment className="mr-1" /> 0 {/* Placeholder for comments */}
                    </div>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-1">
                            <IoEyeSharp />
                        </span> 0 {/* Placeholder for views */}
                    </div>
                </div>
                <button className="bg-pink-400 text-white text-sm font-semibold px-3 py-1 rounded-2xl">
                    🔥Woow!!!
                </button>
            </div>
        </div>
    );
};

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await getPosts();
            setPosts(res.posts);
            dispatch(postsData(res.posts));
        };
        fetchPosts();
    }, []);

    return (
        <div className="w-full">
            <section className="bg-opacity-50 backdrop-blur-md sticky top-0 z-10 w-full flex items-center justify-between pt-4 pb-4 px-6 mb-3">
                <h2 className="text-xl font-bold">Feeds</h2>
                <div className="flex justify-between font-semibold gap-4 items-center text-sm">
                    <button className="text-gray-400 hover:text-blue-600">Recents</button>
                    <button className="text-gray-900 hover:text-blue-600">Friends</button>
                    <button className="text-gray-400 hover:text-blue-600">Popular</button>
                </div>
            </section>
            {posts.map((post) => (
                <PostCard key={post._id} post={post} bgColor={post?.bgColor} />
            ))}
        </div>
    );
};

export default PostList;
