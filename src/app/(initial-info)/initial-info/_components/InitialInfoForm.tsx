import Image from "next/image";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col font-poppins">
      {/* Globe Background */}

      {/* Navbar */}
      <header className="w-full flex items-center justify-between py-6 px-8 shadow-lg bg-opacity-80 backdrop-blur-sm z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/favicon.ico"
            alt="CampusBid Logo"
            width={40}
            height={40}
            className="rounded-full hover:scale-110 transition-transform shadow-xl cursor-pointer"
          />
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300 text-2xl font-extrabold tracking-wide">
            CampusBid
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <a
            href="#"
            className="text-lg hover:text-teal-400 transition-colors duration-300"
          >
            Scroll
          </a>
          <a
            href="#"
            className="text-lg hover:text-teal-400 transition-colors duration-300"
          >
            Jobs
          </a>
          <a
            href="#"
            className="text-lg hover:text-teal-400 transition-colors duration-300"
          >
            Spotlight
          </a>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-gray-700 text-sm rounded-lg text-white hover:bg-gray-700 transition-all duration-300">
              Log in
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-teal-300 to-purple-300 text-sm font-semibold text-black rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              Create Profile
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center mt-16 z-10">
        <h1 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-indigo-500 animate-gradient">
          The Professional Network <br />
          to Show & Tell Your Work!
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Showcase your work, launch side projects, find jobs, and connect <br />
          with the most (in)credible people.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <span className="absolute top-1/2 transform -translate-y-1/2 left-4 text-teal-400 font-bold">
              campusbid.com/
            </span>
            <input
              type="text"
              className="w-full pl-[170px] pr-14 py-3 bg-gray-900 text-white rounded-full focus:outline-none shadow-lg focus:ring-2 focus:ring-teal-500"
              placeholder="username"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gradient-to-r from-teal-300 to-purple-100 hover:from-teal-500 hover:to-purple-700 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all">
              →
            </button>
          </div>
        </div>
        <p className="mt-4 text-gray-400">Claim your username before it’s too late!</p>

        {/* Profile Icons */}
        <div className="flex justify-center flex-wrap mt-12 gap-6 mx-80">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:scale-110 hover:bg-gradient-to-r from-teal-300 to-purple-100 transition-all"
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-400">94,054+ peers and counting...</p>
      </main>
    </div>
  );
}
