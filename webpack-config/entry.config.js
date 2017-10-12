var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};
pageArr.forEach((page) => {
  let arr = page.split("/");
  let p2 = arr.slice(0,-1).join("/");
  configEntry[p2] = path.resolve(dirVars.pagesDir, p2+"/page.js");
});
console.log(configEntry);

module.exports = configEntry;
