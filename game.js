
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;
var gameStart = false;

$(document).keydown(function() {

  if (!gameStart) {
  $("#level-title").text("level " + level); //need this statement?
  nextSequence();
  gameStart = true;
}
});


$(".btn").click(function() {
  var userChosenColour = this.id;//$(this).attr("id")
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length);
});

function nextSequence() {
  userClickedPattern =[];
  level++;
  $("#level-title").text("Level " + level );
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  }

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColour) {
  var animatedBtn = $("#" + currentColour)
  animatedBtn.addClass("pressed");
  setTimeout(function() {
    animatedBtn.removeClass("pressed")
  }, 100);
}

function checkAnswer(currentLevel) {

  if (gamePattern[(currentLevel)-1] === userClickedPattern[(currentLevel)-1]) {
    // console.log("success");
    // console.log(currentLevel);

    if (gamePattern.length ===  userClickedPattern.length){
      setTimeout(function() {
        nextSequence();
      }, 1000)
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over")
    }, 200)
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    // console.log("wrong");
  }


}
function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;

}
