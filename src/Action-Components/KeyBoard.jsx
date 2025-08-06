import { IconArrowNarrowLeft } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { KeyboardData } from "../Data/Data";

const KeyboardTestPage = () => {
  const [lastKey, setLastKey] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState("Type here...");
  const [log, setLog] = useState([]);

  const handleKeyDown = (e) => {
    e.preventDefault(); // Prevent default tab scroll
    setLastKey(e.key);
    setLog((prev) => [...prev, `Pressed: ${e.key}`]);

    // Movement simulation
    if (e.key === "ArrowUp") setPosition((p) => ({ ...p, y: p.y - 20 }));
    if (e.key === "ArrowDown") setPosition((p) => ({ ...p, y: p.y + 20 }));
    if (e.key === "ArrowLeft") setPosition((p) => ({ ...p, x: p.x - 20 }));
    if (e.key === "ArrowRight") setPosition((p) => ({ ...p, x: p.x + 20 }));

    // Special key actions
    if (e.key === "Escape") alert("Escape pressed! Closing modal...");
    if (e.key === "Enter") alert("Enter pressed! Submitting form...");
    if (e.key === "Tab") alert("Tab pressed! Switching field...");
    if (e.key === " ") alert("Space pressed! Toggling element...");
    if (e.key === "Backspace") setInputValue((val) => val.slice(0, -1));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="px-4 sm:px-8  space-y-5 pb-14 pt-8 bg-gradient-to-r  !from-[#4b2b99]  !to-[#639eed]">
          <Link
            to={"/"}
            className="flex gap-1 text-white w-fit bg-black/25  p-2 rounded-md"
          >
            <IconArrowNarrowLeft /> Back
          </Link>
          <h2 className="text-3xl font-bold text-white">
            {KeyboardData.category}
          </h2>
          <div className="">
            <p className="mb-4 text-white">
              Press any key to simulate an action.
            </p>
            {/* Last Key Pressed */}
            <div className="bg-blue-500 text-white px-4 py-2 rounded shadow mb-4 w-fit gap-4 text-center flex justify-around">
              <strong>Key Pressed :</strong>
              <div className="text-black font-semibold">
                {" "}
                {lastKey || "None"}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {KeyboardData.category}
          </div>
          {KeyboardData.steps.map((item, index) => (
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

      {/* <div className="p-6 bg-gray-100 h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Keyboard Action Test Page</h1>
        <p className="mb-4">Press any key to simulate an action.</p>

        Last Key Pressed
        <div className="bg-white p-4 rounded shadow mb-4 w-64 text-center">
          <strong>Last Key:</strong> {lastKey || "None"}
        </div>

        Movable Box
        <div className="relative w-64 h-64 bg-gray-200 rounded border mb-4">
          <div
            className="w-12 h-12 bg-blue-500 rounded absolute"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.2s",
            }}
          ></div>
        </div>

        Input Field
        <input
          type="text"
          value={inputValue}
          readOnly
          className="border rounded p-2 w-64 mb-4"
        />

        Key Log
        <div className="bg-white p-4 rounded shadow w-64 h-32 overflow-auto">
          <strong>Key Log:</strong>
          <ul className="text-sm mt-2">
            {log.slice(-5).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export { KeyboardTestPage };
