// dependency for inquirer npm package
var inquirer = require("inquirer");

//  require keyword to access all the exports in our word.js file
var letter = require("./letter.js");

var wordChoice = ["Words are free.", "Raise your words, not your voice.",
    "kind words changes someone's entire day.", "high level meeting",
];

// randomized word chosen from the array
var chosenWord = "";

// number of "__ __"  so when I call placeHolder I can have it === "__"
var spaceHolder = "_";

// split word and store in var
var lettersInWord = [];

// constructor function which create objects
function word(chosenWord, spaceHolder, lettersInWord) {
    this.chosenWord = chosenWord;
    this.spaceHolder = spaceHolder;
    this.lettersInWord = lettersInWord;
};
// placeholders for all words in chooseWord restarts each game
Word.prototype.placeHolder = function() {

    this.chosenWord = wordChoice[Math.floor(Math.random() * wordChoice.length)];
    this.lettersInWord = chosenWord.split("");
    this.spaceHolder = lettersInWord.length;

    // based on # of letters in chosenWord.
    for (var i = 0; i < lettersInWord.length; i++) {
        spaceHolder += lettersInWord.length;
    }
    console.log(this.spaceHolder);
};
var word = new Word(chosenWord, spaceHolder, lettersInWord);
// run placeholder prototype " 
word.placeHolder();


//export the files
module.exports = wordChoice;
module.exports = Word;
module.exports = word;