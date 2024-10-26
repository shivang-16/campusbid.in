// LandingPage.tsx
import React from 'react';
import Testimonials from '@/components/Testimonials';
import GreenButton from '@/components/GreenButton';
import Navbar from '@/components/Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-100 via-white to-teal-50 font-sans">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <main className="flex flex-col items-center py-20 px-6 text-center pt-36">
        <div className="bg-teal-50 text-teal-500 font-medium px-4 py-1 rounded-full mb-4">
          Join now to find skilled professionals for your next project →
        </div>
        <h1 className="text-5xl font-bold text-teal-500 mb-2">
          Get Work Done, <span className="text-gray-800">One Bid at a Time</span>.
        </h1>
        <p className="text-gray-700 max-w-2xl">
          CampusBid connects people looking to get projects done with skilled individuals ready to work. From small tasks to major projects, our platform makes it easy to collaborate, bid, and achieve more together.
        </p>

        <div className="flex flex-wrap justify-center mt-8 space-x-4">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition duration-300">
            Learn More
          </button>
          <GreenButton
            label="Start Bidding — it’s free"
            className={`bg-teal-100 text-teal-800 font-semibold px-6 py-2 rounded-lg shadow hover:bg-teal-200 transition duration-200 ease-in-out`}
          ></GreenButton>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center mt-8 text-sm text-gray-600 space-x-4">
          <div className="flex items-center space-x-1">
            <span>✓</span>
            <span>Trusted by thousands of users</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>✓</span>
            <span>Easy project posting</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>✓</span>
            <span>Competitive bidding for fair prices</span>
          </div>
        </div>
      </main>

      {/* Additional Information Section */}
      <section className="py-16 px-6 text-center mt-10">

        <h2 className="text-3xl font-bold text-teal-500 mb-4">Why Choose CampusBid?</h2>
        <p className="text-gray-700 mb-6">
          At CampusBid, we empower freelancers and project owners alike to find the perfect match for their needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-teal-100 rounded-lg">
            <h3 className="font-semibold text-teal-800">Impactful Connections</h3>
            <p className="text-gray-600">Building a community of skilled professionals and project seekers.</p>
          </div>
          <div className="p-4 bg-teal-100 rounded-lg">
            <h3 className="font-semibold text-teal-800">Streamlined Process</h3>
            <p className="text-gray-600">Simplifying the project bidding and hiring process for everyone.</p>
          </div>
          <div className="p-4 bg-teal-100 rounded-lg">
            <h3 className="font-semibold text-teal-800">Proven Success</h3>
            <p className="text-gray-600">Join a network that has facilitated countless successful collaborations.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-500 mb-4">Join the CampusBid Community Today!</h2>
        <p className="text-gray-700 mb-4">
          Discover how easy it is to find and hire skilled individuals for your projects. 
        </p>
        <GreenButton
          label="Get Started"
          className={`bg-teal-100 text-teal-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-teal-200 transition duration-200 ease-in-out`}
        />
      </section>

      {/*<Testimonials />*/}
      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 text-center text-gray-700 font-medium">
        © 2024 CampusBid, Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
