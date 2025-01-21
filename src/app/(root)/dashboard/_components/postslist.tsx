"use client";

import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { CgMore } from "react-icons/cg";
import { FaCrown } from "react-icons/fa6";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { checkVote, getPosts, votePost } from "@/actions/post_action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { postsData } from "@/redux/slices/postSlice";
import Modal from "react-modal";
import { UserDataProps } from "@/types";
import ShareSomething from "./writepost";

interface Post {
  _id: string;
  user: UserDataProps;
  text: string;
  files: {
    fileName: string;
    fileUrl: string;
    key: string;
    fileType: string;
    fileSize: number;
    uploadedAt: Date;
  }[];
  comments: string[];
  analytics: {
    upvotes: number;
    downvotes: number;
    comments: number;
  };
  userVote: "upvote" | "downvote" | null;
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
  onCommentClick: (post: Post) => void; // New prop for handling comment click
  }

const PostCard: React.FC<PostCardProps> = ({ post, bgColor, onCommentClick }) => {
  const [emojiMenuOpen, setEmojiMenuOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const [votes, setVotes] = useState({ upvotes: post.analytics.upvotes, downvotes: post.analytics.downvotes });
  const [voted, setVoted] = useState<"upvote" | "downvote" | null>(post?.userVote || null);
  const [showAllEmojis, setShowAllEmojis] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState<string | null>(
    null
  );

  const user = useAppSelector((state) => state.user.user);
  const userId = user?._id;

  const emojis = ["🔥", "👏", "😂", "😢", "😊", "+"];

  const handleButtonClick = (postId: string) => {
    setEmojiMenuOpen((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleEmojiClick = (emoji: string, postId: string) => {
    alert(`You reacted to post with emoji: ${emoji}`);
    setEmojiMenuOpen((prev) => ({
      ...prev,
      [postId]: false,
    }));
  };

  const handleShowAllEmojis = (postId: string) => {
    setSelectedPostIndex(postId);
    setShowAllEmojis(true);
  };

  const handleCloseModal = () => {
    setShowAllEmojis(false);
    setSelectedPostIndex(null);
  };

//   useEffect(() => {
//     (async () => {
//         if(userId) {
//             const checkRes = await checkVote(post._id, userId);
//             if (checkRes.success) {
//               setVoted(checkRes.vote.type);
//             }
//         }
     
//     })();
//   }, []);

  const handleVote = async (type: "upvote" | "downvote") => {
    if (!userId) return alert("Please login to vote");

    if (voted === type) return; // Prevent repeated votes

    const res = await votePost(post._id, userId, type);
    if (res.success) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        upvotes: prevVotes.upvotes + (type === "upvote" ? 1 : 0),
        downvotes: prevVotes.downvotes + (type === "downvote" ? 1 : 0),
      }));
      setVoted(type);
    }
  };

  return (
    <div
      className={`bg-[${bgColor}] rounded-xl p-6 mb-5`}
      style={{ backgroundColor: `${post.bgColor}` }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <AnimatedTooltip
            item={{
              id: 2,
              name: "User Name", // Replace with actual data if available
              image: "/assets/user.jpeg", // Placeholder avatar
            }}
          />
          <div>
            <h3 className="font-bold">{post?.user?.username}</h3>
            <p className="text-gray-400 text-xs">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="relative">
          <button className="text-gray-600 text-xl hover:bg-gray-200 transition delay-75 rounded-full p-1">
            <CgMore />
          </button>
        </div>
      </div>
      <p
        className="mb-4 font-medium"
        dangerouslySetInnerHTML={{ __html: post.text }}
      ></p>{" "}
      {post.files.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {post.files.map((file, index) => (
            <img
              key={index}
              src={file.fileUrl}
              alt={`Post file ${index + 1}`}
              className="rounded-lg h-52 w-full object-cover"
            />
          ))}
        </div>
      )}
      <div className="flex justify-between items-center">
        {/* Reactions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleVote("upvote")}
            className="flex items-center text-gray-600"
          >
            {voted === "upvote" ? (
              <BiSolidUpvote className="mr-1" />
            ) : (
              <BiUpvote className="mr-1" />
            )}
            {votes.upvotes}
          </button>
          <div className="flex items-center text-gray-600 hover:cursor-pointer"
                      onClick={() => onCommentClick(post)} // Handle comment click

          >
            <AiOutlineComment className="mr-1" /> {post?.analytics?.comments || 0}
          </div>
          <div className="flex items-center text-gray-600">
            <IoEyeSharp className="mr-1" /> 0 {/* Placeholder for views */}
          </div>
        </div>

        {/* Emoji Button */}
        <div className="relative">
          <button
            className="bg-pink-400 text-white text-sm font-semibold px-3 py-1 rounded-2xl"
            onClick={() => handleButtonClick(post._id)}
          >
            🔥Woow!!!
          </button>

          {/* Emoji Menu */}
          {emojiMenuOpen[post._id] && (
            <div className="absolute top-full -left-20 mt-2 bg-white shadow-lg rounded-lg p-2 flex flex-row gap-2 z-10">
              {emojis.map((emoji, emojiIndex) => (
                <button
                  key={emojiIndex}
                  className="text-lg hover:scale-110 transition-transform"
                  onClick={() =>
                    emoji === "+"
                      ? handleShowAllEmojis(post._id)
                      : handleEmojiClick(emoji, post._id)
                  }
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
  );
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res.posts);
      dispatch(postsData(res.posts));
    };
    fetchPosts();
  }, []);

  const handleCommentClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };


  return (
    <div className="w-full">
      <section className="bg-opacity-50 backdrop-blur-md sticky top-0 w-full flex items-center justify-between pt-4 pb-4 px-6 mb-3">
        <h2 className="text-xl font-bold">Feeds</h2>
        <div className="flex justify-between font-semibold gap-4 items-center text-sm">
          <button className="text-gray-400 hover:text-blue-600">Recents</button>
          <button className="text-gray-900 hover:text-blue-600">Friends</button>
          <button className="text-gray-400 hover:text-blue-600">Popular</button>
        </div>
      </section>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} bgColor={post?.bgColor} onCommentClick={handleCommentClick} />
      ))}
  {isModalOpen && selectedPost && (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    ariaHideApp={false}
    className="fixed inset-0 z-[9999] bg-black bg-opacity-50 justify-center flex" // Modal container with fixed positioning
  >
    <div className="relative z-[10000] p-4 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
      {/* Modal content with higher z-index */}
      <ShareSomething isModal={true} post={selectedPost} />
    </div>
  </Modal>
)}
    </div>
  );
};

export default PostList;
