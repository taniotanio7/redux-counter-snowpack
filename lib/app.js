import React from "/web_modules/react.js";
import ReactDOM from "/web_modules/react-dom.js";
export const App = () => {
  return React.createElement("div", null, React.createElement("p", null, "Siema"));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));