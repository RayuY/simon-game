
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let gameStart = false;
let buttonColours = ['red', 'blue', 'green', 'yellow'];

$(document).keypress(function () {
  if (!gameStart) {
    nextSequence();
    gameStart = true;
  }
});

$('.btn').click(function () {
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  pressAnimate(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    
    startOver();
  }

}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;
}

function nextSequence() {
  level++;
  userClickedPattern = [];

  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(id) {
  let audio = new Audio('sounds/' + id + '.mp3');
  audio.play();
}

function pressAnimate(colour) {
  $("#" + colour).addClass('pressed');
  setTimeout(function () {
    $("#" + colour).removeClass('pressed');
  }, 100);
}