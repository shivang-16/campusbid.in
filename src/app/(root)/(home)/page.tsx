"use client";
import { FaCheckCircle } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';
import Navbar from '@/components/Navbar';
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-purple-100 via-white to-teal-100 font-sans pt-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center px-3 md:px-6 lg:px-12 text-center h-full justify-center">
        <div className='w-full h-screen px-3 md:px-6 lg:px-12 flex flex-col text-center items-center justify-center'>
          <div className="bg-teal-50 text-xs md:text-sm text-teal-500 font-medium px-3 md:px-4 py-1 rounded-full mb-4">
            Join now to find skilled professionals for your next project →
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-4">
            The work you want, <span className="text-gray-800">the bids you need</span>.
          </h1>

          <p className="text-gray-700 max-w-md md:max-w-2xl mb-6 md:mb-8 text-sm md:text-lg text-justify md:text-center">
            CampusBid connects people looking to get projects done with skilled individuals ready to work. From small tasks to major projects, our platform makes it easy to collaborate, bid, and achieve more together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center mt-6 md:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://app.campusbid.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-900 transition duration-300 text-sm md:text-base"
            >
              Learn More
            </a>
            <a
              href="https://app.campusbid.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-200 text-teal-800 font-semibold flex items-center px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-teal-300 transition duration-200 ease-in-out text-sm md:text-base"
            >
              Start Bidding — it’s free
            </a>
          </div>

          {/* Features */}
          <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-8 text-xs md:text-sm mb-6 md:mb-8 text-gray-600 space-y-2 md:space-y-0 md:space-x-4">
            {[
              "Fully secured and reliable",
              "Easy project posting",
              "Competitive bidding for fair prices"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-1">
                <span className="text-green-700">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose CampusBid Section */}
        <section className='mb-[110px] md:mb-[200px] flex items-start'>
          <div className="max-w-5xl mx-auto text-center px-3 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Why Choose CampusBid?</h2>
            <p className="text-gray-500 mb-6 md:mb-10 text-sm md:text-base">
              Discover the benefits of working with CampusBid for all your freelancing needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Verified Freelancers', icon: FaCheckCircle, text: 'Connect with trusted professionals only.' },
                { title: 'Affordable Prices', icon: FaCheckCircle, text: 'Competitive pricing for every budget.' },
                { title: 'Quality Assurance', icon: FaCheckCircle, text: 'Ensuring top-notch results every time.' },
              ].map((feature) => (
                <div key={feature.title} className="p-4 md:p-6 rounded-lg shadow-md hover:shadow transition duration-300 text-center">
                  <feature.icon className="text-teal-600 text-3xl md:text-4xl mb-4 mx-auto" />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700">{feature.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm md:text-base">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-[110px] md:mb-[150px]">
          <div className="max-w-5xl mx-auto text-center px-3 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 mb-6 md:mb-10 text-sm md:text-base">
              Have questions? We’ve got answers!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { question: 'How does CampusBid work?', answer: 'CampusBid connects you with top freelancers for your project needs.' },
                { question: 'What services can I find on CampusBid?', answer: 'You can find a wide range of services, including design, writing, and programming.' },
                { question: 'How do I hire a freelancer?', answer: 'Simply browse through profiles, read reviews, and reach out to hire the best fit.' },
                { question: 'Is there a fee to join?', answer: 'No, joining CampusBid is free for clients.' },
              ].map((faq, index) => (
                <div key={index} className="p-4 md:p-6 rounded-lg shadow-md hover:shadow text-left">
                  <h3 className="font-semibold text-gray-700 text-base md:text-lg">{faq.question}</h3>
                  <p className="mt-2 text-gray-500 text-sm md:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 md:py-6 px-3 md:px-6 text-center bg-gradient-to-r from-purple-100 via-white to-teal-100 text-gray-700 font-medium">
        <div className="text-lg md:text-xl text-teal-600 font-bold mb-4">Follow us:</div>
        <div className="flex justify-center items-center space-x-4 md:space-x-6 mb-4">
          <a href="https://x.com/campus_bid" aria-label="X (Twitter)" target="_blank" className="text-teal-600 hover:text-teal-700">
            <FaXTwitter className="w-8 h-8 md:w-8 md:h-8 p-1 bg-gray-100 rounded-full shadow-lg border border-gray-300" />
          </a>
          <a href="https://www.linkedin.com/company/campusbid/" target="_blank" aria-label="LinkedIn" className="text-teal-600 hover:text-teal-700">
            <FaLinkedinIn className="w-8 h-8 md:w-8 md:h-8 p-1 bg-gray-100 rounded-full shadow-lg border border-gray-300" />
          </a>
          <a href="https://www.instagram.com/campusbid.in/" aria-label="Instagram" target="_blank" className="text-teal-600 hover:text-teal-700">
            <FaInstagram className="w-8 h-8 md:w-8 md:h-8 p-1 bg-gray-100 rounded-full shadow-lg border border-gray-300" />
          </a>
        </div>
        <div className="text-xs md:text-sm text-gray-600 mb-2">
          All rights reserved to CampusBid, Inc.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
