"use client"
import React, { useState } from 'react';
import { FaEye, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    if (!email) {
      return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return 'Invalid email';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'Required';
    }
    return '';
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError && !passwordValidationError) {
      console.log({ email, password });
    }
  };

  return (
    <div className="min-h-screen flex font-poppins bg-gradient-to-b bg-white">

      {/* Right Side - Image Section */}
      <div className="hidden md:block w-[60%] relative m-1">
        <Image
          alt="login"
          className=" w-[90%] h-[90%] object-cover rounded-l-xl bg-cover bg-no-repeat bg-center animate-fade-in"
          src="/assets/login.png"
          layout="fill"
        />
      </div>

      {/* Left Side - Form Section */}
      <div className="flex w-[40%] justify-center items-center bg-transparent p-10  bg-opacity-70">
        <div className="w-full max-w-[63%] space-y-8">
          <div className="">
            <div className="text-2xl font-bold bg-clip-text text-gray-700 mb-2">
              Create Your Account
            </div>
            <p className="text-sm text-gray-500">
              The College Network to Chill, Share & Explore!
            </p>
          </div>
          <button
            type="button"
            className="flex text-xs items-center justify-center w-full py-2 mt-2 bg-white border rounded-sm hover:shadow-sm hover:bg-gray-50 transition-all transform hover:scale-102"
          >
            <FcGoogle className="mr-3 text-red-500" />
            Sign up with Google
          </button>
          <div className="flex items-center justify-between mt-1">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-[9px] text-center text-gray-500 uppercase">
              Or Sign Up with
            </span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit} className="mt-1 space-y-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="block text-xs font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 mt-1 text-xs border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />

                <label className="block text-xs font-medium text-gray-700">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 mt-1 text-xs border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />

                <label className="block text-xs font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 text-xs mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {emailError && <div className="text-red-400 text-xs mt-2">{emailError}</div>}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 text-xs mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                </div>
                {passwordError && <div className="text-red-400 text-xs mt-2">{passwordError}</div>}
              </div>
            </div>

            <div className="flex text-xs items-center justify-between space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-purple-600 border-purple-600 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs text-gray-700"
                >
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-10 text-xs py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-sm hover:shadow-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 transition-all transform hover:scale-102"
            >
              Sign Up
            </button>

            <p className="text-center text-xs mt-4">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
