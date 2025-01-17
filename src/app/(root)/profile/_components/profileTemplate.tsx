import React from 'react';

interface UserProfileProps {
    avatar: string;
    username: string;
    followers: number;
    following: number;
    bio: string;
    photos: string[];
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, username, followers, following, bio, photos }) => {
    return (
        <div className="max-w-[90%] relative mx-auto bg-blue-50 rounded-3xl ">
            <div>
                <img
                    src='/assets/Rectangle1.png'
                    className="w-full h-56 object-cover bg-purple-100 rounded-t-3xl"
                />

            </div>
            <div className='absolute bg-[#f9f6fd] rounded-t-[40px] z-10 pt-6 top-44'>
                <div className="absolute -top-12 w-full flex">
                    <div className="text-center absolute top-16 left-[15%]">
                        <span className="block text-lg font-bold text-gray-800">{followers}k</span>
                        <span className="text-sm text-gray-700 font-bold">Followers</span>
                    </div>
                    <img
                        src="/assets/my.jpeg"
                        alt="Avatar"
                        className="w-24 h-24  rounded-full m-auto border-white border-4"
                    />
                    <div className="text-center  absolute top-16 right-[15%]">
                        <span className="block text-lg font-bold text-gray-800">{following}</span>
                        <span className="text-sm text-gray-700 font-bold">Following</span>
                    </div>
                </div>
                <div className="text-center px-5">
                    <h2 className="text-lg font-bold mt-10 text-gray-800">@{username}</h2>
                    <p className="text-sm text-gray-600 font-medium mt-2">{bio}</p>
                    <div className="mt-2 flex justify-center space-x-8">


                    </div>
                    <div className="mt-3 flex justify-center space-x-4">
                        <button className="px-6 py-1.5 bg-[#5485f0] text-white font-medium rounded-full shadow hover:bg-blue-400 transition">
                            Follow
                        </button>
                        <button className="px-6 py-1.5 bg-white text-gray-800 font-medium rounded-full shadow hover:bg-gray-100 transition">
                            Message
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex justify-center space-x-8 text-gray-700">
                        <button className="font-bold hover:text-gray-800 border-b-2 border-blue-600">All</button>
                        <button className="font-bold hover:text-gray-800">Photos</button>
                        <button className="font-bold hover:text-gray-800">Videos</button>
                    </div>
                    <div className="border-white border-4 mt-4 rounded-t-[40px] p-1 bg-white grid gap-2">
                        {/* Bento-style for the first 3 images */}
                        <div className="grid grid-cols-6 gap-2">
                            {photos.slice(0, 3).map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    className={`w-full object-cover rounded-[5px] 
                                    ${index === 0
                                            ? "col-span-4 row-span-2 h-[275px] rounded-tl-[40px]" // Large first image
                                            : index === 1 ? "col-span-2 row-span-1 h-32 rounded-tr-[40px]" : "col-span-2 row-span-1 h-32" // Smaller top-right images
                                        }`} />
                            ))}
                        </div>
                        {/* Grid for remaining images: 3 per row */}
                        <div className="grid grid-cols-3 gap-2">
                            {photos.slice(3).map((photo, index) => (
                                <img
                                    key={index + 3}
                                    src={photo}
                                    alt={`Photo ${index + 4}`}
                                    className="w-full h-40 object-cover rounded-[5px]" // Consistent size for remaining images
                                />
                            ))}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default UserProfile;
