"use client";
import { useState, useEffect } from "react";
import LeftNavbar from "./dashboard/_components/leftnavbar";
import RightSideBar from "./dashboard/_components/rightsidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isDragging, setIsDragging] = useState(false);
  // const [dragCounter, setDragCounter] = useState(0); // To handle nested drag events

  // const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log("enter")
  //   if (dragCounter === 0) {
  //     setDragCounter((prev) => prev + 1);
  //     setIsDragging(true);
  //   }
  // };

  // const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragCounter((prev) => Math.max(0, prev - 1));
  //   if (dragCounter === 0) {
  //     console.log("exit")
  //     setIsDragging(false);
  //   }
  // };

  // const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setIsDragging(false);
  //   setDragCounter(0);
  //   const files = e.dataTransfer.files;
  //   console.log("Dropped files:", files);
  //   // Add any additional file handling logic here
  // };

  // const handleWindowDragOver = (e: DragEvent) => {
  //   // Check if the mouse is outside the window bounds
  //   if (
  //     e.clientX <= 0 ||
  //     e.clientY <= 0 ||
  //     e.clientX >= window.innerWidth ||
  //     e.clientY >= window.innerHeight
  //   ) {
  //     setIsDragging(false);
  //     setDragCounter(0);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("dragover", handleWindowDragOver);
  //   window.addEventListener("dragend", () => {
  //     setIsDragging(false);
  //     setDragCounter(0);
  //   });
  //   window.addEventListener("drop", () => {
  //     setIsDragging(false);
  //     setDragCounter(0);
  //   });

  //   return () => {
  //     window.removeEventListener("dragover", handleWindowDragOver);
  //     window.removeEventListener("dragend", () => {
  //       setIsDragging(false);
  //       setDragCounter(0);
  //     });
  //     window.removeEventListener("drop", () => {
  //       setIsDragging(false);
  //       setDragCounter(0);
  //     });
  //   };
  // }, []);




  return (
    <div
      className={`h-screen overflow-hidden flex justify-center relative z-[1000]
        }`}
    // onDragEnter={handleDragEnter}
    // onDragOver={handleDragOver}
    // onDragLeave={handleDragLeave}
    // onDrop={handleDrop}
    >
      {/* {isDragging && (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-40 z-[100] transition-opacity duration-300 ease-in-out">

          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center  z-[60] w-screen h-screen brightness-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-purple-600 animate-bounce"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a1 1 0 01.707.293l9 9a1 1 0 01-1.414 1.414L19 11.414V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-8.586l-1.293 1.293a1 1 0 01-1.414-1.414l9-9A1 1 0 0112 2zM8 11v8h8v-8h2.586L12 4.414 5.414 11H8z" />
            </svg>
            <p className="text-2xl text-purple-600 z-[1] font-extrabold mb-2">Upload</p>
          </div>

        </>
      )} */}
      <LeftNavbar />
      <div className="overflow-y-auto">{children}</div>
      <RightSideBar />
    </div>
  );
}
