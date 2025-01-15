"use client"
import Image from "next/image";
import WorldMap from "@/components/ui/world-map";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroHighlightDemo } from "./timeline";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white h-auto flex flex-col font-poppins overflow-hidden">
      {/* Shooting Stars Animation */}
      <div className="absolute inset-0 z-1 h-[calc(100vh+100px)]"> {/* Extend the height of the background effect */}
        <BackgroundBeams />
      </div>

      {/* Navbar */}
      <header className="w-full flex items-center justify-between py-5 px-4 lg:px-8 bg-opacity-80 backdrop-blur-sm z-10 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/favicon.ico"
            alt="CampusBid Logo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
          <div className="text-gray-300 text-lg md:text-xl lg:text-2xl font-bold hidden md:block">
            CampusBid
          </div>
        </div>
        <button
          onClick={() => window.location.href = "mailto:hello@campusbid.in"}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#5eead4_0%,#393BB2_50%,#a855f7_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-3 py-0.5 md:py-1 text-sm lg:text-base font-medium text-white backdrop-blur-3xl">
            hello@campusbid.in
          </span>
        </button>



      </header>

      {/* Hero Section */}
      <main className="text-center mt-28 mb-16 z-10 relative px-5 md:px-5 lg:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-500">
          The College Network <br />
          to Chill, Share & Explore!
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-4 ">
          Showcase your work, launch side projects, find jobs, and connect with incredible people.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center items-center">
          <div className="relative w-full flex max-w-lg">
            <span className="absolute top-1/2 transform -translate-y-1/2 left-4 text-teal-500 font-medium text-[12px] md:text-base">
              campusbid.in/
            </span>
            <input
              type="text"
              className="w-full py-3 pl-28 sm:pl-44 pr-14 bg-gray-800 text-gray-200 rounded-full text-[13px] placeholder:text-[13px] md:text-base md:placeholder:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              placeholder="eg. example@gmail.com"
            />
            <button className="absolute top-1/2 transform text-sm md:text-base -translate-y-1/2 right-0 bg-teal-500 text-white hover:bg-teal-600 flex items-center justify-center gap-2 px-[14px] md:px-5 py-[14px] font-extrabold rounded-full shadow-md transition">
              <FiArrowRight className="text-lg" />
            </button>

          </div>
        </div>
      </main>

      {/* WorldMap Section */}
      <div className="mt-10 px-2 sm:px-8 md:px-16 lg:px-72 z-10 relative">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
          <WorldMap />
        </div>
      </div>


      <div className="relative w-full h-auto rounded-lg shadow-lg overflow-hidden">
        <HeroHighlightDemo />
      </div>
    </div>
  );
}
