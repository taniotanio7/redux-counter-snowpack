import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Display from "./components/Counter/Display.js";
import { Provider } from "react-redux";
import store from "./store.js";

export const App = () => {
  return (
    <>
      <h1>Licznik</h1>
      <p>Robię to, żebyś ty nie musiał...</p>
      <hr />
      <div></div>
      <Display />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
