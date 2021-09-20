/*
*  Needed for browserify to boundle
*  to bundle, run
*  $ browserify index.js > chai-custom.js; uglifyjs chai-custom.js > chai-custom.min.js
*/
let chai = require('chai');
let chaiSubset = require('chai-subset');

chai.use(chaiSubset);
window.chai = chai