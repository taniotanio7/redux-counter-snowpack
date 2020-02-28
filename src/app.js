import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
export const App = () => {
  return (
    <>
      <h1>Licznik</h1>
      <p>Robię to, żebyś ty nie musiał...</p>
      <hr />
      <div></div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
