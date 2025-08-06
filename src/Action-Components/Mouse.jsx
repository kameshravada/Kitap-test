import { IconArrowNarrowLeft } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MouseData } from "../Data/Data";

const Mouse = () => {
  const [hovered, setHovered] = useState(false);
  const [holding, setHolding] = useState(false);
  const [message, setMessage] = useState("Perform an action...");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setHovered(true);
    setMessage("Mouse hovered over element!");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMessage("Mouse moved away from element!");
  };

  const handleMouseDown = (e) => {
    setHolding(true);
    const rect = e.target.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setMessage(`Mouse click and hold at (${e.clientX}, ${e.clientY})`);
  };

  const handleMouseUp = () => {
    setHolding(false);
    setMessage("Mouse released click!");
  };

  const handleMoveInside = (e) => {
    if (holding) {
      const rect = e.target.getBoundingClientRect();
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setMessage(`Dragging... Current position: (${coords.x}, ${coords.y})`);
    }
  };

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
          <h2 className="text-3xl font-bold text-white">Mouse Actions</h2>

          <div className="text-white flex gap-4 items-center">
            <div className=" gap-5 sm:flex  items-center text-sm sm:text-base text-white">
                            <div className="flex flex-wrap gap-4 mt-2 items-center">

              <div className="flex">demo :</div>
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
          </div>
        </div>

        <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {MouseData.category}
          </div>
          {MouseData.steps.map((item, index) => (
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

      {/* <div className="p-6 h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold mb-4">Mouse Actions Test</h1>

        <div
          className="w-64 h-64 bg-blue-200 flex items-center justify-center rounded-lg shadow-lg relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMoveInside}
        >
          <span className="text-gray-700">Target Element</span>

          {hovered && (
            <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Hovering!
            </div>
          )}
        </div>

        <div className="mt-4 bg-white p-3 rounded shadow w-64 text-center">
          <strong>Status:</strong> {message}
        </div>

        <div className="mt-2 text-sm text-gray-600">
          Coordinates: X = {coords.x}, Y = {coords.y}
        </div>
      </div> */}
    </div>
  );
};

export { Mouse };
