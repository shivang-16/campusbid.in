import React from 'react';
import { PiHandsClappingDuotone } from "react-icons/pi";
import { FaRegClock, FaMicrophone, FaPaperclip, FaSmile } from "react-icons/fa";

const messages = [
    {
        type: "user",
        content: "Provide statistics on the development of the Indonesian population",
        time: "1 min ago"
    },
    {
        type: "response",
        content: "Well, here's the latest statistical data on Indonesia's population:",
        stats: {
            year: "2022",
            population: "275.5 million",
            chartData: [12, 20, 16, 18]
        },
        time: "Just now"
    },
    {
        type: "user",
        content: "Can you also provide data for 2021?",
        time: "30 secs ago"
    },
    {
        type: "response",
        content: "Sure! The population in 2021 was approximately 273.5 million.",
        stats: {
            year: "2021",
            population: "273.5 million",
            chartData: [12, 18, 16, 12]
        },
        time: "Just now"
    },
    {
        type: "user",
        content: "Thanks! Btw, have you watched any good movies lately?",
        time: "10 secs ago"
    },
    {
        type: "response",
        content: "Yeah, I watched \"Inception\" again. Such a masterpiece!",
        time: "Just now"
    },
    {
        type: "user",
        content: "Oh, love that movie! The dream layers are mind-bending!",
        time: "5 secs ago"
    },
    {
        type: "response",
        content: "Totally! The soundtrack is epic too.",
        time: "Just now"
    }
];

const ChatComponent: React.FC = () => {
    return (
        <div className="w-full mx-auto  rounded-3xl p-4 sticky bottom-2 bg-gradient-to-b from-purple-50 to-white flex items-center justify-center">
            <div className="w-full max-w-3xl bg-transparent">
                <div className="p-8 space-y-8">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "items-start"}`}>
                            {msg.type === "response" && (
                                <img src="/assets/my.jpeg" alt="me" className="w-11 h-11 rounded-full shadow-lg" />
                            )}
                            <div
                                className={`${msg.type === "user" ? "bg-blue-50 text-gray-700" : "bg-gray-100"} rounded-xl px-6 py-4 ml-4 inline-block text-base font-semibold`}
                            >
                                <p>{msg.content}</p>
                                {msg.stats && (
                                    <div className="mt-4 p-6 bg-white rounded-lg">
                                        <div className="text-gray-700 text-sm font-bold">{msg.stats.year}</div>
                                        <div className="text-3xl font-extrabold text-gray-700">{msg.stats.population}</div>
                                        <div className="flex space-x-2 mt-4">
                                            {msg.stats.chartData.map((height, idx) => (
                                                <div key={idx} className={`w-5 h-${height} bg-${idx % 2 === 0 ? "yellow" : "purple"}-400 rounded`}></div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center text-gray-700 text-xs mt-2">
                                    {msg.type === "user" && <FaRegClock className="mr-1" />}
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Section */}
                <div className="sticky bottom-3 flex items-center py-3 px-4 border-t bg-pink-50 rounded-3xl">
                    <input
                        type="text"
                        placeholder="Ask anything here..."
                        className="flex-grow px-5 py-2 bg-blue-50 border rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <div className="flex space-x-4 ml-4">
                        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition">
                            <FaPaperclip size={18} />
                        </button>
                        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition">
                            <FaMicrophone size={18} />
                        </button>
                        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition">
                            <FaSmile size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
