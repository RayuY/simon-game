
let gamePattern = [];
let userClickedPattern = [];


let buttonColours = ['red', 'blue', 'green', 'yellow'];

$('.btn').click(function() {
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  pressAnimate(userChosenColour);
});

function nextSequence () {
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