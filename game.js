
let gamePattern = [];

let buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence () {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);

  $("#" + randomChosenColours).fadeIn(100).fadeOut(100).fadeIn(100);
  let audio = new Audio('sounds/'+ randomChosenColours + ".mp3");
  audio.play();
}

console.log(gamePattern)