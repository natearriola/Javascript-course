/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundscore, activePlayer, gamePlaying;

init();
var lastDice;

// Button to roll the dice

document.querySelector(".btn-roll").addEventListener("click", function() {
  // ONLY ROLL DICE WHEN GAME IS PLAYING STATE VARIABLE
  if (gamePlaying) {
    //Math floor method, removes the decimal part of a number
    // Calculate random number
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    //Display the result
    document.querySelector(".dice-0").style.display = "block";
    document.querySelector(".dice-1").style.display = "block";

    //Change the Dice img being displayd
    document.querySelector.src = ".dice-0" + dice1 + ".png";
    document.querySelector.src = ".dice-1" + dice2 + ".png";
    // roll two 6s in a row and player looses score
    if (dice === 6 && lastDice === 6) {
      //Player looses score
      scores[activePlayer] = 0;
      document.getElementById("score-" + activePlayer).textContent = "0";

      nextPlayer();
    }

    // Update the round score IF the rolled number is NOT a 1
    else if (dice !== 1) {
      //Add score
      roundScore += dice;

      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      scores[activePlayer] = 0;
      document.getElementById("score-" + activePlayer).textContent = "0";
      //Next Player
      nextPlayer();
    }

    lastDice = dice;
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

    var input = document.getElementById("final-score").value;
    var winningScore;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    //Check if Player Wins

    if (scores[activePlayer] >= winningScore) {
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

// INPUT HTML

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
  document.querySelector(".dice-0").style.display = "none";
  document.querySelector(".dice-1").style.display = "none";
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
  document.querySelector(".dice-0").style.display = "none";
  document.querySelector(".dice-1").style.display = "none";
}
