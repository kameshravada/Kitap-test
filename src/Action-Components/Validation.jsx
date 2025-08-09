import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { ValidationData } from "../Data/Data1";

const Validation = () => {

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
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Validation/Verification Actions
          </h2>
          <div className="">
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-black/15 max-w-7xl">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead className="text-xs text-gray-200 uppercase ">
                  <tr className="border-b border-gray-700">
                    <th
                      scope="col"
                      className="px-6 py-3  bg-gray-800" //bg-gray-50
                    >
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3  bg-gray-800">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-800"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4 text-white">Silver</td>
                    <td className="px-6 py-4 bg-gray-800">Laptop</td>
                    <td className="px-6 py-4 text-white">$2999</td>
                  </tr>
                  <tr className="border-b border-gray-700 text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap  text-white bg-gray-800"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4 text-white">White</td>
                    <td className="px-6 py-4 bg-gray-800">Laptop PC</td>
                    <td className="px-6 py-4 text-white">$1999</td>
                  </tr>
                  <tr className="border-b border-gray-700 text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap  bg-gray-800"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4 bg-gray-800 text-white">
                      Accessories
                    </td>
                    <td className="px-6 py-4 text-white">$99</td>
                  </tr>
                  <tr className="border-b border-gray-700 text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-800"
                    >
                      Google Pixel Phone
                    </th>
                    <td className="px-6 py-4">Gray</td>
                    <td className="px-6 py-4 bg-gray-800">Phone</td>
                    <td className="px-6 py-4">$799</td>
                  </tr>
                  <tr className="text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4 bg-gray-800">Wearables</td>
                    <td className="px-6 py-4">$999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
            {ValidationData.category}
          </div>
          {ValidationData.steps.map((item, index) => (
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
      {/* <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold">Verification Actions Demo</h1>

        <div>
          <h2 className="text-xl font-semibold">Text Validation</h2>
          <p id="text-check" className="border p-2">
            Welcome to AutoTest Platform
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Attribute Check</h2>
          <img
            id="img-attr"
            src="https://via.placeholder.com/150"
            alt="Sample Logo"
            className="w-24 h-24 border"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Input Field State</h2>
          <input
            id="user-input"
            defaultValue="test123"
            className="border p-2 w-full"
          />
          <input
            id="empty-input"
            defaultValue=""
            placeholder="empty input"
            className="border p-2 w-full mt-2"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Selection States</h2>

          <input type="checkbox" id="check-status" defaultChecked />
          <label htmlFor="check-status" className="ml-2">
            Checked Checkbox
          </label>

          <br />

          <input type="radio" id="radio-choice" name="choice" defaultChecked />
          <label htmlFor="radio-choice" className="ml-2">
            Selected Radio
          </label>

          <br />

          <select id="dropdown" className="border p-2 mt-2">
            <option value="1">One</option>
            <option value="2" selected>
              Two
            </option>
          </select>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Button State</h2>
          <button
            id="enabled-btn"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Enabled Button
          </button>
          <button
            id="disabled-btn"
            disabled
            className="bg-gray-400 text-white px-4 py-2 rounded ml-4"
          >
            Disabled Button
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Visibility</h2>
          <div id="visible-div" className="border p-2">
            I am visible
          </div>
          <div id="hidden-div" className="hidden border p-2 mt-2">
            I am hidden
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Text Length & Emptiness</h2>
          <p id="non-empty-text" className="border p-2">
            This has content.
          </p>
          <p id="empty-text" className="border p-2"></p>
        </div>
      </div> */}
    </div>
  );
};
export default Validation;
