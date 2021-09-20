/*
*  Needed for browserify to boundle
*  to bundle, run
*  $ browserify index.js > minimatch.js; uglifyjs minimatch.js > minimatch.min.js
*/
window.minimatch = require('minimatch')