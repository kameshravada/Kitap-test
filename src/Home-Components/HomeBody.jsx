import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CardComponent from "./CardComponent";
import {
  AlertData,
  BrowserData,
  CardData,
  ElementInteractionData,
  InputData,
  KeyboardData,
  MouseData,
  ScrollNavigationData,
  UtilityData,
  ValidationData,
} from "../Data/Data1";

const HomeBody = () => {
  const categories = [
    AlertData,
    BrowserData,
    KeyboardData,
    MouseData,
    InputData,
    ElementInteractionData,
    ScrollNavigationData,
    ValidationData,
    UtilityData,
  ];

  const totalActions = categories.reduce(
    (acc, category) => acc + category.steps.length,
    0
  );

  return (
    <div className="flex flex-col gap-3 ">
      <div className="bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] w-full p-6 text-4xl md:text-6xl lg:text-8xl  font-bold text-transparent bg-clip-text ">
        {/* Testing Made Easy.. */}
        <Typewriter
          words={["Testing Made Easy.."]}
          typeSpeed={100}
          delaySpeed={1000}
        />
      </div>

      <div className="px-6 pl-9 mt-3 text-black/50 text-xl font-semibold flex">
        Number of actions you can perform : {totalActions}
      </div>
      <div className="px-6 flex flex-col gap-5">
        {/* <div className=" text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-black/50">
          <span className="">
            Test your app by adding simple steps
          </span>
        </div> */}
        <div className=" min-h-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-6 md:gap-6 2xl:grid-cols-5 grid-flow-row ">
          {CardData.map((card, index) => (
            <CardComponent card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
