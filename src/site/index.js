import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { content } from "./util";

export const NODE_NAME = `root`;
document.body.appendChild(document.createElement(NODE_NAME));
const root = document.getElementsByTagName(NODE_NAME)[0];
ReactDOM.render(<App bookmarklets={content} />, root);
