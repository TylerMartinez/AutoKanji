const fs = require('fs');
const zlib = require('zlib');

// Variables
var Dictionary = null;

// Functions
const init = async function() {
    // Setup streams
    let fileContents = fs.createReadStream('./AutoKanjiTrie.json.gz');
    let gunzip = zlib.createGunzip();

    // Compile dictionary from zipped trie
    let chunks = []
    await fileContents.pipe(gunzip)
        .on("data", (chunk) => {
            chunks.push(chunk.toString());
        })
        .on("end", () => {
            Dictionary = JSON.parse(chunks.join(''));
        });
};

const findMatches = function() {
    console.log("Looking for matches");
};

// Setup api
const api = {
    find: findMatches
} 

// Export Module
init();
module.exports = api;