import React, { useState } from "react";

export default function FormInputActionsDemo() {
  const [text, setText] = useState("Sample Text");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("option1");
  const [dropdown, setDropdown] = useState("Option 1");
  const [toggle, setToggle] = useState(false);
  const [fileName, setFileName] = useState("");

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded-xl shadow-md">
      <div>
        <label className="block font-medium mb-1">Text Input:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border px-3 py-2 rounded shadow-sm"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Checkbox:</label>
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
          className="mr-2"
        />
        {checkbox?"Uncheck":"Check"}
      </div>

      <div>
        <label className="block font-medium mb-1">Radio Buttons:</label>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              name="options"
              value="option1"
              checked={radio === "option1"}
              onChange={(e) => setRadio(e.target.value)}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="options"
              value="option2"
              checked={radio === "option2"}
              onChange={(e) => setRadio(e.target.value)}
            />
            Option 2
          </label>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Dropdown:</label>
        <select
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value)}
          className="w-full border px-3 py-2 rounded shadow-sm"
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Toggle Switch:</label>
        <button
          onClick={() => setToggle(!toggle)}
          className={`w-16 h-8 rounded-full transition ${
            toggle ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`block w-6 h-6 bg-white rounded-full shadow transform transition ${
              toggle ? "translate-x-8" : "translate-x-1"
            }`}
          ></span>
        </button>
      </div>

      <div>
        <label className="block font-medium mb-1">Upload a File:</label>
        <input
          type="file"
          onChange={(e) =>
            setFileName(e.target.files[0] ? e.target.files[0].name : "")
          }
        />
        {fileName && (
          <p className="mt-1 text-sm text-gray-600">Selected: {fileName}</p>
        )}
      </div>
    </div>
  );
}
