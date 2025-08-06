import React, { useState } from "react";
import { AlertData } from "../Data/Data";
import {IconArrowNarrowLeft} from "@tabler/icons-react"
import { Link } from "react-router-dom";

const Alert = () => {
  const [storedText, setStoredText] = useState("");

  const handleAlert = () => {
    alert("This is a simple alert!");
  };

  const handleConfirm = () => {
    const result = confirm("Do you want to proceed?");
    // if (result) {
    //   alert("You clicked OK");
    // } else {
    //   alert("You clicked Cancel");
    // }
  };

  const handlePrompt = () => {
    const text = prompt("Enter your name:");
    if (text !== null) {
      setStoredText(text); // store entered text
      alert(`You entered: ${text}`);
      setTimeout(() => setStoredText(""), 5000);
    }
  };

  const verifyText = (inputValue) => {
    return storedText === inputValue;
  };

  return (
    <div className="flex flex-col ">
      <div className="px-4 sm:px-8  space-y-5 pb-14 pt-8 bg-gradient-to-r  !from-[#4b2b99]  !to-[#639eed]">
        {/* <div className="flex gap-1 text-white w-fit bg-black/25 p-2 rounded-md"> */}
        <Link
          to={"/"}
          className="flex gap-1 text-white w-fit bg-black/25 p-2 rounded-md"
        >
          <IconArrowNarrowLeft /> Back
        </Link>
        {/* </div> */}
        <h2 className="text-3xl font-bold text-white">Alert Box Testing</h2>

        <div className="sm:flex flex flex-col sm:flex-row  sm:gap-4 space-y-5   sm:justify-normal  ">
          <div className="">
            <button
              onClick={handleAlert}
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer sm:w-fit w-50"
            >
              Show Alert
            </button>
          </div>
          <div className="">
            <button
              onClick={handleConfirm}
              className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer sm:w-fit w-50"
            >
              Show Confirm
            </button>
          </div>
          <div className="">
            <button
              onClick={handlePrompt}
              className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer sm:w-fit w-50"
            >
              Show Prompt
            </button>
          </div>
        </div>

        {storedText && (
          <p className="text-white">
            <strong>Entered Text:</strong> {storedText}
          </p>
        )}
      </div>

      <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
        <div className="text-xl font-semibold text-zinc-900 pl-3">
          {AlertData.category}
        </div>
        {AlertData.steps.map((item, index) => (
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
  );
};

export { Alert };
