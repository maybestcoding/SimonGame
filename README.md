# SimonGame

1. Basic setting
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern =[];
let gameStart = false;
let level = 0;

2. Press a key to start this game: $(document).keydown(?)
- Only call nextSequence() on the first keypress, so in order to not to call it again you shoud track if the game start or not
 
3.Excute nextSecuence function if game hasn't started yet
 - Level 1...
 - One of colour buttons is chosen randomly and display fadeIn and fadeOut effect on the button and also play sound accordingly 
 - randomChoseColour is pushed to gamePattern

4. User choose one of colour buttons : $(".btn").click (function(){?})
- userChosenColor is pushed to userClickedPattern
- Check if user chooses the right color by checkAnswer function
- playn sound accordingly and give some animation effect by animatePress function

5.if answer is right, keep playing and you can see level is going up
- if the radomChosenColour is red : gamePattern = ["red"], level 1, userClickedPattern is empty
- if user choose red: userClickedPattern =["red"] checkAnswer(0) => it satisfies two if statements => nextSequence is called after 1 second
- if radomChosenColur is green: gamePattern = ["red","green"], level 2, userClickedPattern is empty,
- if user choose red: userClickedPattern =["red"] checkAnswer(0) => it satisfies only first f statement but nothing happens until user clicks another button.
- if user clicks green button : gamePattern= ["red", "green"] userClickedPattern["red", "green"] checkAnswer(1) => ist satifies both if statements => nextSequence is called..

6. if the answer is wrong, you can see diffent sound, effect, and text and start over by pressing any key

7. Let's play
- Press a key to start : $(document).keydown(function () {})
-  => if the first the key to start the game, then nextSequence is called: if(!gameStart) {  $("#level-title").text( "Level 0")  nextSequence(); gameStart= true;
-  => You can see  the level change to level 1 and the red button is chosen randomly by sound and effect and it is pushed to gamePattern container : gamePattern = ["red"]
-  => User clicks the red button: $(".btn").click (function() {?})
-  => You can see the red button has sound and animation effect and it is pushed to userChosenPattern container and checkAnswer(0) is called:userClickednPattern =["red"]
-  => The last of userClickedPattern index is same as gamePattern index and length is same, so nextSequence is called after 1second
-  => You can see the level change to level 2 and the green button is chosen randomly : gamePattern =["red", "green"]
-  => User clicks the red button: userCLickedPattern = ["red"] (by nextSequence function this container is empty and only red is contained now)
-  => checkAnswer (0) is called and first if is satisfied but second if is not since they have different length, so nothing happen until user clikes a button
-  => User clicks green button: userClickedPattern =["red", "green"] so both if are statisfied so nextSequence is called
-  => You can see blue is chosen randomly : leve 3,  gamePattern = ["red", "green", "blue"], userClickedPattern = []
-  => User choose red: userClickedPattern = ["red"] and checkAnswer(0) is called and first if is content but nothing happen next button is chosen by user
-  => User choose blue : userClikedPattern =["red", blue"] checkAnswer(1) is called first if is not passed (green vs blue) so goes to else statemnt and startOver is called.
 
   







 
