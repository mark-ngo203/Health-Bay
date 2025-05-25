"use client";
import NextLink from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
// cat
import idle from "@/app/assets/hbcat-idle.png";
import explain from "@/app/assets/hbcat-exp.png";



export default function Home() {
    {/* Formatting the main page*/}
  return (
    <div className="flex justify-center w-full h-[75vh]">
      {/* Left Side */}
      <div className="flex flex-col flex-1 max-w-2xl">
        {/* HealthBay's Mascot */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
            {/* if given a response, will change image, will do later */}
            <Image 
              src={idle} 
              alt="Health Bay Mascot"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        {/* Input and Text History Containter*/}
        <div className="flex flex-col h-full">
          {/* scrollable history */}
          <div className="flex flex-col-reverse flex-1 bg-violet-300 p-4 gap-y-2 overflow-y-auto rounded-tl-lg" id="chat-history">
            {/* chat history 
            chat box will be in reverse order, but generally more reliable in UI
            will do some mapping in order for the boxes to fit properly
            */}
            <div className="self-start bg-violet-300 text-stone-800 border-1 border-neutral-500 px-4 py-2 rounded-lg shadow-md max-w-full">
              Text 2
            </div>
            <div className="self-start bg-violet-300 text-stone-800 border-1 border-neutral-500 px-4 py-2 rounded-lg shadow-md max-w-full">
              Hello! How can I help?
            </div>
          </div>
          <div className="p-4 bg-violet-300 rounded-bl-lg border-t border-neutral-500">
            {/* ask */}
            <form className="flex flex-row justify-between">
              <input 
                type="text"
                aria-label="Ask your health concern..."
                placeholder="Ask your health concern..."
                className="border-1 border-neutral-500 rounded-lg px-4 py-2 shadow-md w-full"
              />
              <button 
                type="submit"
                alt="Submit Button"
                className="p-2 rounded-lg hover:bg-neutral-200"
              > 
                <ArrowUp />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 max-w-2xl">
         {/* HealthBay's Response */}
          <div className="flex flex-col h-full bg-orange-300 rounded-r-lg rounded-tl-lg p-4">
            <div className="border-1 border-neutral-500 bg-orange-300 px-4 py-2 rounded-lg shadow-md h-full w-full overflow-y-auto">
              {/* Sections */}
              {/* from the database, this is just a for map input from backend */}
              <div className="mb-4">
                <h1 className="font-bold">What it could be:</h1>
                <p>
                  - input 
                </p>
              </div>
              <div className="mb-4">
                <h1 className="font-bold">Causes and Explanation:</h1>
                <p>
                  - input 
                </p>
              </div>
              <div className="mb-4">
                <h1 className="font-bold">Remedies:</h1>
                <p>
                  - input 
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
