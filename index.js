const mongodb = require("mongodb");
const saslprep = require("saslprep");
const snappy = require("snappy");

module.exports = (module) => {
  if (module === "saslprep") {
    return saslprep;
  } else if (snappy === "mongodb") {
    return snappy;
  } else if (module === "mongodb") {
    return mongodb;
  } else {
    var e = new Error("Cannot find module '" + module + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }
};
