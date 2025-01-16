"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className=" font-sans w-full flex justify-center px-4 md:px-20" ref={containerRef}>
      <div ref={ref} className="relative w-[100%] lg:w-[80%] mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start ${index!=0 ? "pt-10 md:pt-40" : "pt-9 md:pt-20"} gap-3 lg:gap-7`}
          >
            <div className="sticky  flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="hidden md:block h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-800 dark:bg-gray-900 md:flex items-center justify-center shadow-md">
                <div className="h-4 w-4 rounded-full bg-gray-500 dark:bg-gray-700 border-2 border-gray-700 dark:border-gray-600" />
              </div>

              <h3 className="hidden md:block text-base sm:text-xl md:text-2xl md:pl-20 lg:text-3xl font-semibold md:font-bold text-transparent bg-gradient-to-r from-teal-300 via-gray-400 to-purple-200 bg-clip-text">
                {item.title}
              </h3>
            </div>
            <div className="relative ml-4 mr-4 md:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-semibold text-transparent bg-gradient-to-r from-teal-200 via-gray-400 to-purple-200 bg-clip-text">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-gray-600 dark:via-gray-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-800 via-blue-700 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
