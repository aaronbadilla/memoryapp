// Starting Variables

var gameInput = [];
var playerInput = [];

// Game Start

    $(document).keydown(function() {
      $("body").removeClass("game-over")
      if (gameInput.length > 0) {gameOver()}
      else {randomButtonSelector()}


    });

// Click Actions

  $(".btn").click(function(event) {

    buttonAnimation(event.target);
    playAudio(event.target.id);

    if (event.target.id === "green") {
      playerInput.push(1);
    }
    if (event.target.id === "red") {
      playerInput.push(2);
    }
    if (event.target.id === "yellow") {
      playerInput.push(3);
    }
    if (event.target.id === "blue") {
      playerInput.push(4);
    }
    console.log(playerInput);

    accuracy()

  });

// Accuracy Test

function accuracy() {
  for (var i = 0; i < playerInput.length; i++) {
   if ((playerInput[i] === gameInput[i]) && (playerInput.length === gameInput.length) && (JSON.stringify(playerInput) === JSON.stringify(gameInput))) {randomButtonSelector()}
   else if (playerInput[i] !== gameInput[i]) {gameOver()}
 }}

// Random Button Selector

  function randomButtonSelector() {

    playerInput = [];
    $("h1").html("Level " + (1 + gameInput.length));

    setTimeout(function(){

    var buttonSelector = Math.floor((Math.random()) * 4) + 1;

    if (buttonSelector === 1) {
      buttonAnimation(".green");
      playAudio("green");
      gameInput.push(1);
    }
    if (buttonSelector === 2) {
      buttonAnimation(".red");
      playAudio("red");
      gameInput.push(2);
    }
    if (buttonSelector === 3) {
      buttonAnimation(".yellow")
      playAudio("yellow")
      gameInput.push(3)
    }
    if (buttonSelector === 4) {
      buttonAnimation(".blue");
      playAudio("blue");
      gameInput.push(4);
    }
    console.log(gameInput)
  }, 700)
}

// Button Animation

function buttonAnimation(button) {
  $(button).addClass("pressed");
  setTimeout(function() {

    $(button).removeClass("pressed");
  }, 100)

}

// Button Sound

function playAudio(key) {

  // switch (key) {
    // case "green":

      var audio = new Audio('sounds/' + key + '.mp3');
      audio.volume = 0.07
      audio.play();
      // break;

//     case "red":
//
//       var red1 = new Audio('sounds/red.mp3')
//       red1.play();
//       break;
//
//     case "yellow":
//
//       var yellow1 = new Audio('sounds/yellow.mp3')
//       yellow1.play();
//       break;
//
//     case "blue":
//
//       var blue1 = new Audio('sounds/blue.mp3')
//       blue1.play();
//       break;
//
//     default:
//       console.log(key)
//
  }
// }

// Game Over

  function gameOver() {

      var gameOver1 = new Audio('sounds/wrong.mp3')
      gameOver1.volume = 0.07
      gameOver1.play();
      $("h1").html("Game Over, Press Any Key To Restart");
      $("body").addClass("game-over")
      gameInput = [];
      playerInput = [];
  }
