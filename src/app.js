import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Display from "./components/Counter/Display.js";
import Change from "./components/Counter/Change.js";
import { Provider } from "react-redux";
import store from "./store.js";

const serifFont = '"Playfair Display", "Times New Roman", Times, serif';

export const App = () => {
  return (
    <>
      <header
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
        `}>
        <h1
          css={css`
            font-family: ${serifFont};
            font-weight: bold;
            margin-bottom: 10px;
          `}>
          Licznik
        </h1>
        <p
          css={css`
            font-family: ${serifFont};
            font-size: 1.1em;
            margin-top: 0;
          `}>
          "Robię to, żebyś ty nie musiał..."
        </p>
      </header>
      <hr
        css={css`
          height: 15px;
          border: 0;
          box-shadow: 0 10px 10px -10px #8c8b8b inset;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-content: center;
          line-height: 1.45;
        `}>
        <Display />
        <Change />
      </div>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
