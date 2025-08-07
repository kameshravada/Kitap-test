import { IconArrowNarrowLeft, IconCalendar } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputData } from "../Data/Data1";
import { FileInput } from "@mantine/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InputFieldActions() {
  const [inputValue, setInputValue] = useState("Sample input");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [toggle, setToggle] = useState(false);
  const [fileName, setFileName] = useState(false);

  const [dateValue, setDateValue] = useState();

  const handleClear = () => setInputValue("");
  const handleEnter = () => setInputValue("Hello from Enter Text");
  const handleSlowType = () => {
    const text = "Typed slowly";
    let index = 0;
    setInputValue(""); // Clear before typing
    const interval = setInterval(() => {
      if (index < text.length && text[index]) {
        setInputValue((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };
  const handleAppend = () => setInputValue((prev) => prev + " Appended");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputValue(text);
    } catch (err) {
      alert("Clipboard access denied. Try using HTTPS and user interaction.");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="px-4 sm:px-8  space-y-8 pb-12 pt-8 bg-gradient-to-r  !from-[#4b2b99]  !to-[#639eed]">
          <Link
            to={"/"}
            className="flex gap-1 text-white w-fit  bg-black/25 p-2 rounded-md"
          >
            <IconArrowNarrowLeft /> Back
          </Link>
          <h2 className="text-3xl font-bold text-white">Input Field Actions</h2>
          <div className="">
            <div className="text-white mb-3 text-sm sm:text-base">
              Your input goes here :
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="type here..."
              className="w-[80%] sm:w-[60%] lg:w-[50%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b2b99] bg-amber-50" //focus:ring-purple-500            placeholder="Type something..."
            />
          </div>
          <div className="text-white  flex gap-4 items-center">
            <div className=" gap-5 sm:flex items-center text-sm sm:text-base">
              <div className=" ">demo :</div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onClick={handleClear}
                  className="bg-red-500/75 hover:bg-red-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded"
                >
                  Clear Text
                </button>
                <button
                  onClick={handleEnter}
                  className="bg-blue-500/75 hover:bg-blue-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded "
                >
                  Enter Text
                </button>
                <button
                  onClick={handlePaste}
                  className="bg-indigo-500/75 hover:bg-indigo-600 cursor-pointer text-white py-1 md:py-2 px-2 md:px-4 rounded "
                >
                  Paste Clipboard Content
                </button>
                {/* <button
                onClick={handleSlowType}
                className="bg-yellow-500/75 hover:bg-yellow-600 cursor-pointer text-white py-2 px-4 rounded"
              >
                Type Slowly
              </button> */}
                {/* <button
                onClick={handleAppend}
                className="bg-green-500/75 hover:bg-green-600 cursor-pointer text-white py-2 px-4 rounded"
              >
                Append Text
              </button> */}
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="text-white flex gap-4 bg-black/10 p-3 sm:p-5 rounded-lg">
              <div className="flex gap-4 items-center">
                <label className="block font-medium mb-1">Checkbox :</label>
                <div className="">
                  <input
                    name="checkbox"
                    id="checkbox"
                    type="checkbox"
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    className="mr-2 cursor-pointer"
                  />
                  <label htmlFor="checkbox" className="cursor-pointer">
                    {checkbox ? "Uncheck" : "Check"}
                  </label>
                </div>
              </div>
            </div>

            <div className=" text-white  md:flex gap-3 items-center bg-black/10 p-3 sm:p-5 rounded-lg ">
              <label className="block font-medium mb-1">Radio Buttons :</label>
              <div className="flex gap-2 sm:gap-4">
                <form action="" className="flex gap-3">
                  <div className="flex gap-2 items-center">
                    <input
                      id="radio1"
                      type="radio"
                      name="options"
                      value="option1"
                      checked={radio === "option1"}
                      onChange={(e) => setRadio(e.target.value)}
                    />
                    <label htmlFor="radio1" className="cursor-pointer">
                      Option 1
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="radio2"
                      type="radio"
                      name="options"
                      value="option2"
                      checked={radio === "option2"}
                      onChange={(e) => setRadio(e.target.value)}
                      className=""
                    />
                    <label htmlFor="radio2" className="cursor-pointer">
                      Option 2
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div className=" flex gap-2 items-center bg-black/10 p-3 sm:p-5 rounded-lg">
              <label className="block font-medium mb-1 text-white">
                Dropdown :
              </label>
              <select
                value={dropdown}
                onChange={(e) => setDropdown(e.target.value)}
                className=" px-2 py-1 rounded shadow-sm bg-white !border-none "
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-black/10 p-3 sm:p-5 rounded-lg">
              <label className=" font-medium mb-1 text-white ">
                Toggle Switch :
              </label>
              <button
                onClick={() => setToggle(!toggle)}
                className={`w-14 h-7 flex items-center rounded-full transition ${
                  toggle ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`block w-5 h-5 bg-white rounded-full shadow transform transition ${
                    toggle ? "translate-x-8" : "translate-x-1"
                  }`}
                ></span>
              </button>
            </div>

            <div className="text-white flex gap-2 items-center  bg-black/10 p-3 sm:p-5 rounded-lg">
              <label className="font-medium mb-1">Upload a File :</label>
              <FileInput
                placeholder="Upload Files"
                className="border px-2 flex justify-center items-center rounded !cursor-pointer"
              />
              {/* <input
              type="file"
              onChange={(e) =>
                setFileName(e.target.files[0] ? e.target.files[0].name : "")
              }
              className=""              
            /> */}
              {fileName && (
                <p className="mt-1 text-sm text-gray-600">
                  Selected: {fileName}
                </p>
              )}
            </div>

            <div className="flex relative items-center gap-2 bg-black/10 p-2 sm:p-3 rounded-lg text-white !w-fit overflow-visible">
              <div className="">
                <label className="font-medium mb-1">Select date : </label>
              </div>
              <div className="">
                <DatePicker
                  showIcon
                  label="Pick a date"
                  selected={dateValue}
                  onChange={(date) => {
                    setDateValue(date);
                  }}
                  className="border border-white rounded-md items-center"
                  placeholderText="dd/mm/yyyy"
                  dateFormat={"dd/MM/yyyy"}
                  minDate={"07/28/2025"}
                  maxDate={new Date()}
                  icon={<IconCalendar className="" />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 bg-white rounded shadow-md space-y-5 py-14">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {InputData.category}
          </div>
          {InputData.steps.map((item, index) => (
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
      {/* <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Input Field Actions Demo
        </h2>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type something..."
        />

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Clear Text
          </button>
          <button
            onClick={handleEnter}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Enter Text
          </button>
          <button
            onClick={handleSlowType}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
          >
            Type Slowly
          </button>
          <button
            onClick={handleAppend}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Append Text
          </button>
        </div>
      </div> */}
    </div>
  );
}
