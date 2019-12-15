const fs = require('fs');
const zlib = require('zlib');

const fileContents = fs.createReadStream('./data/file1.txt.gz');

console.log(fileContents);
// Variables
var Dictionary = null;

// Functions
const init = function() {

};

const findMatches = function() {
    console.log("Looking for matches");
};

const compileKanjiDictionary = function() {

};

// Setup api
const api = {
    find: findMatches
} 

// Export Module
init();
module.exports = api;