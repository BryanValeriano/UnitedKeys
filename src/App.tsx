import React from "react";
import { GlobalStyle } from "./styles/global";

import { Keyboard } from "./components/Keyboard/Keyboard";

export function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <Keyboard />
      </div>
      <GlobalStyle />
    </>
  );
}
