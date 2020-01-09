const fs = require('fs');
const zlib = require('zlib');
const path = require("path");

// Variables
var Dictionary = null;
var levelsOfLenience = 2;

// Functions
const init = function() {
    // Read File
    let fileContents = fs.readFileSync(path.resolve(__dirname,'./AutoKanjiTrie.json.gz'));

    // Compile dictionary from zipped trie
    let temp = zlib.gunzipSync(fileContents);

    Dictionary = JSON.parse(temp);
};

const findMatches = function(input) {
    // Variables
    var results = [];
    var currentLevel;
    
    // Check if dictonary is initialized
    if(Dictionary !== null){
        currentLevel = Dictionary;

        // Loop through length of word 
        for(var i = 0; i < input.length; i++) {
            // Get letter and calculate level
            var letter = input[i];
            var level = input.length - i;

            // Move into currentLevel if exists otherwise break
            if(currentLevel.hasOwnProperty(letter))
                currentLevel = currentLevel[letter];
            else
                break;

            // Check if inside levels of lenience then add to result
            if(level <= levelsOfLenience && currentLevel.hasOwnProperty("v"))
                results = results.concat(currentLevel["v"]);
        }

        // Reverse the results array to have the most accurate answer first and return results
        return results.reverse();
    }

    // We errored return fail code
    return -1;
};

const setLevelsOfLenience = function(level) {
    if(Number.isInteger(level) && level > 0)
        levelsOfLenience  = level;
};

// Setup api
const api = {
    find: findMatches,
    setLenience: setLevelsOfLenience 
} 

// Export Module
init();
module.exports = api;