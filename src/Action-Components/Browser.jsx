import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { AlertData, BrowserData } from "../Data/Data1";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browser = () => {

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
    <div className="flex flex-col ">
      <div className="px-4 sm:px-8  space-y-5 pb-14 pt-8 bg-gradient-to-r  !from-[#4b2b99]  !to-[#639eed]">
        <Link
          to={"/"}
          className="flex gap-1 text-white w-fit bg-black/25 p-2 rounded-md"
        >
          <IconArrowNarrowLeft /> Back
        </Link>
        <h2 className="text-3xl font-bold text-white">Browser Actions</h2>
      </div>

      <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
        <div className="text-xl font-semibold text-zinc-900 pl-3">
          {BrowserData.category}
        </div>
        {BrowserData.steps.map((item, index) => (
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

export { Browser };
