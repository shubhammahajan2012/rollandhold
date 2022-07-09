//Selecting elements
var score0El = document.querySelector("#score--0");
var score1El = document.querySelector("#score--1");
var current0El = document.querySelector("#current--0");
var current1El = document.querySelector("#current--1");
var diceEl = document.querySelector(".dice");
var btnRoll = document.querySelector(".btn--roll");
var btnNew = document.querySelector(".btn--new");
var btnHold = document.querySelector(".btn--hold");
var player0El = document.querySelector(".player--0");
var player1El = document.querySelector(".player--1");

//Selecting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

var score = [0, 0];
var currentScore = 0;
var activePlayer = 0;
var playing = true;

var switchPlayer = function() {
  document.querySelector("#current--"+ activePlayer).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//1.Rolling dice button Function
btnRoll.addEventListener("click", function() {
  if(playing) {
//1.Genrating a random dice roll
var randomNumber = Math.floor(Math.random() * 6) + 1;

//2.Display dice
diceEl.classList.remove("hidden");
diceEl.src = ("dice-"+ randomNumber + ".png");

//3.Checked for rolled 1: if true, switch to next player(roll dice function)
if(randomNumber !== 1){

currentScore = currentScore + randomNumber;

document.querySelector("#current--"+ activePlayer).textContent = currentScore;
}

else {
//switch to next player
switchPlayer();
}
}
});

//2.Hold button function
btnHold.addEventListener("click", function() {
  if(playing){
//1.Add current score to Main score
  score[activePlayer] = score[activePlayer] + currentScore;
  document.querySelector("#score--"+activePlayer).textContent = score[activePlayer];
//2.check if maine score >= 50
if(score[activePlayer] >= 50) {
  playing = false;
  diceEl.classList.add("hidden");
  document.querySelector(".player--"+activePlayer).classList.add("player--winner");
  document.querySelector(".player--"+activePlayer).classList.remove("player--active");
}
else{
//3.switch to the next player
switchPlayer();
}
}
});

//3.New game button Function
btnNew.addEventListener("click", function(){
//1.Reseting all the scores to 0
  diceEl.classList.add("hidden");
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  score = [0, 0];
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
  currentScore = 0;

//2.Removed winner class and setting player 1 as starting player
  document.querySelector(".player--"+activePlayer).classList.remove("player--winner");
  document.querySelector(".player--"+activePlayer).classList.remove("player--active");
  activePlayer = 0;
  player0El.classList.add("player--active");
  playing = true;

});
