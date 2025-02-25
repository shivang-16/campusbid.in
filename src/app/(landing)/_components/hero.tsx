'use client'
import Image from "next/image";
import WorldMap from "@/components/ui/world-map";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroHighlightDemo } from "./timeline";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { joinWaitingList } from "@/actions/user_action";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleWait = async (email: string) => {
    setLoading(true);
    const res = await joinWaitingList(email);
    setLoading(false);

    if (res.success) {
      toast.success("You are all set to go!");
    } else {
      console.log(res);
      toast.error(res.message || "Something went wrong");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      handleWait(inputRef.current.value);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white h-auto flex flex-col font-poppins overflow-hidden">
      {/* Shooting Stars Animation */}
      <div className="absolute inset-0 z-1 h-[calc(100vh+100px)]">
        <BackgroundBeams />
      </div>

      {/* Navbar */}
      <header className="w-full flex items-center justify-between py-5 px-4 lg:px-8 bg-opacity-80 backdrop-blur-sm z-10 relative">
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
        <p className="text-gray-400 text-base md:text-lg mt-4">
          Showcase your work, launch side projects, find jobs, and connect with incredible people.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center items-center">
          <form className="relative w-full flex max-w-lg" onSubmit={handleSubmit}>
            <span className="absolute top-1/2 transform -translate-y-1/2 left-4 text-teal-500 font-medium text-[12px] md:text-base">
              campusbid.in/
            </span>
            <input
              type="text"
              ref={inputRef}
              required
              className="w-full py-3 pl-28 sm:pl-44 pr-14 bg-gray-800 text-gray-200 rounded-full text-[13px] placeholder:text-[13px] md:text-base md:placeholder:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              placeholder="eg. example@gmail.com"
            />
            <button
              type="submit"
              className="group absolute top-1/2 transform text-sm md:text-base -translate-y-1/2 right-0 bg-transparent text-white flex items-center justify-center gap-2 px-[14px] md:px-5 py-[14px] font-extrabold rounded-full transition"
            >
              {loading ? (
                <div className="spinner-border animate-spin inline-block w-6 h-6 border-[2px] rounded-full border-t-transparent border-r-transparent"></div>
              ) : (
                <FiArrowRight className="text-lg transition-transform duration-150 group-hover:translate-x-2" />
              )}
            </button>
          </form>
        </div>
      </main>

      {/* WorldMap Section */}
      <div className="mt-10 px-2 sm:px-8 md:px-16 lg:px-72 z-10 relative">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
          <WorldMap />
        </div>
      </div>


      <div className="relative w-full h-auto rounded-lg md:pt-16 shadow-lg overflow-hidden">
        <HeroHighlightDemo />
      </div>
    </div>
  );
}
