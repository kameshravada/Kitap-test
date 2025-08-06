const CardData = [
  {
    testName: "Alert Testing Steps",
    link: "/alert",
  },
  {
    testName: "Browser Action steps",
    link: "/browser",
  },
  {
    testName: "KeyBoard Action steps",
    link: "/keyboard",
  },
  {
    testName: "Mouse Action steps",
    link: "/mouse",
  },
  {
    testName: "Input Field Actions",
    link: "/input-fields",
  },
  {
    testName: "Element Interactions",
    link: "/element-interaction",
  },
  {
    testName: "Scrolling & Navigation",
    link: "/scrolling",
  },
  {
    testName: "Validation/Verification ",
    link: "/validation",
  },
  {
    testName: "Utility/Data actions",
    link: "/utility",
  },
];

const AlertData = {
  category: "Alert Box Steps : ",
  steps: [
    {
      name: "Alert Box - Accept",
      description: "Clicks the OK button on an alert message.",
    },
    {
      name: "Alert Box - Dismiss",
      description: "Clicks the Cancel button on a confirmation message.",
    },
    {
      name: "Alert Box - Enter Text",
      description: "Types a value into a prompt message and confirms it.",
    },
    {
      name: "Alert Box - Extract Text and Store",
      description:
        "Reads the message from an alert and saves it for later use.",
    },
    {
      name: "Alert Box - Extract Text and Verify",
      description: "Checks if the alert message matches a given value.",
    },
  ],
};

const BrowserData = {
  category: "Browser Actions",
  steps: [
    {
      name: "Browser: Open",
      description: "Opens a new browser window for testing.",
    },
    {
      name: "Browser: Close Window",
      description: "Closes the currently active browser window.",
    },
    {
      name: "Browser: Close All Windows",
      description: "Closes all open browser windows.",
    },
    {
      name: "Browser: Close Tab",
      description: "Closes a specific tab inside the current browser window.",
    },
    {
      name: "Browser: Create New Tab and Navigate",
      description: "Opens a new tab and navigates to a given URL.",
    },
    {
      name: "Browser: Set Window Size",
      description:
        "Changes the size of the browser window to the specified dimensions.",
    },
    {
      name: "Browser: Switch",
      description: "Switches control to another open browser window or tab.",
    },
  ],

  //   Navigate to a Url

  // Refresh page

  // Switch Between Tabs with Page Title

  // Switch Between Tabs with Page Title Contains

  // Switch Between Tabs with Step Sequence Number

  // Call an API (if you use APIs for browser navigation or data fetch)

  // Get Current URL and Store in Variable
};

const KeyboardData = {
  category: "Keyboard Actions :",
  steps: [
    {
      name: "KeyBoard Action",
      description:
        "Performs general keyboard actions such as pressing keys or simulating typing.",
    },
    {
      name: "KeyBoard Function",
      description:
        "Executes specific keyboard functions like shortcuts or special key combinations.",
    },
    {
      name: 'Keyboard: Press "*(Asterisk)" Key',
      description: "Simulates pressing the Asterisk (*) key on the keyboard.",
    },
    {
      name: 'Keyboard: Press "+(Plus)" Key',
      description: "Simulates pressing the Plus (+) key.",
    },
    {
      name: 'Keyboard: Press "-(Minus)" Key',
      description: "Simulates pressing the Minus (-) key.",
    },
    {
      name: 'Keyboard: Press ".(Dot)" Key',
      description: "Simulates pressing the Dot (.) key.",
    },
    {
      name: 'Keyboard: Press "/(Slash)" Key',
      description: "Simulates pressing the Slash (/) key.",
    },
    {
      name: 'Keyboard: Press "=(Equal)" Key',
      description: "Simulates pressing the Equal (=) key.",
    },
    {
      name: 'Keyboard: Press "Alt" Key',
      description:
        "Simulates pressing the Alt key, typically used in shortcuts.",
    },
    {
      name: 'Keyboard: Press "Backspace" Key',
      description: "Simulates pressing the Backspace key to delete characters.",
    },
    {
      name: 'Keyboard: Press "CapsLock" Key',
      description: "Simulates toggling the CapsLock key.",
    },
    {
      name: 'Keyboard: Press "Command" Key',
      description:
        "Simulates pressing the Command key, commonly used on Mac systems.",
    },
    {
      name: 'Keyboard: Press "Ctrl(Control)" Key',
      description: "Simulates pressing the Control (Ctrl) key for shortcuts.",
    },
    {
      name: 'Keyboard: Press "Delete" Key',
      description: "Simulates pressing the Delete key to remove text or items.",
    },
    {
      name: 'Keyboard: Press "DownArrow" Key',
      description: "Simulates pressing the Down Arrow key for navigation.",
    },
    {
      name: 'Keyboard: Press "End" Key',
      description:
        "Simulates pressing the End key to move to the end of a document or field.",
    },
    {
      name: 'Keyboard: Press "Enter" Key',
      description: "Simulates pressing the Enter key to confirm or submit.",
    },
    {
      name: 'Keyboard: Press "Esc (Escape)" Key',
      description: "Simulates pressing the Escape key to cancel or close.",
    },
    {
      name: 'Keyboard: Press "Home" Key',
      description:
        "Simulates pressing the Home key to move to the start of a document or field.",
    },
    {
      name: 'Keyboard: Press "Insert" Key',
      description: "Simulates pressing the Insert key.",
    },
    {
      name: 'Keyboard: Press "LeftArrow" Key',
      description: "Simulates pressing the Left Arrow key for navigation.",
    },
    {
      name: 'Keyboard: Press "PgDn (PageDown)" Key',
      description: "Simulates pressing the Page Down key to scroll down.",
    },
    {
      name: 'Keyboard: Press "PgUp (PageUp)" Key',
      description: "Simulates pressing the Page Up key to scroll up.",
    },
    {
      name: 'Keyboard: Press "Return" Key',
      description: "Simulates pressing the Return key, similar to Enter.",
    },
    {
      name: 'Keyboard: Press "RightArrow" Key',
      description: "Simulates pressing the Right Arrow key for navigation.",
    },
    {
      name: 'Keyboard: Press "Shift" Key',
      description:
        "Simulates pressing the Shift key, often combined with other keys.",
    },
    {
      name: 'Keyboard: Press "Space" Key',
      description:
        "Simulates pressing the Spacebar to add spaces or activate buttons.",
    },
    {
      name: 'Keyboard: Press "Tab" Key',
      description: "Simulates pressing the Tab key to switch between fields.",
    },
    {
      name: 'Keyboard: Press "UpArrow" Key',
      description: "Simulates pressing the Up Arrow key for navigation.",
    },
    {
      name: 'Keyboard: Press "Windows" Key',
      description:
        "Simulates pressing the Windows key, used for OS-level shortcuts.",
    },
  ],
};

const MouseData = {
  category: "Mouse Actions :",
  steps: [
    {
      name: "Mouse: Hover over Element",
      description:
        "Moves the mouse pointer over a specific element without clicking, often to reveal tooltips, popups, or hidden menus.",
    },
    {
      name: "Mouse: Long Click or Press on Element",
      description:
        "Simulates a long mouse press on an element, often used to trigger context menus or mobile touch events.",
    },
    {
      name: "Mouse: Click and Hold on Element",
      description:
        "Clicks and holds the mouse button on the center of a specific element. Useful for drag-and-drop scenarios.",
    },
    {
      name: "Mouse: Click And Hold at Co-Ordinates relative to Element",
      description:
        "Clicks and holds the mouse button at specified (X, Y) coordinates within the element boundary.",
    },
    {
      name: "Mouse: Move Pointer to Element and Hover",
      description:
        "Moves the pointer to a target element and keeps it there, simulating a hover state for testing UI effects.",
    },
    {
      name: "Mouse: Move at Co-Ordinates relative to Element",
      description:
        "Moves the mouse to a given X and Y offset inside the element without clicking or holding.",
    },
    {
      name: "Mouse: Move Away From Element",
      description:
        "Moves the mouse pointer away from the hovered element, simulating user moving out of a hover zone.",
    },
    {
      name: "Mouse: Release Click",
      description:
        "Releases the previously held-down mouse button. This is typically used in combination with hold actions.",
    },
    {
      name: "Mouse: Double Click on an Element",
      description:
        "Simulates a double-click on the specified element, often used for editing or activating items.",
    },
    {
      name: "Mouse: Right Click",
      description:
        "Performs a right-click (context click) on an element to open context menus or trigger alternate actions.",
    },
  ],
};

const InputData = {
  category: "Input Field Actions :",
  steps: [
    {
      name: "Input - Enter Text",
      description:
        "Types new content into an input field, replacing any existing text.",
    },
    {
      name: "Input - Clear Text",
      description:
        "Clears any existing text from a specific input field so that it becomes empty.",
    },
    {
      name: "Input - Check Checkbox",
      description:
        "Checks a checkbox to simulate a user enabling a specific option.",
    },
    {
      name: "Input - Click Radio Button",
      description: "Selects a specific radio button from a group of choices.",
    },
    {
      name: "Input - Select from Drop Down By Index",
      description:
        "Chooses an option from a dropdown list based on its position (e.g., first, second).",
    },
    {
      name: "Input - Select from Drop Down by Option",
      description:
        "Chooses a specific option in the dropdown based on its displayed text.",
    },
    {
      name: "Input - Paste Clipboard Content",
      description:
        "Simulates pasting content from the clipboard into an input field.",
    },
    {
      name: "Input - Toggle Switch",
      description:
        "Toggles a switch input (on/off) to simulate enabling or disabling a feature.",
    },
    {
      name: "Input - Upload a File",
      description:
        "Uploads a file using a file input field, simulating user file selection.",
    },
  ],
};

const ElementInteractionData = {
  category: "Element Interaction Actions",
  steps: [
    {
      name: "Click on an Element",
      description:
        "Simulates a regular left-click on any interactive HTML element (like a button or link).",
    },
    {
      name: "Click to Download file",
      description:
        "Triggers a file download by clicking a download link or button.",
    },
    {
      name: "Enter into iFrame",
      description:
        "Switches context into an embedded iframe to interact with elements inside it.",
    },
    {
      name: "Exit iFrame",
      description:
        "Switches context back to the main page after interacting with an iframe.",
    },
    {
      name: "Extract Text from Element Attribute and Store in Variable",
      description:
        "Reads the value of a specified attribute (like `href`, `title`, `value`) from an element and saves it to a variable.",
    },
    {
      name: "Extract Text from Element and Store in Variable",
      description:
        "Grabs the visible text content from an element and stores it for later steps.",
    },
    {
      name: "Store Text in Variable",
      description:
        "Stores a static input string directly into a named variable for use in other steps.",
    },
    {
      name: "Store input value in the variable if no value is currently stored",
      description:
        "If the target variable is empty or undefined, this step assigns it a value from a form input.",
    },
    {
      name: "Set focus on an Element",
      description:
        "Brings keyboard or interaction focus to a specific element like a text box or button.",
    },
    {
      name: "Scroll to element",
      description:
        "Smoothly scrolls the page to bring the specified element into the viewport.",
    },
  ],
};

const ScrollNavigationData = {
  category: "Scrolling & Navigation Actions :",
  steps: [
    {
      name: "Scroll To the End",
      description: "Scrolls the web page smoothly to the very bottom.",
    },
    {
      name: "Scroll To the Top",
      description: "Scrolls the web page smoothly to the topmost position.",
    },
    {
      name: "Scroll down by Pixel",
      description:
        "Scrolls down the page by a specific number of pixels from the current position.",
    },
    {
      name: "Scroll up by Pixel",
      description:
        "Scrolls up the page by a specific number of pixels from the current position.",
    },
    {
      name: "Scroll to Percent of page height",
      description:
        "Scrolls the page to a percentage of its full height (e.g., 50% down).",
    },
    {
      name: "Scroll to element",
      description:
        "Scrolls the view until a specific element becomes visible in the viewport.",
    },
  ],
};

const ValidationData = {
  category: "Validation/Verification :",
  steps: [
    {
      name: "Check displayed text matches expected",
      description:
        "Compares the visible text of an element with a provided value to ensure it exactly matches.",
    },
    {
      name: "Verify Attribute Value",
      description:
        "Checks if a specific attribute of an element equals the given value.",
    },
    {
      name: "Verify Contains text",
      description:
        "Validates whether the element's text includes a specific substring.",
    },
    {
      name: "Verify Ends with",
      description: "Checks if the element’s text ends with a particular value.",
    },
    {
      name: "Verify Fields",
      description:
        "Validates that certain fields exist or meet the expected condition.",
    },
    {
      name: "Verify IsClickable",
      description:
        "Confirms that an element is visible and interactive (can be clicked).",
    },
    {
      name: "Verify IsEnabled",
      description:
        "Checks whether a form element or button is enabled for user input.",
    },
    {
      name: "Verify IsSelected",
      description:
        "Verifies whether a checkbox, radio button, or select option is selected.",
    },
    {
      name: "Verify Starts with",
      description: "Checks if the element’s text starts with a given prefix.",
    },
    {
      name: "Verify Stored Variable or default temp variable value: Not Empty",
      description:
        "Asserts that a stored or default variable contains some value.",
    },
    {
      name: "Verify Text Empty",
      description: "Checks whether the visible text of an element is empty.",
    },
    {
      name: "Verify Text Not Empty",
      description: "Validates that the text of an element is not empty.",
    },
    {
      name: "Verify Text Not Equals",
      description:
        "Checks if the element’s text does not match a specific value.",
    },
    {
      name: "Verify Title",
      description: "Compares the page title with the expected title.",
    },
    {
      name: "Verify: Attribute Value Contains",
      description:
        "Checks whether an element’s attribute contains a specific substring.",
    },
    {
      name: "Verify: Attribute Value Is Empty",
      description: "Asserts that an element's attribute is empty.",
    },
    {
      name: "Verify: Attribute Value Is Not Empty",
      description: "Asserts that an element’s attribute has some value.",
    },
    {
      name: "Verify: Element Text Match",
      description:
        "Confirms the full text content of an element matches a given string.",
    },
    {
      name: "Verify: Is Element Displayed",
      description: "Checks if a given element is currently visible in the UI.",
    },
    {
      name: "Verify: Is Element Not Displayed",
      description:
        "Checks that the element is not visible or is hidden from view.",
    },
    {
      name: "Verify: Element text length",
      description: "Checks the number of characters in the text of an element.",
    },
  ],
};

const UtilityData = {
  category: "Utility/Data Actions :",
  steps: [
    {
      name: "Pause Execution in seconds",
      description:
        "Waits (pauses) for a specified time before continuing the test.",
    },
    {
      name: "Replace sequence of characters in Stored variable: replace",
      description:
        "Replaces specific characters or substrings in a stored variable.",
    },
    {
      name: "Remove first n characters from variable or default temp variable",
      description: "Removes the initial characters from a variable's value.",
    },
    {
      name: "Arithmetic: Addition on Stored variable or default temp variable value with input",
      description:
        "Adds a number to a stored variable or default `temp` variable.",
    },
    {
      name: "Arithmetic: Division on Stored variable or default temp variable value by input",
      description: "Divides the variable value by the input number.",
    },
    {
      name: "Arithmetic: Multiplication on Stored variable or default temp variable value with input",
      description: "Multiplies the variable value by the input.",
    },
    {
      name: "Arithmetic: Subtraction on Stored variable or default temp variable value with input",
      description: "Subtracts the input number from the variable.",
    },
    {
      name: "Visual AI to compare baseline application UI with runtime UI",
      description:
        "Uses AI to compare the live app UI with a stored baseline for visual differences.",
    },
    {
      name: "Wait For Element Clickable",
      description: "Waits until an element is interactable (clickable).",
    },
    {
      name: "Wait For Element Not Editable",
      description: "Waits until the element becomes non-editable.",
    },
    {
      name: "Wait For Element Not Present",
      description: "Waits until the element is removed from the DOM.",
    },
    {
      name: "Wait For Element Not Visible",
      description: "Waits until the element is hidden from view.",
    },
    {
      name: "Wait For Element Visible",
      description: "Waits until the element becomes visible on the screen.",
    },
    {
      name: "Wait For Text",
      description: "Waits until a specific text appears on the page.",
    },
    {
      name: "Zoning",
      description:
        "Detects sections (zones) of the page for organized interaction.",
    },
    {
      name: "Convert List of Strings As Multiline Text and copy to clipboard",
      description:
        "Formats a list as multiline text and copies it to the clipboard.",
    },
    {
      name: "Validate and update data in excel file",
      description:
        "Reads, validates, and updates Excel file contents during execution.",
    },
    {
      name: "Extract data from PDF",
      description: "Reads and extracts data from a PDF file.",
    },
    {
      name: "Extract first Number from a Text",
      description: "Finds and stores the first number found in a text string.",
    },
  ],
};

export {
  AlertData,
  BrowserData,
  CardData,
  KeyboardData,
  MouseData,
  InputData,
  ElementInteractionData,
  ScrollNavigationData,
  ValidationData,
  UtilityData,
};
