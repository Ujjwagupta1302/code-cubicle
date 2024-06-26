"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "LeafLens:",
      className: "text-green-500 dark:text-green-500",
    },
    {
      text: "AI",
    },
    {
      text: "Powered",
    },
    {
      text: "Forest",
    },
    {
      text: "Management",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  bg-white relative ">
      
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
      </div>
    </div>
  );
}
