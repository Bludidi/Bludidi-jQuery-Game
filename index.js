var buttonColors = ['red', 'green', 'yellow', 'blue'];
var gamePattern = [];
var userClickedPattern = [];

 // Targeting the ID of a selected button and store in an array
 $(".btn").click(function () {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); // random number from 0 to 3
  var randomChosenColour = buttonColors[randomNumber];

  // targeting the ID of a random selected button and add style
  $('#' + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
 
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
}

nextSequence();

function playSound(name) { // The parameter here is a placeholder for the variable
  // Adding event listner on 'click' event and trigger a function that plays a sound
    var sound = new Audio('/sounds/' + name + '.mp3');
    sound.play();
  };

  function animatePress(currentColor) {
   $("." + currentColor).addClass("pressed");
   setTimeout(() => {
    $("." + currentColor).removeClass("pressed");
   }, 100);
  }

  



