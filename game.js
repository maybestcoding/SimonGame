
buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];
let level = 0 ;
let gameStart = false;

$(document).keydown(function() {
  if (!gameStart) {
  $("#level-title").text("level " + level);
  nextSequence();
  gameStart = true;
}
});

$(".startBtn").click(function() {
    if(!gameStart) {
        nextSequence();
        $("#level-title").text("Level "+level);
        gameStart = true;
    }
})

$(".btn").click(function() {
  let userChosenColour = this.id;//$(this).attr("id")
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length);
});

function nextSequence() {
  userClickedPattern =[];
  level++;
  $("#level-title").text("Level " + level );
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  }

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  let animatedBtn = $("#" + currentColour)
  animatedBtn.addClass("pressed");
  setTimeout(function() {
    animatedBtn.removeClass("pressed")
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[(currentLevel)-1] === userClickedPattern[(currentLevel)-1]) {
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
    $("#level-title").text("Game Over, Press a key or the Start button to Restart");
    startOver();    
  }
  
}
function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;

}
