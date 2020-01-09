# AutoKanji
Javascript library that provides autocomplete suggestions for kanji based on a kana input. The kana to kanji 
translations are based off the JMDict Dictionary Project.

# Usage
After installing and requiring the autokanji library the following functionality can be used:
* Find - returns an array of matches in descending leniency
```javascript
var autoKanji = require("autokanji");
var kanji;

kanji = autokanji.find("がっこう"); // Returns: ['学校']
```

* SetLeniency - changes the level of leniency we check when determining possible matches. Setting this to 1 makes
sure all characters in input must match the kanji translation and 2 makes sure every character but the last one
matches and so on. The default is 2.
```javascript
var autoKanji = require("autokanji");

kanji = autoKanji.find("あつい") // Returns: ['熱い','暑い','厚い','圧','厚']

autoKanji.setLenience(3);
kanji = autoKanji.find("あつい") // Returns: ['熱い','暑い','厚い','圧','厚','亜']

autoKanji.setLenience(1);
kanji = autoKanji.find("あつい") // Returns: ['熱い','暑い','厚い']
```

# Dictionary
The dictionary of kana to kanji translations is based of a JMDict file acquired on 12/7/2019. The file was 
translated to JSON using JMdict Parser that transformed to a json object containing only words that had kana to 
kanji representations using the JQ tool. This was then used to construct a trie using the JSONTrie CLI tool and 
compressed to be included with this package.

# Mentions
* JMDict: http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project
* JMdict Parser: https://github.com/tkshnwesper/JMdict-Parser
* JQ: https://stedolan.github.io/jq/
* JSONTrie: https://github.com/TylerMartinez/JSONTrie
