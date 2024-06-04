# SimonGame

1. Press a key to start this game: $(document).keydown(?)
- Only call nextSequence() on the first keypress, so in order to not to call it again you shoud track if the game start or not
 
2. Excute nextSecuence function if game hasn't started yet
 - Level 1...
 - One of colour buttons is chosen randomly and display fadeIn and fadeOut effect on the button and also play sound accordingly 
 - randomChoseColour is pushed to gamePattern

3. User choose one of colour buttons : $(".btn").click (function(){?})
- userChosenColor is pushed to userClickedPattern
- Check if user chooses the right color by checkAnswer function
- play sound accordingly and give some animation effect by animatePress function

4. Let's play
-  Press a key to start : $(document).keydown(function () {})
-  => if the first the key to start the game, then nextSequence is called: if(!gameStart) {  $("#level-title").text( "Level 0")  nextSequence(); gameStart= true;
-  => You can see  the level change to level 1 and the red button is chosen randomly by sound and effect and it is pushed to gamePattern container : gamePattern = ["red"]
-  => User clicks the red button: $(".btn").click (function() {?})
-  => You can see the red button has sound and animation effect and it is pushed to userClickedPattern container and checkAnswer(0) is called: userClickedPattern =["red"]
-  => The last of userClickedPattern index(0) is same as gamePattern index(0) and length is same, so nextSequence is called after 1 second
-  => You can see the level change to level 2 and the green button is chosen randomly : gamePattern =["red", "green"]
-  => User clicks the red button: userClickedPattern = ["red"] (by nextSequence function this container is empty and only red is contained now)
-  => checkAnswer (0) is called and first if is satisfied but second if is not since they have different length, so nothing happen until user clikes a button
-  => User clicks green button: userClickedPattern =["red", "green"] so both if are statisfied so nextSequence is called
-  => You can see blue is chosen randomly : leve 3,  gamePattern = ["red", "green", "blue"], userClickedPattern = []
-  => User choose red: userClickedPattern = ["red"] and checkAnswer(0) is called and first if is content but nothing happen next button is chosen by user
-  => User choose blue : userClikedPattern =["red", blue"] checkAnswer(1) is called first if is not passed (green vs blue) so goes to else statemnt and startOver is called.
 
   







 
