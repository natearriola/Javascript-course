// DOM MANIPULATION LECTURE

// How to create fundamental game variables

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game





*/
// WHAT ARE EVENTS?
// Events alert the code that something is happening
// Event listeners are only called if a specific rule is executed.
//Ex: clicking a button and the page scrolls down.

// CALL BACK FUNCTION = function pass into another function, EX: addEventListner calls dice
//Anonymous function doesnt have a name cant be reused

// Variable for the activePlayer which one is currently playing

var scores, roundscore, activePlayer, gamePlaying;

init();

// Button to roll the dice

document.querySelector(".btn-roll").addEventListener("click", function() {
  // ONLY ROLL DICE WHEN GAME IS PLAYING STATE VARIABLE
  if (gamePlaying) {
    //Math floor method, removes the decimal part of a number
    // Calculate random number
    var dice = Math.floor(Math.random() * 6 + 1);

    //Display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    //Change the Dice img being displayd
    diceDom.src = "dice-" + dice + ".png";

    // Update the round score IF the rolled number is NOT a 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Next Player

      nextPlayer();
    }
  }
});

//HOLD BUTTON

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    //ADD roundScore to GLOBAL Score
    scores[activePlayer] += roundScore;

    //Update UI
    document.getElementById("current-" + activePlayer).textContent = "0";
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //Check if Player Wins

    if (scores[activePlayer] >= 10) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

// NEW GAME BUTTON

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  //Gameplaying variable (State variable)
  gamePlaying = "true";
  // Put scores in an Array to keep DRY
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  //  Use activePlayer variable to go from 0 to 1.

  // .textContent is onyl used for plain text

  //This changes the css to display: none;
  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  //Next Player

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  // Update UI with roundscore
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Toggle Classes switches it back and forth
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //Hide dice when activePlayer rolls 1
  document.querySelector(".dice").style.display = "none";
}

// document.querySelector("#current-" + activePlayer).textContent = dice;

//If you want to have html content use

/* document.querySelector("#current-" + activePlayer).innerHTML =
  "<em>" + dice + "</em>"; */

//Can store selectors and store in variables
/*var x = document.querySelector("#score-0").textContent;
console.log(x);
*/

// Ternary Statement

/*
activePlayer = 0 ? activePlayer = 1 : activePlayer = 0;
*/
// Same thing as this

/*
if(activePlayer === 0){
    activePlayer ===1;
} else {
    activePlayer === 0;
};
*/

//ADDING AND REMOVING CSS STYLES
/*
document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
    */

// STATE VARIBALE - condition of a system (game playing or not?)
