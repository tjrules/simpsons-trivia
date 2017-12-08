### images 
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122527_nhrxrl.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122410_v48jox.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122527_nhrxrl.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122401_gtd9k7.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122416_tsfdqr.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512673255/IMG_20171207_135912_dgmga3.jpg





###### Simpson's Trivia Game

##### MVP Version

#### Basic layout

### Probably a background picture of springfield with a gray box in the foreground

### Form asking single player to enter their name, then Start Game Button Puts first question on the screen.

### Question is at the top with four multiple choice answer boxes at the bottom.

### Switches to new question after question is answered.

### After all questions are answered (probably 10) new prompt pops up that tallies score and tells you whether you win or lose. Your score will tell you the character or group of characters your intelligence level best represents

##### Bonus attributes

### Timer for each question

### Multiplayer game

### Players get to choose which simpsons character they want to be

### High score based on right questions and time answered

### Randomize questions and their answers



###### Pseudocode


### Start Game
## the game will start with a background of Springfield 
## after a delay a wrapper div with a player input and submit button will be created
## player types in name
## pressing the submit/start game button will take the player to a new screen removing the current elements within the wrapper div
## player's name is stored and displayed on all remaining prompts

## delay occurs between removing start game elements and creating question prompt

### Questions
## new screen pops up with question and four answers
## question div is created along with all four answer buttons
## player chooses one of four answer boxes
## if the player chooses the correct box then the box gets a green check mark and the player gets one point
## if the player chooses the wrong answer then the box gets a red x and the correct answer is highlighted the player gets no points or maybe -1 point
## a quick delay happens
## then switches to a new question

### Finish Game
## the score from all the questions is tallied
## if the player's score is less the 7 then the player loses
## the prompt will say you lose, try again
## then a retry button can be selected 
## the button will reset all values to zero and go back to the questions page

#### Classes
### Game - 
##Constructors (Create Game, Create Start Game, Create Questions, Create Answers, Create Finish Game, Submit Form, )

### Questions
## Constructors (Easy, Medium, Hard)

### Answers
## Constructors (Right Answers, Wrong Answers)

### Images...Probably would be a bonus class

#### Methods 
### Create Board
### Start Game
### Change Question
### Answer Question
### Finish Game


####my current issues
## Do I have to create each individual element (most of my elements are different so I don't think a loop would work, except for the answer squares) that I want to display? Or can I grab a parent div and create all of the content within it? 
## Still having a hard time wrapping head around class calling?
##

 

