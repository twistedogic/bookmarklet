const path = require("path");

const bookmarkletDir = path.resolve(__dirname, "bookmarklet");

const bookmarklets = ["quiz"];

const entry = bookmarklets.reduce(
  (obj, name) => ({
    ...obj,
    [name]: path.resolve(bookmarkletDir, name, "index.js")
  }),
  {}
);

module.exports = { bookmarklets, entry };
