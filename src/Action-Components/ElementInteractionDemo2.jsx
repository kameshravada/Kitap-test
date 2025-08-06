import React, { useRef, useState } from "react";

export default function ElementInteractionDemo2() {
  const iframeRef = useRef(null);
  const scrollTargetRef = useRef(null);
  const attributeRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const focusRef = useRef(null);
  const [downloadLink] = useState("/example.pdf");
  const [variableStore, setVariableStore] = useState({});

  const extractAttribute = () => {
    const href = attributeRef.current.getAttribute("data-custom");
    setVariableStore((prev) => ({ ...prev, link: href }));
    alert("Stored attribute: " + href);
  };

  const extractText = () => {
    const text = textRef.current.textContent;
    setVariableStore((prev) => ({ ...prev, extractedText: text }));
    alert("Stored text: " + text);
  };

  const storeInputValue = () => {
    if (!variableStore.name) {
      const value = inputRef.current.value;
      setVariableStore((prev) => ({ ...prev, name: value }));
      alert("Stored input value: " + value);
    } else {
      alert("Value already stored: " + variableStore.name);
    }
  };

  const scrollToTarget = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-6 p-6 max-w-3xl mx-auto">
      {/* Click Action */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => alert("Element clicked!")}
      >
        Click on an Element
      </button>

      {/* Download Action */}
      <a href={downloadLink} download className="text-blue-500 underline block">
        Click to Download File
      </a>

      {/* Iframe Demo */}
      <iframe
        ref={iframeRef}
        title="demo-iframe"
        srcDoc="<p>This is inside an iframe.</p>"
        className="w-full h-24 border"
      />

      {/* Extract attribute */}
      <div>
        <div
          ref={attributeRef}
          data-custom="https://example.com"
          className="p-2 bg-gray-100"
        >
          Element with data-custom attribute
        </div>
        <button
          onClick={extractAttribute}
          className="mt-2 bg-purple-600 text-white px-4 py-1 rounded"
        >
          Extract Attribute & Store
        </button>
      </div>

      {/* Extract text */}
      <div>
        <div ref={textRef} className="p-2 bg-gray-200">
          Visible Text to Extract
        </div>
        <button
          onClick={extractText}
          className="mt-2 bg-purple-600 text-white px-4 py-1 rounded"
        >
          Extract Text & Store
        </button>
      </div>

      {/* Store input value if not stored */}
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Name"
          className="border p-2 rounded"
        />
        <button
          onClick={storeInputValue}
          className="ml-2 bg-green-600 text-white px-4 py-1 rounded"
        >
          Store if Empty
        </button>
      </div>

      {/* Set focus */}
      <div>
        <input
          ref={focusRef}
          type="text"
          placeholder="Click to focus me"
          className="border p-2 rounded"
        />
        <button
          onClick={() => focusRef.current.focus()}
          className="ml-2 bg-yellow-500 text-black px-4 py-1 rounded "
        >
          Set Focus
        </button>
      </div>

      {/* Scroll to element */}
      <button
        onClick={scrollToTarget}
        className="bg-pink-600 text-white px-4 py-2 rounded"
      >
        Scroll to Element
      </button>

      <div className="h-[400px]" />

      <div ref={scrollTargetRef} className="bg-pink-100 border p-4 text-center">
        🎯 Scrolled into view!
      </div>
      
    </div>
  );
}
