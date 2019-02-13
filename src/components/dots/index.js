import codegen from "babel-plugin-codegen/macro";

codegen`
  const fs = require("fs");
  const path = require("path");
  const files = fs.readdirSync(__dirname).filter(file => file !== "index.js");
  module.exports = files.map(file => 'export {default as ' + path.parse(file).name + '} from "./' + file + '";').join("\\n")
`;

// This file will re-export all files inside of dots except index.js like this:
// export {default as Pulse} from "./Pulse";
