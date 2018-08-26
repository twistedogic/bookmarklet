const path = require("path");
const fs = require("fs");

const bookmarkletDir = path.resolve(__dirname, "bookmarklet");

const bookmarklets = ["quiz"];

const entry = bookmarklets.reduce(
  (obj, name) => ({
    ...obj,
    [name]: path.resolve(bookmarkletDir, name, "index.js")
  }),
  {}
);

const content = bookmarklets.map(name => {
  const script = fs.readFileSync(
    path.resolve(__dirname, "..", "dist", `${name}.js`),
    "utf8"
  );
  return {
    name,
    href: `javascript:${script}`
  };
});

module.exports = { bookmarklets, entry, content };
