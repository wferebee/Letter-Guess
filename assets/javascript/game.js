
var userGuess;
var userWins = 0;
var userLosses = 0;
var userGuessesArray = [];
var remainingGuesses = 10;
//console.log(remainingGuesses +"\n\n\n");


var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses = document.getElementById("guesses");
var remaining = document.getElementById("remaining");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter;


function randomize () {
    randomLetter = letters[Math.floor(Math.random()*letters.length)];
    return randomLetter;
};
randomize();
console.log("Letter to guess" + "\n" + randomLetter + "\n");


function updateStats() {
    wins.innerHTML = "Number of Wins : " + userWins;
    losses.innerHTML = "Number of Losses : " + userLosses;
    guesses.innerHTML = "Letters Guessed So Far : " + " " + userGuessesArray;
    remaining.innerHTML = "Guesses Remaing : " + " " + remainingGuesses;
 };
updateStats();


function restart() {
    randomize();
    console.log(" New letter to guess" + "\n" + randomLetter + "\n");
    userGuessesArray = [];
    remainingGuesses = 10;
    updateStats();
};

document.onkeyup = function(event) {
   
   userGuess = event.key;
   userGuessesArray.push(" " + userGuess);
   userGuessesArray =userGuessesArray.map(function(x){ return x.toUpperCase() })
   //console.log(userGuessesArray);
   remainingGuesses--;
   updateStats();  

   if (userGuess == randomLetter) {
       alert("YOU WIN!");
       userWins++;
        restart();    
   }
   else if (remainingGuesses === 0) {
       alert("YOU LOSE!");
       userLosses++;
       restart(); 
   };
};

 

/*
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter;

function randomize () {
    randomLetter = letters[Math.floor(Math.random()*letters.length)];
    return randomLetter;
};

function proof() {
    var count = 0;
    while (count < 50) {
      randomize();
      count++;
        console.log(randomLetter);
    };
  };
proof(); */ 

    // Every once in a while the program picks the same random letter twice. It's just part of the randomness. 
    // The code in the block comment just prints out 50 random letters using the same code that I used above
    // to run the program. If used, it will show that it really is random even if it seems buggy.
    // I know it's not true random - just trying to demonstrate it is not a bug.
 