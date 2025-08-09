import { IconArrowNarrowLeft } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ElementInteractionData, MouseData } from "../Data/Data1";
import ElementInteractionDemo2 from "./ElementInteractionDemo2";

export default function ElementInteractionDemo() {
  const boxRef = useRef(null);
  const dropZoneRef = useRef(null);
  const scrollTargetRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "dragged-box");
  };

  const scrollToTarget = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
            Element Interaction Actions
          </h2>

          <div className="text-white flex gap-4 items-center">
            <div className=" gap-5 sm:flex  items-center text-sm sm:text-base text-white">
              <div className="flex flex-col sm:flex-row gap-4 mt-2 items-center">
                <div className="flex ">demo :</div>
                <button
                  onClick={() => alert("Element Clicked")}
                  className="bg-blue-500/75 hover:bg-blue-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded "
                >
                  Click Me
                </button>
                <a
                  href={"/example.pdf"}
                  download
                  className="text-blue-500 underline block bg-white/95 hover:bg-white cursor-pointer py-1 md:py-2 px-2 md:px-4 rounded "
                >
                  Click to Download File
                </a>
                <button
                  onClick={scrollToTarget}
                  className="bg-pink-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Scroll to Element
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14 mb-2">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {ElementInteractionData.category}
          </div>
          {ElementInteractionData.steps.map((item, index) => (
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
      <div className="flex justify-center text-2xl italic font-semibold p-4 ">
        Iframes
      </div>
      <div className="sm:flex sm:justify-around">
        <iframe
          src="https://dev-kitap.zyrix.ai/login"
          height={400}
          className="w-fit sm:w-5xl  "
        >
          Frame1
        </iframe>
        <iframe src="https://zyrix.ai/" height={400}>
          Frame2
        </iframe>
      </div>
      <div
        ref={scrollTargetRef}
        className="bg-[#4f39a2] text-white  p-4 text-center"
      >
        🎯 Scrolled into view!
      </div>
      {/* <ElementInteractionDemo2 /> */}
    </div>
  );
}

{
  /* <div className="space-y-8 p-6 max-w-3xl mx-auto">
  <div className="flex flex-wrap gap-4">
    <button
      onClick={() => alert("Element Clicked")}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Click Me
    </button>

    <button
      onDoubleClick={() => alert("Element Double-Clicked")}
      className="px-4 py-2 bg-purple-500 text-white rounded"
    >
      Double Click Me
    </button>

    <button
      onContextMenu={(e) => {
        e.preventDefault();
        alert("Right Clicked!");
      }}
      className="px-4 py-2 bg-gray-700 text-white rounded"
    >
      Right Click Me
    </button>
  </div>

  <div className="flex gap-6">
    <div
      ref={boxRef}
      draggable
      onDragStart={handleDragStart}
      className="w-24 h-24 bg-orange-400 flex items-center justify-center text-white font-bold cursor-grab"
    >
      Drag Me
    </div>
    <div
      ref={dropZoneRef}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-40 h-24 border-2 border-dashed border-gray-500 flex items-center justify-center"
    >
      Drop Zone
    </div>
  </div>

  <div className="mt-8">
    <button
      onClick={handleScrollTo}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Scroll to Target
    </button>
  </div>

  <div className="h-[500px]" />

  <div
    ref={scrollTargetRef}
    className="h-24 bg-yellow-200 flex items-center justify-center border border-yellow-600"
  >
    👀 You've Reached the Target Element!
  </div>
</div>; */
}
