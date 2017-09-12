var attrs = {}

const modules = [
  "onclick",
  "onchange",
  "toClass"
].forEach( moduleName => attrs[moduleName] = require("./attrs/"+moduleName) )

module.exports = attrs