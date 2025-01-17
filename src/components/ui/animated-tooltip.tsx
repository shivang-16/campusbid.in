"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  item,
}: {
  item: {
    id: number;
    name: string;
    image: string;
  };
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div
        className="relative group"
        key={item.name}
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="popLayout">
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-xl bg-white z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="max-w-sm p-4 bg-white">
                <div className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 mx-auto rounded-full object-cover border border-gray-300"
                  />
                  <h2 className="mt-4 text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">@{item.name}1234</p>
                </div>
                <div className="mt-4 flex justify-around">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800">2,198</p>
                    <p className="text-sm text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800">108</p>
                    <p className="text-sm text-gray-500">Following</p>
                  </div>
                </div>
                <div className="mt-4 gap-2 flex justify-around">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
                  >
                    Follow
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-300 transition"
                  >
                    Message
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          onMouseMove={handleMouseMove}
          height={100}
          width={100}
          src={item.image}
          alt={item.name}
          className="object-cover !m-0 !p-0 object-top rounded-full h-11 w-11 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
        />
      </div>
    </>
  );
};
