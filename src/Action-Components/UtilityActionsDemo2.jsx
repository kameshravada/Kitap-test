import React, { useRef, useState } from "react";

const UtilityActionsDemo2 = () => {
  const [pauseMsg, setPauseMsg] = useState("");
  const [textVisible, setTextVisible] = useState(false);
  const [replacedText, setReplacedText] = useState("replace apple with orange");
  const [trimmedText, setTrimmedText] = useState("TrimThisText");
  const [variable, setVariable] = useState(100); // Default variable
  const [inputValue, setInputValue] = useState("");
  const [comparisonResult, setComparisonResult] = useState(null);
  const elementRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Utility Functions
  const handlePause = () => {
    setPauseMsg("Pausing...");
    setTimeout(() => setPauseMsg("Resumed after 2s!"), 2000);
  };

  const handleReplace = () => {
    const newText = replacedText.replace("apple", "orange");
    setReplacedText(newText);
  };

  const handleTrim = () => {
    const trimmed = trimmedText.slice(3);
    setTrimmedText(trimmed);
  };

  const handleArithmetic = (operation) => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;
    let result = variable;
    switch (operation) {
      case "add":
        result += value;
        break;
      case "sub":
        result -= value;
        break;
      case "mul":
        result *= value;
        break;
      case "div":
        result = value !== 0 ? result / value : "Infinity";
        break;
      default:
        break;
    }
    setVariable(result);
  };

  const extractFirstNumber = () => {
    const text = "Price is $149.99 today!";
    const match = text.match(/[\d.]+/);
    setComparisonResult(match ? match[0] : "No number found");
  };

  const handleCopyList = () => {
    const list = ["One", "Two", "Three"];
    navigator.clipboard.writeText(list.join("\n")).then(() => setCopied(true));
  };
  return (
    <div>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        {/* Pause Execution */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Pause Execution</h2>
          <button onClick={handlePause} className="btn cursor-pointer">
            Pause 2s
          </button>
          <p>{pauseMsg}</p>
        </div>

        {/* Replace characters */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Replace Sequence</h2>
          <p>{replacedText}</p>
          <button onClick={handleReplace} className="btn">
            Replace
          </button>
        </div>

        {/* Trim characters */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Trim First N Chars</h2>
          <p>{trimmedText}</p>
          <button onClick={handleTrim} className="btn">
            Trim First 3
          </button>
        </div>

        {/* Arithmetic Operations */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Arithmetic on Variable (temp)</h2>
          <p>Current: {variable}</p>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter number"
            className="input"
          />
          <div className="flex gap-2 mt-2">
            <button onClick={() => handleArithmetic("add")} className="btn">
              Add
            </button>
            <button onClick={() => handleArithmetic("sub")} className="btn">
              Subtract
            </button>
            <button onClick={() => handleArithmetic("mul")} className="btn">
              Multiply
            </button>
            <button onClick={() => handleArithmetic("div")} className="btn">
              Divide
            </button>
          </div>
        </div>

        {/* Wait For Text */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Wait For Text</h2>
          <button
            onClick={() => setTimeout(() => setTextVisible(true), 1500)}
            className="btn"
          >
            Wait and Show
          </button>
          {textVisible && (
            <p className="mt-2 text-green-700">✅ Text appeared!</p>
          )}
        </div>

        {/* Multiline Copy */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Copy List as Multiline</h2>
          <button onClick={handleCopyList} className="btn">
            Copy
          </button>
          {copied && <p className="text-green-600 mt-1">Copied!</p>}
        </div>

        {/* Zoning */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded shadow">🟦 Header</div>
          <div className="bg-green-100 p-4 rounded shadow">🟩 Content</div>
          <div className="bg-yellow-100 p-4 rounded shadow">🟨 Sidebar</div>
          <div className="bg-red-100 p-4 rounded shadow">🟥 Footer</div>
        </div>

        {/* Extract First Number */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="font-semibold">Extract First Number</h2>
          <button onClick={extractFirstNumber} className="btn">
            Extract
          </button>
          {comparisonResult && (
            <p className="mt-2">Found: {comparisonResult}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UtilityActionsDemo2;
