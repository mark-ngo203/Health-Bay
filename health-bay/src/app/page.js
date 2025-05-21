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
    <div className="flex justify-center w-full ">
      {/* Left Side */}
      <div className="flex flex-col">
          {/* HealthBay's Mascot */}
          <div className="flex justify-center">
            <div className="w-48 h-48 relative">
              <Image 
                src={idle} 
                alt="Health Bay Mascot"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          {/* Input and Text History */}
          <div className="flex flex-col max-h-screen w-md">
            {/* history */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-violet-300 rounded-l-lg overflow-hidden" id="chat-history">
              {/* chat history */}
              <div className="self-start bg-violet-300 text-stone-800 border-1 border-neutral-500 px-4 py-2 rounded-lg shadow-md max-w-full">
                Hello! How can I help?
              </div>
              <div className="border-b border-neutral-500" />
              {/* ask */}
              <form className="flex flex-rows justify-between">
                <input 
                  type="text"
                  placeholder="Ask your health concern..."
                  className="border-1 border-neutral-500 rounded-lg px-4 py-2 shadow-md w-full"
                />
                <button 
                  type="submit"
                  className="p-2 rounded-lg hover:bg-neutral-200"
                  > 
                  <ArrowUp />
                  </button>
              </form>
            </div>
          </div>
        
      </div>
      <div className="flex flex-col">
         {/* HealthBay's Response */}
          <div className="flex flex-col h-screen w-md flex-1 bg-orange-300 rounded-r-lg rounded-tl-lg p-4">
            <div className="border-1 border-neutral-500 bg-orange-300 px-4 py-2 rounded-lg shadow-md h-full w-full">
              {/* Sections */}
              {/* from the database, this is just a for map input from backend */}
              <div className="">
                <h1 className="font-bold">What it could be:</h1>
                <p>
                  - input 
                </p>
              </div>
              <div className="">
                <h1 className="font-bold">Causes and Explanation:</h1>
                <p>
                  - input 
                </p>
              </div>
              <div className="">
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
