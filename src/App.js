import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi There!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={() => setAllowToggle(true)}>Allow Toggling!</Button>
      <Button onClick={allowToggle ? toggleParagraphHandler : undefined}>
        Toggle Paragraph!
      </Button>
    </div>
  );
}

export default App;
