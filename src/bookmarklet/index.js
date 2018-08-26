import ReactDOM from "react-dom";

const now = new Date().getTime();

export const NODE_NAME = `bookmarklet-${now}`;

let root = document.getElementsByTagName(NODE_NAME)[0];
if (!root) {
  document.body.appendChild(document.createElement(NODE_NAME));
  root = document.getElementsByTagName(NODE_NAME)[0];
}

const renderDOM = comp => {
  ReactDOM.render(comp, root);
};

export default renderDOM;
