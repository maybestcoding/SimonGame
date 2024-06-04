# SimonGame

1. Basic setting
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern =[];
let gameStart = false;
let level = 0;

2. Press a key to start this game: $(document).keydown(?)
- Only call nextSequence() on the first keypress, so in order to not to call it again you shoud track if the game start or not
 $(document).keydown(function () {
    if(!gameStart) { 
    $("#level-title").text( "Level "+level)   
    nextSequence();    
    gameStart= true; 
    } 
})

3.Excute nextSecuence function if game hasn't started yet
function nextSequence() {
  userClickedPattern= [];
  let randomNum = Math.floor(Math.random()*4);
  let randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour); 
   level++;
   $("#level-title").text("Level "+level);     
 }
 - Level 1...
 - One of colour buttons is chosen randomly and display fadeIn and fadeOut effect on the button and also play sound accordingly 
 - randomChoseColour is pushed to gamePattern
- function playSound(colour) {
    let sound = new Audio("./sounds/"+colour+".mp3")
    sound.play(); 
 }

4. User choose one of colour buttons
- $(".btn").click (function() {
    let userChosenColour = $(this).attr("id");            
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour); 
    let lastIndex = userClickedPattern.length-1;
    checkAnswer(lastIndex);     
 });
- userChosenColor is pushed to userClickedPattern
- Check if user chooses the right color by checkAnswer function
- function checkAnswer(currentLevel) {   
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
        console.log("success");
        setTimeout(function() {
            nextSequence();            
        }, 1000)
    }
       
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },1000);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
  
- playn sound accordingly and give some animation effect by animatePress function
- function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed")
    }, 100)

5.if answer is right, keep playing and you can see level is going up
- if the radomChosenColour is red : gamePattern = ["red"], level 1, userClickedPattern is empty
- if user choose red: userClickedPattern =["red"] checkAnswer(0) => it satisfies two if statements => nextSequence is called after 1 second (
- if radomChosenColur is green: gamePattern = ["red","green"], level 2, userClickedPattern is empty,
- if user choose red: userClickedPattern =["red"] checkAnswer(0) => it satisfies only first f statement but nothing happens until user clicks another button.
- if user clicks green button : gamePattern= ["red", "green"] userClickedPattern["red", "green"] checkAnswer(1) => ist satifies both if statements => nextSequence is called..

6. if the answer is wrong, you can see diffent sound, effect, and text and start over by pressing any key
   function startOver(){
    level = 0;
    gamePattern =[];
    gameStart = false;
  }







 
