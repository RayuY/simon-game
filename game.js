
let gamePattern = [];

let buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence () {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);
}

nextSequence();




console.log(gamePattern)