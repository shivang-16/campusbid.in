import React, { useState } from 'react';
import { FaChevronDown, FaUsers, FaTags, FaCheck, FaPlayCircle } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { BiSolidMicrophone } from 'react-icons/bi';

const SpillComponent: React.FC = () => {
    const [speakerOption, setSpeakerOption] = useState('Only people you invite to speak');
    const [topic, setTopic] = useState('');
    const [topics, setTopics] = useState<string[]>([]);
    const [recordSpace, setRecordSpace] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const speakerOptions = [
        'Only people you invite to speak',
        'Anyone can request to speak',
        'Everyone can speak',
    ];

    const handleAddTopic = () => {
        if (topic && topics.length < 3) {
            setTopics([...topics, topic]);
            setTopic('');
        }
    };

    const handleToggleRecordSpace = () => {
        setRecordSpace(!recordSpace);
    };

    return (
        <div className="w-[600px] mx-auto bg-gradient-to-b from-purple-50 to-white rounded-2xl py-12 px-10">
            <div className="text-gray-700 p-8">
                <div className="flex items-center justify-center mb-8">
                    <BiSolidMicrophone className="text-purple-600 text-6xl" />
                </div>
                <h2 className="text-3xl font-bold text-center mb-6">Create Your <span className='text-purple-600'>'Spill'</span> Space</h2>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                        <FaUsers className="inline mr-2 text-purple-600" /> Who can speak?
                    </label>
                    <div
                        className="flex items-center justify-between bg-transparent border-2 border-purple-200 rounded-lg px-4 py-3 cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <span>{speakerOption}</span>
                        <FaChevronDown className="text-gray-600" />
                    </div>
                    <div
                        className={`mt-2 bg-white  ${showDropdown ? 'border border-purple-200' : ''}  rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${showDropdown ? 'max-h-52' : 'max-h-0'}`}
                    >
                        {showDropdown && (
                            <div>
                                {speakerOptions.map((option) => (
                                    <div
                                        key={option}
                                        className="px-4 py-2 hover:bg-purple-50 cursor-pointer"
                                        onClick={() => {
                                            setSpeakerOption(option);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                        <FaTags className="inline mr-2 text-purple-600" /> What do you want to talk about?
                    </label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full bg-transparent border-2 border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        placeholder="Type here..."
                    />
                    <button
                        className="mt-2 text-purple-600 hover:underline"
                        onClick={handleAddTopic}
                        disabled={topics.length >= 3 || !topic.trim()}
                    >
                        Add Topic ({topics.length}/3)
                    </button>
                    <ul className="mt-2 list-disc list-inside">
                        {topics.map((t, index) => (
                            <li key={index} className="text-gray-800">{t}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <span>
                        <FaCheck className="inline mr-2 text-purple-600" /> Record Space
                    </span>
                    <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            checked={recordSpace}
                            onChange={handleToggleRecordSpace}
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <label
                            htmlFor="toggle"
                            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                    </div>
                </div>

                <button className="w-full bg-purple-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <FaPlayCircle className="inline mr-2" /> Start now
                </button>

                <div className="mt-6 text-center">
                    <FaInfoCircle className="inline mr-2 text-purple-600" />
                    <span className="text-purple-600 cursor-pointer hover:underline">Get to know Spill Spaces</span>
                </div>
            </div>
        </div>
    );
};

export default SpillComponent;
