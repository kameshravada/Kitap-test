import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Alert } from "./Action-Components/Alert";
import { Browser } from "./Action-Components/Browser";
import { KeyboardTestPage } from "./Action-Components/KeyBoard";
import { Mouse } from "./Action-Components/Mouse";
import InputFieldActions from "./Action-Components/InputFieldActions";
import { MantineProvider } from "@mantine/core";
import ElementInteractionDemo from "./Action-Components/ElementInteractionDemo";
import Scrolling from "./Action-Components/Scrolling";
import Validation from "./Action-Components/Validation";
import UtilityActionsDemo from "./Action-Components/UtilityActionsDemo";
import Api from "./Action-Components/Api";
import ControlFlow from "./Action-Components/ControlFlow";
function App() {
  return (
    <div className="">
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/browser" element={<Browser />} />
            <Route path="/keyboard" element={<KeyboardTestPage />} />
            <Route path="/mouse" element={<Mouse />} />
            <Route path="/input-fields" element={<InputFieldActions />} />
            <Route
              path="/element-interaction"
              element={<ElementInteractionDemo />}
            />
            <Route path="/scrolling" element={<Scrolling />} />
            <Route path="/validation" element={<Validation />} />
            <Route path="/utility" element={<UtilityActionsDemo />} />
            <Route path="/api" element={<Api />} />
            <Route path="/control-flow" element={<ControlFlow />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
