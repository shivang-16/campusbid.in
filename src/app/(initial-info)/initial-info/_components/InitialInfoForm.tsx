import Image from "next/image";
import WorldMap from "@/components/ui/world-map";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col font-poppins">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between py-6 px-8 shadow-lg bg-opacity-80 backdrop-blur-sm z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/favicon.ico"
            alt="CampusBid Logo"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
          <div className="text-gray-100 text-2xl font-bold">
            CampusBid
          </div>
        </div>

        {/* Navigation */}
        {/* <nav className="flex items-center space-x-8">
          <a href="#" className="text-lg hover:text-teal-400">Scroll</a>
          <a href="#" className="text-lg hover:text-teal-400">Jobs</a>
          <a href="#" className="text-lg hover:text-teal-400">Spotlight</a>
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-gray-700 text-sm rounded-lg text-white hover:bg-gray-700">Log in</button>
            <button className="px-6 py-2 bg-teal-300 text-sm text-black rounded-lg">Create Profile</button>
          </div>
        </nav> */}
        <a href="mailto:hello@campusbid.in" className="text-lg text-gray-300 hover:text-teal-400">
          hello@campusbid.in
        </a>

      </header>

      {/* Hero Section */}
      <main className="text-center mt-28 mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-500">
          The Professional Network <br />
          to Show & Tell Your Work!
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
              className="w-full pl-[170px] pr-14 py-3 bg-gray-900 text-white rounded-full"
              placeholder="Reserve your desired username"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-teal-300 text-black px-4 py-2 rounded-full">
              →
            </button>
          </div>
        </div>
      </main>

      {/* WorldMap Section */}
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-72">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
          <WorldMap />
        </div>
      </div>
    </div>
  );
}
