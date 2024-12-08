"use client";
import { FaCheckCircle } from "react-icons/fa";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const LandingPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-purple-50 via-white to-teal-50 font-sans relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-white to-teal-200 opacity-25"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-300 opacity-15 rounded-full"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-teal-100 opacity-30 rounded-lg animate-pulse"></div>
        <div className="absolute top-60 right-1/4 w-56 h-56 bg-teal-400 opacity-25 rounded-xl animate-pulse"></div>
      </div>

      {/* Navbar */}
      <Navbar />
      <main className="relative flex flex-col items-center px-4 md:px-8 lg:px-16 h-full justify-center z-10">
        <section
          className="w-full h-screen flex flex-col items-center justify-center text-center space-y-6"
          data-aos="fade-up"
        >
          <div className="bg-teal-50 text-xs md:text-[14px] text-teal-600 font-medium px-6 py-2 rounded-full shadow-lg mb-6 animate__animated animate__fadeIn">
            Join now to find skilled professionals for your next project →
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-4">
            The work you want, <span className="text-gray-800">the bids you need</span>.
          </h1>

          <p className="text-gray-600 max-w-lg md:max-w-2xl text-sm md:text-lg leading-relaxed text-justify md:text-center animate__animated animate__fadeIn mt-6">
            CampusBid connects project owners with skilled professionals, making it easy to collaborate, bid, and achieve great results—whether for small tasks or large projects.
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
        </section>

        {/* Features Section */}
        <section className='mb-[110px] md:mb-[200px] flex items-start'>
          <div className="max-w-5xl mx-auto text-center px-3 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            Why Choose <span className="text-teal-600">CampusBid?</span>
            </h2>
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
      <footer className="w-full py-8 px-8 lg:px-16 z-50">
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-teal-800 font-bold text-xl md:text-2xl">
            Follow Us:
          </h4>
          <div className="flex space-x-6 mb-4">
            <a
              href="https://x.com/campus_bid"
              target="_blank"
              aria-label="Twitter"
              className="text-teal-800 hover:text-teal-900 transition duration-300"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/campusbid/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-teal-800 hover:text-teal-900 transition duration-300"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/campusbid.in/"
              target="_blank"
              aria-label="Instagram"
              className="text-teal-800 hover:text-teal-900 transition duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-xs md:text-sm text-gray-600 mb-2">
          All rights reserved to CampusBid, Inc.
        </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
