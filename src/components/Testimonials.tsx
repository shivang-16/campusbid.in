"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Krishna Yadav",
    role: "Startup Founder",
    text: "CampusBid connected me with talented individuals who helped bring my project ideas to life. The quality of work and professionalism exceeded my expectations.",
  },
  {
    name: "Aadhya Sharma",
    role: "Graduate Student",
    text: "The project writers on CampusBid saved me countless hours. I could focus on other tasks while experts handled my documentation with precision and dedication.",
  },
  {
    name: "Vaibhav Kumar",
    role: "Engineering Student",
    text: "CampusBid has been a game-changer for me! I found someone to help me structure and finish my project just in time for my final submission.",
  },
  {
    name: "Riya Sharma",
    role: "Entrepreneur",
    text: "Thanks to CampusBid, I could focus on scaling my business while professionals took care of the technical details of my project.",
  },
  {
    name: "Aditya Singh",
    role: "Freelancer",
    text: "CampusBid helped me connect with clients in need of project writing. It’s a fantastic platform for collaboration and mutual benefit.",
  },
  {
    name: "Priya Kapoor",
    role: "MBA Student",
    text: "CampusBid connected me with experts who completed my projects on time and met all requirements. Highly recommend for students needing assistance!",
  },
  {
    name: "Soham Patil",
    role: "Business Owner",
    text: "The experts on CampusBid handled my project professionally. It's a great platform for busy entrepreneurs who need reliable support.",
  },
  {
    name: "Neha Gupta",
    role: "Researcher",
    text: "CampusBid introduced me to people who helped refine my project and polish my research. Excellent experience!",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-teal-600 bg-clip-text">
        Testimonials
      </h2>

      <Slider {...settings} className="px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 h-auto">
            <div
              className={`p-8 ${index%2==0 ? 'bg-white' : 'bg-teal-50'} bg-opacity-90 rounded-2xl shadow-lg border border-purple-200 transform transition duration-300 hover:scale-105 min-h-[230px] flex flex-col justify-between`}
            >
              <p className="text-gray-700 text-base leading-tight flex-grow">
                "{testimonial.text}"
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600 text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
