import React from "/web_modules/react.js";
import ReactDOM from "/web_modules/react-dom.js";
import styled from "/web_modules/@emotion/styled.js";
import { css } from "/web_modules/@emotion/core.js";
import Display from "./components/Counter/Display.js";
import { Provider } from "/web_modules/react-redux.js";
import store from "./store.js";
import { jsx as ___EmotionJSX } from "/web_modules/@emotion/core.js";
export const App = () => {
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX("h1", null, "Licznik"), ___EmotionJSX("p", null, "Robi\u0119 to, \u017Ceby\u015B ty nie musia\u0142..."), ___EmotionJSX("hr", null), ___EmotionJSX("div", null), ___EmotionJSX(Display, null));
};
ReactDOM.render(___EmotionJSX(Provider, {
  store: store
}, ___EmotionJSX(App, null)), document.getElementById("app"));