"use client"

import Lottie from "lottie-react";
import faqAnimation from "@/public/lottie/anim.json";


export default function Animation(){
    return(
        <div className=" flex justify-center bg-[#ffffff]">
          <div className="w-72 md:w-96">
            <Lottie animationData={faqAnimation} loop={true} />
          </div>
        </div>
    );
}