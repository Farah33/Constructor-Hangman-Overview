//  the exports in our word.js file

var word = require("./word.js");
var inquirer = require("inquirer");


var alphabetHolder = [];
// counts how many times 'guess a letter' question occurs
var guessNum = 10;

function letter(alphabet, alphabetHolder) {
    this.alphabet = alphabet;
    this.alphabetHolder = alphabetHolder;
}
var startGame = function() {

        //placeholder prototype function starts the game" 
        word.placeHolder();

        // runs inquirer and asks the user a series of questions 
        inquirer.prompt([{
                type: "input",
                message: 'Guess a letter!',
                check: function(value) {
                    if (isNaN(value) === true) {
                        return true;
                    } else {

                        return false;
                    }
                },
            },

        ]).then(function(res) {

            // initializes the variable to be an object user 
            var letter = new Letter(res.alphabet);
            for (var i = 0; i < chosenWord.length; i++) {
                if (this.lettersInWord[i] === this.letter) {

                    //if alphabet matches boolean true
                    this.letterGuessed = true;
                    console.log("Your guess " + res.alphabet + " is correct!");

                } else {
                    console.log("Your  guess " + res.alphabet + " is not correct! try again!");
                }
            }

            // letter is indiced in chosenWord then loop through and populate 
            if (this.alphabet) {
                // then Loop through 
                for (var j = 0; j < placeHolder.length; j++) {
                    // match letter for letters in word
                    if (this.lettersInWord[x] === this.letter) {
                        this.placeHolder[x] = this.letter;
                    }
                }
                console.log(alphabetHolder);
            }
            // add one to count to increment the loop by 1
            guessNum++;
            // run askquestion function again - either end the loop or ask the questions
            startGame();
        });
    }
    // call startGame to run code
startGame();

function endGame() {

    if (lettersInWord.toString() === placeHolder.toString()) {
        alert("You win! play again!");
        // here we restart the game
        startGame();

    } else if (guessNum === 0) {

        // run inquirer to ask user if they want to start a new game after guesses run out
        inquirer.prompt([{
                type: 'input',
                message: " YOU LOST! WOULD YOU LIKE TO PLAY AGAIN?",
                name: "confirm",
                default: true
            }, ])
            .then(function(err, restart) {

                if (restart.confirm) {
                    console.log("\nGreat, a new hangman game will begin!\n");
                    // Restart the game
                    startGame();
                } else {
                    console.log("\nPlay again when you are ready!\n");
                }
            });
    }
}

endGame();