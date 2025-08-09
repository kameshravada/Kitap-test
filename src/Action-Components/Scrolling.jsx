import { IconArrowDown, IconArrowDownToArc, IconArrowNarrowLeft, IconArrowUp } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollNavigationData } from "../Data/Data1";

const Scrolling=()=> {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > "100") {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToEnd = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollDownByPixels = () => {
    window.scrollBy({ top: 200, behavior: "smooth" });
  };

  const scrollUpByPixels = () => {
    window.scrollBy({ top: -200, behavior: "smooth" });
  };

  const scrollToPercent = (percent) => {
    const height = document.body.scrollHeight;
    window.scrollTo({ top: height * percent, behavior: "smooth" });
  };

  const scrollToElement = () => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
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
          <h2 className="text-3xl font-bold text-white">
            Scrolling & Navigation Actions
          </h2>

          <div className="fixed right-5 bottom-0 text-white cursor-pointer bg-[#4F39A2] rounded-full">
            {/* page content */}
            {visible && (
              <div className="p-2 flex" onClick={scrollToTop}>
                <IconArrowUp />
              </div>
            )}
          </div>

          <div className="text-white flex gap-4 items-center">
            <div className=" gap-5 sm:flex  items-center text-sm sm:text-base text-white">
              <div className="flex flex-wrap gap-4 mt-2 items-center">
                <div className="flex ">simulate :</div>
                <button
                  onClick={scrollToEnd}
                  className="bg-blue-600/75 flex justify-center items-center  gap-1 hover:bg-blue-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded"
                >
                  Scroll to End <IconArrowDown size={20} />
                </button>
                {/* <button
                  onClick={scrollToTop}
                  className="bg-[#540b0e]/75 flex justify-center items-center  gap-1 hover:bg-[#540b0e] cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded"
                >
                  Scroll to Top <IconArrowUp size={20} />
                </button> */}

                {/* <button
                  onClick={scrollUpByPixels}
                  className="bg-[#e76f51]/75 hover:bg-[#e76f51] cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded"
                >
                  Scroll Up by 200px
                </button> */}
                <button
                  onClick={() => scrollToPercent(0.2)}
                  className="bg-teal-600/75 hover:bg-teal-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded"
                >
                  Scroll to 20% of Page
                </button>
                <button
                  onClick={scrollToElement}
                  className="bg-purple-600/75 hover:bg-purple-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded"
                >
                  Scroll to Element
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {ScrollNavigationData.category}
          </div>
          {ScrollNavigationData.steps.map((item, index) => (
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
      <div className="p-6 space-y-4 max-w-2xl mx-auto">
        {/* Filler for scroll testing */}
        <div style={{ height: "100px" }} />

        <div
          ref={elementRef}
          className="bg-yellow-200 p-6 rounded-lg shadow text-center"
        >
          🎯 You've reached the target element!
        </div>
      </div>
    </div>
  );
}

export default Scrolling