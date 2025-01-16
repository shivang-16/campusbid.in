"use client";
import { useState, useEffect } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
    const phrases = [
        [
            { text: "Connect", className: "text-gray-300" },
            { text: "with", className: "text-gray-300" },
            { text: "professionals", className: "text-gray-300" },
            { text: "on", className: "text-gray-300" },
            { text: "CampusBid.", className: "text-teal-600" },
        ],
        [
            { text: "Spill", className: "text-gray-300" },
            { text: "ideas", className: "text-gray-300" },
            { text: "&", className: "text-gray-300" },
            { text: "connect", className: "text-gray-300" },
            { text: "with", className: "text-gray-300" },
            { text: "peers.", className: "text-teal-600" },
        ],
        [
            { text: "Secure", className: "text-gray-300" },
            { text: "freelancing", className: "text-gray-300" },
            { text: "projects", className: "text-gray-300" },
            { text: "with", className: "text-gray-300" },
            { text: "CampusBid.", className: "text-teal-600" },
        ],
    ];


    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [phrases.length]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-[20rem] md:h-[35rem]">
            <p className="text-gray-300 text-xs sm:text-base sm:mb-4 font-light transition-opacity duration-500">
                Your journey to growth begins here
            </p>
            <div className="mt-2 text-clip">
                <TypewriterEffectSmooth key={currentPhrase} words={phrases[currentPhrase]} />
            </div>
            <div>
                <button
                    onClick={scrollToTop}
                    className="px-5 py-1 sm:px-8 sm:py-1.5 rounded-lg sm:mt-1 bg-transparent hover:bg-teal-400 hover:cursor-pointer hover:text-gray-700 transition-all duration-400 delay-400 border border-gray-300 hover:border-none text-gray-300 text-xs sm:text-base font-medium"
                >
                    Join Now
                </button>
            </div>
        </div>
    );
}
