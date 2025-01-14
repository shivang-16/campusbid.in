import Image from "next/image";
import WorldMap from "@/components/ui/world-map";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Timeline } from "@/components/ui/timeline";
import { HeroHighlightDemo } from "./timeline";

export default function Home() {

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white h-auto flex flex-col font-poppins overflow-hidden">
      {/* Shooting Stars Animation */}
      <div className="absolute inset-0 z-1 h-[calc(100vh+100px)]"> {/* Extend the height of the background effect */}
        <BackgroundBeams />
      </div>

      {/* Navbar */}
      <header className="w-full flex items-center justify-between py-5 px-8 bg-opacity-80 backdrop-blur-sm z-10 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/favicon.ico"
            alt="CampusBid Logo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
          <div className="text-gray-300 text-2xl font-bold">
            CampusBid
          </div>
        </div>
        <a href="mailto:hello@campusbid.in" className="text-lg text-gray-300 hover:text-teal-400">
          hello@campusbid.in
        </a>
      </header>

      {/* Hero Section */}
      <main className="text-center mt-28 mb-16 z-10 relative">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-500">
          The College Network <br />
          to Chill, Share & Explore!
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Showcase your work, launch side projects, find jobs, and connect with incredible people.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <span className="absolute top-1/2 transform -translate-y-1/2 left-4 text-teal-400 font-bold">
              campusbid.in/
            </span>
            <input
              type="text"
              className="w-full pl-[170px] pr-14 py-3 bg-gray-900 text-gray-200 rounded-full"
              placeholder="Reserve your desired username"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-teal-300 text-black px-4 py-2 rounded-full">
              →
            </button>
          </div>
        </div>
      </main>

      {/* WorldMap Section */}
      <div className="mt-10 px-4 sm:px-8 md:px-16 lg:px-72 z-10 relative">
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
