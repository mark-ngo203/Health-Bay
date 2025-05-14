"use client";
import NextLink from "next/link";
import Image from "next/image";
import mascot from "@/app/assets/hbcat-idle.png";



export default function Home() {
  return (
    <div className="flex justify-center w-full ">

      {/* Formatting the main page*/}
      <div className="flex flex-col">
        {/* Left Side */}
        <div>
          {/* Text History */}
          <div className="flex justify-center py-50 px-50 rounded-tl-xl bg-violet-300 ">

          </div>
        </div>
        <div>
          {/* Text Input */}
          <div className="flex justify-center py-15 rounded-b-xl bg-red-300 ">
            <input 
              type="text"
              placeholder="Ask your health concern"
              className=""
            />
          </div>
        </div>
        
      </div>
      <div className="flex flex-col w-full">
         {/* HealthBay's Response */}
          <div className="flex justify-center py-6 px-50 bg-green-300 ">

          </div>
          {/* HealthBay's Mascot */}
          <div className="w-48 h-48 relative">
            <Image 
              src={mascot} 
              alt="Health Bay Mascot"
              fill
              className="object-cover object-top"

            />
          </div>
        </div>
    </div>
  );
}
