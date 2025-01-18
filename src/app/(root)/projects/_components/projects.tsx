import React from 'react';
import { useState } from 'react';
import { PiHandsClappingDuotone } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";

const Projects: React.FC = () => {

    function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
        const startRadians = (startAngle - 90) * Math.PI / 180;
        const endRadians = (endAngle - 90) * Math.PI / 180;

        const x1 = x + radius * Math.cos(startRadians);
        const y1 = y + radius * Math.sin(startRadians);
        const x2 = x + radius * Math.cos(endRadians);
        const y2 = y + radius * Math.sin(endRadians);

        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            `M ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`
        ].join(" ");
    }

    const cards = [
        {
            id: 1,
            image: "/assets/image1.webp",
            title: "Tech Nexus Logo",
        },
        {
            id: 2,
            image: "/assets/image2.jpg",
            title: "Mobile App Design",
        },
        {
            id: 3,
            image: "/assets/image3.jpeg",
            title: "Billboard Ad",
        },
        {
            id: 4,
            image: "/assets/land1.png",
            title: "Empowering Innovation",
        },
    ];


    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Banking App Design",
            team: ["/assets/image1.webp", "/assets/image2.jpg", "/assets/image3.jpeg"],
            time: "2:30 PM - 6:30 PM",
            progress: 46,
            daysLeft: 6,
            bgColor: "bg-blue-50",
            progressColor: "text-blue-500",
            applauds: 10,
        },
        {
            id: 2,
            title: "Wallet App Design",
            team: ["/assets/image1.webp", "/assets/image2.jpg", "/assets/image3.jpeg"],
            time: "10:00 AM - 1:00 PM",
            progress: 80,
            daysLeft: 3,
            bgColor: "bg-yellow-50",
            progressColor: "text-yellow-500",
            applauds: 20,
        },
        {
            id: 3,
            title: "E-Commerce Platform",
            team: ["/assets/image1.webp", "/assets/image2.jpg", "/assets/image3.jpeg"],
            time: "11:00 AM - 4:00 PM",
            progress: 60,
            daysLeft: 2,
            bgColor: "bg-green-50",
            progressColor: "text-green-500",
            applauds: 35,
        },
    ]);

    const handleApplaud = (id: number) => {
        setProjects((prevProjects: any) =>
            prevProjects
                .map((project: any) =>
                    project.id === id ? { ...project, applauds: project.applauds + 1 } : project
                )
                .sort((a: any, b: any) => b.applauds - a.applauds) // Sort by applauds
        );
    };


    return (
        <div className="w-full">
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white rounded-2xl px-6 py-8">
            {/* Header Section */}
            <header className="mb-6">
                <div className="flex justify-between items-center">
                    <div className="flex  flex-col justify-between items-start">
                        <h1 className=" text-xl text-gray-700 font-semibold">Welcome Back</h1>
                        <p className="text-sm text-gray-400 font-semibold">Piyush Joshi ! 👋</p>
                    </div>
                    <img
                        src="/assets/my.jpeg" // Replace with profile image
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full"
                    />
                </div>
            </header>

            {/* Recent Activity Section */}
            <section className="mb-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-600">Top Projects</h2>
                </div>

                <div className="py-3">
                    <div className="border-white rounded-[8px] bg-transparent grid gap-2">
                        {/* Bento-style for the first 3 images */}
                        <div className="grid grid-cols-6 gap-2">
                            {cards.slice(0, 3).map((card, index) => (
                                <img
                                    key={index}
                                    src={card.image}
                                    alt={`Photo ${index + 1}`}
                                    className={`w-full object-cover rounded-[5px] 
                                    ${index === 0
                                            ? "col-span-4 row-span-2 h-[267px] rounded-[8px]" // Large first image
                                            : index === 1 ? "col-span-2 row-span-1 h-32 rounded-[8px]" : "col-span-2 row-span-1 h-32" // Smaller top-right images
                                        }`} />
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Today's Task Section */}
            <section>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-600">Special mentions</h2>
                </div>

                <div className="mt-4 space-y-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`p-4 ${project.bgColor} rounded-lg flex justify-between items-center  transition duration-300 `}
                        >
                            {/* Project Details */}
                            <div>
                                <h3 className="text-base font-semibold text-gray-700">{project.title}</h3>
                                <p className="text-sm font-medium pt-1 text-gray-500">Team members:</p>
                                <div className="flex mt-2">
                                    {project.team.map((member, index) => (
                                        <img
                                            key={index}
                                            src={member}
                                            alt={`Team Member ${index + 1}`}
                                            className={`w-8 h-8 rounded-full border-2 border-white  ${index != 0 && "-ml-2"} `}
                                        />
                                    ))}
                                </div>
                                <div className='mt-4 flex gap-1 items-center text-gray-500'>
                                    <FaRegClock className="text-sm font-medium " />
                                    <p className=" text-xs font-medium">{project.time}</p>
                                </div>
                            </div>

                            {/* Progress and Applauds */}
                            <div className="text-center space-y-4">
                                {/* Progress Circle */}
                                <div className="relative w-[54px] h-[54px] mx-auto">
                                    <svg className="w-full h-full" viewBox="0 0 36 36">
                                        {/* Background circle */}
                                        <circle
                                            className="text-gray-300"
                                            strokeWidth="3"
                                            fill="transparent"
                                            r="10"
                                            cx="18"
                                            cy="18"
                                        />
                                        {/* Progress circle */}

                                        {/* Circular path ring */}
                                        <path
                                            className="text-gray-300 stroke-current"
                                            strokeWidth="2"
                                            fill="transparent"
                                            d={describeArc(18, 18, 16, 0, (project.progress / 100) * 360)}
                                        />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-600">
                                        {project.progress}%
                                    </span>
                                </div>


                                {/* Applaud Button */}
                                <button
                                    onClick={() => handleApplaud(project.id)}
                                    className="flex items-center justify-center px-4 py-1.5 gap-2 bg-pink-500 text-white text-sm font-semibold rounded-2xl shadow-md transition-all duration-300 hover:bg-pink-700 focus:ring-2 focus:ring-blue-300 active:scale-95"
                                >
                                    <PiHandsClappingDuotone className="text-yellow-200 text-lg" />

                                    <span>Applaud ({project.applauds})</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        </div>
    );
};

export default Projects;
