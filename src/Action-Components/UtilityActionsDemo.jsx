import { IconArrowNarrowLeft } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UtilityData } from "../Data/Data1";
import UtilityActionsDemo2 from "./UtilityActionsDemo2";

const UtilityActionsDemo = () => {

  
const navigate = useNavigate();

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      navigate(-1);
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [navigate]);

  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="px-4 sm:px-8  space-y-5 pb-14 pt-8 bg-gradient-to-r  !from-[#4b2b99]  !to-[#639eed]">
          <Link
            to={"/"}
            className="flex gap-1 text-white w-fit bg-black/25 p-2 rounded-md"
          >
            <IconArrowNarrowLeft /> Back
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Utility/Data Actions
          </h2>

          {/* <div className="text-white flex gap-4 items-center">
            <div className=" gap-5 sm:flex  items-center text-sm sm:text-base text-white">
              <div className="flex ">demo :</div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onDoubleClick={() => alert("Element Double-Clicked")}
                  className="bg-yellow-500/75 hover:bg-yellow-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded "
                >
                  Double Click Me
                </button>
                <button
                  onContextMenu={(e) => {
                    e.preventDefault();
                    alert("Right Clicked!");
                  }}
                  className="bg-cyan-600/75 hover:bg-cyan-700 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded "
                >
                  Right Click Me
                </button>
              </div>
            </div>
          </div> */}
        </div>

        <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {UtilityData.category}
          </div>
          {UtilityData.steps.map((item, index) => (
            <div
              className="flex flex-col gap-2  rounded-xl shadow p-3"
              key={index}
            >
              <div className="text-lg font-semibold text-cyan-700">
                {index + 1} . {item.name}
              </div>
              <div className="text-sm">Description : {item.description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* <UtilityActionsDemo2/> */}
    </div>
  );
};

export default UtilityActionsDemo;

