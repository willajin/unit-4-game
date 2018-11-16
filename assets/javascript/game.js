$(document).ready(function() {

// define global variables
var randNumElem = $("#randomNumber");
var winsElem = $("#wins");
var lossesElem = $("#losses");
var totalScoreElem = $("#totalScore");
var wins = 0;           // total number of wins
var losses = 0;         // total number of losses
var randNum;            // random number
var userScore = 0;      // user score
var randValueBlue = 0;      // random number of blue crystal
var randValueRed;       // random number of red crystal
var randValueGreen;     // random number of green crystal
var randValueYellow;    // random number of yellow crystal

// update display
function updateDisplay() {
    $("#randomNumber").text(randNum);
    $("#totalScore").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

// initialize game with random number to match (19-120) and random values assigned to crystals (1-12)
function startGame() {
    // initialize user score to 0
    userScore = 0;

    // generate random number between 19-120
    randNum = Math.floor(Math.random()*102 + 19);
    console.log(randNum);

    // generate random values for crystals between 1-12
    randValueBlue = Math.floor(Math.random()*12 + 1);
    console.log("Blue: " + randValueBlue);
    randValueRed = Math.floor(Math.random()*12 + 1);
    console.log("Red: " + randValueRed);
    randValueGreen = Math.floor(Math.random()*12 + 1);
    console.log("Green: " + randValueGreen);
    randValueYellow = Math.floor(Math.random()*12 + 1);
    console.log("Yellow: " + randValueYellow);

    updateDisplay();
}

// on click for each crystal, add value of crystal to total score
$("#blue").on("click", function() {
    userScore += randValueBlue;
    updateDisplay();
    checkWin();
});

$("#red").on("click", function() {
    userScore += randValueRed;
    updateDisplay();
    checkWin();
});

$("#green").on("click", function() {
    userScore += randValueGreen;
    updateDisplay();
    checkWin();
});

$("#yellow").on("click", function() {
    userScore += randValueYellow;
    updateDisplay();
    checkWin();
});

function checkWin() {
// if total score matches random number, user wins
if (userScore === randNum) {
    wins++;
    updateDisplay();
    startGame();
}

// if total score is greater than random number, user loses
else if (userScore > randNum) {
    losses++;
    updateDisplay();
    startGame();
}
}

startGame();

});