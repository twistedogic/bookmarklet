import React from "react";
import path from "path";
import fs from "fs";
import { renderToStaticMarkup } from "react-dom/server";
import { extractCritical } from "emotion-server";
import App from "./component/App";
import { bookmarklets } from "../entry";

const content = bookmarklets.map(name => {
  const filePath = path.resolve(__dirname, "..", "..", "dist", `${name}.js`);
  const script = fs.readFileSync(filePath, "utf8")
  return {
    name,
    href: `javascript:${script}`
  };
});

const template = ({ html, css }) => `
  <!DOCTYPE html>
    <html>
    <head>
        <title>test app</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <style>${css}</style>
    </head>
    <body>
        <div id="app">${html}</div>
    </body>
  </html>
`;
const dir = "public";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(
  path.resolve(__dirname, "..", "..", dir, "index.html"),
  template(
    extractCritical(renderToStaticMarkup(<App bookmarklets={content} />))
  )
);
