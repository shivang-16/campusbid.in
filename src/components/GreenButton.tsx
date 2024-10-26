import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const GreenButton: React.FC<ButtonProps> = ({ label, className = '' }) => {
  return (
    <button
      className={`bg-teal-100 text-teal-800 font-semibold px-6 py-2 rounded-lg shadow hover:bg-teal-200 transition duration-200 ease-in-out ${className}`}
    >
      {label}
    </button>
  );
};

export default GreenButton;
