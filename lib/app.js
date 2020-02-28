import React from "/web_modules/react.js";
import ReactDOM from "/web_modules/react-dom.js";
import styled from "/web_modules/@emotion/styled.js";
import { css } from "/web_modules/@emotion/core.js";
import Display from "./components/Counter/Display.js";
import Change from "./components/Counter/Change.js";
import { Provider } from "/web_modules/react-redux.js";
import store from "./store.js";
import { jsx as ___EmotionJSX } from "/web_modules/@emotion/core.js";
const serifFont = '"Playfair Display", "Times New Roman", Times, serif';
export const App = () => {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX("header", {
    css: css`
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center;
        `
  }, ___EmotionJSX("h1", {
    css: css`
            font-family: ${serifFont};
            font-weight: bold;
            margin-bottom: 10px;
          `
  }, "Licznik"), ___EmotionJSX("p", {
    css: css`
            font-family: ${serifFont};
            font-size: 1.1em;
            margin-top: 0;
          `
  }, "\"Robi\u0119 to, \u017Ceby\u015B ty nie musia\u0142...\"")), ___EmotionJSX("hr", {
    css: css`
          height: 15px;
          border: 0;
          box-shadow: 0 10px 10px -10px #8c8b8b inset;
        `
  }), ___EmotionJSX("div", {
    css: css`
          display: flex;
          justify-content: center;
          align-content: center;
          line-height: 1.45;
        `
  }, ___EmotionJSX(Display, null), ___EmotionJSX(Change, null)));
};
ReactDOM.render(___EmotionJSX(Provider, {
  store: store
}, ___EmotionJSX(App, null)), document.getElementById("app"));