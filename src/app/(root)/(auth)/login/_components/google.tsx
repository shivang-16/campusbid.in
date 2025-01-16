import React from 'react';

const GoogleLogoButton: React.FC = () => (
  <button className="flex items-center justify-center w-full py-3 mt-4 bg-white border rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105">
    <svg
      className="mr-3 w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="#fbc02d"
        d="M43.6 20.4h-19v7.2h11.2c-1.4 3.8-4.2 6.5-11.2 6.5-6.7 0-12.2-5.5-12.2-12.2s5.5-12.2 12.2-12.2c3.3 0 6.1 1.2 8.2 3.2l5.7-5.7c-3.8-3.6-8.8-5.9-13.9-5.9-11.6 0-21 9.4-21 21s9.4 21 21 21c10.9 0 20.4-8 20.4-20.4 0-1.3-.1-2.7-.4-4.1z"
      />
      <path
        fill="#e53935"
        d="M7.5 14.6l5.9 4.4c1.6-3.8 5.6-6.5 10.1-6.5 3.3 0 6.1 1.2 8.2 3.2l5.7-5.7c-3.8-3.6-8.8-5.9-13.9-5.9-7.4.1-13.9 3.9-17.6 9.5z"
      />
      <path
        fill="#4caf50"
        d="M24 44.2c5.4 0 10.3-2.1 13.9-5.5l-6.4-5.2c-2 1.6-4.7 2.5-7.5 2.5-6.1 0-11.3-4.2-12.8-9.8l-6.2 4.8c3.6 6.5 10.4 10.8 18.5 10.8z"
      />
      <path
        fill="#1565c0"
        d="M43.6 20.4h-19v7.2h11.2c-1.4 3.8-4.2 6.5-11.2 6.5-6.7 0-12.2-5.5-12.2-12.2s5.5-12.2 12.2-12.2c3.3 0 6.1 1.2 8.2 3.2l5.7-5.7c-3.8-3.6-8.8-5.9-13.9-5.9-11.6 0-21 9.4-21 21s9.4 21 21 21c10.9 0 20.4-8 20.4-20.4 0-1.3-.1-2.7-.4-4.1z"
      />
    </svg>
    Sign up with Google
  </button>
);

export default GoogleLogoButton;
