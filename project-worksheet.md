# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Wed| Game Idea|Simpson's Trivia Game
|Day 2: Thur| Wireframes and Priority Matrix|
|Day 3: Fri| Pseudocode\actual code|
|Day 4: Sat| Basic Clickable Model |
|Day 5: Sun| Working Prototype |
|Day 6: Mon| Game Completed / Slides |
|Day 7: Tue| Project Presentations |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Priority Matrix

High priority | Styling,
Start game elements & form,
Question Elements,
Finish game elements

## MVP

- Start button with player name form
- Question prompt, displays question at top with four answer buttons,
- Player can select right or wrong answers
- Player score gets added
- Finish game tells you whether you win or lose,
- reset game button

## POST MVP

- theme song plays at beginning and end of game
#

## Wireframes

- http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122527_nhrxrl.jpg
- http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122410_v48jox.jpg
- http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122527_nhrxrl.jpg
- http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122401_gtd9k7.jpg
- http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122416_tsfdqr.jpg
- http://res.cloudinary.com/dftzmialt/image/upload/v1512673255/IMG_20171207_135912_dgmga3.jpg


## Game Components

### Landing Page
You see a landing page with a background of Springfield, in the foreground you see a grey rectangle with a simpson font that asks for a name

### Game Initialization
Same gray rectangle but as player clicks they submit their name first, and then a start game button appears.

### Playing The Game
The flow is to answer questions and click on the question they think is correct, the will be notified with a green highlighted background that they gave a correct answer and red if they gave an incorrect answer
### Winning The Game
If the player wins they see a gif of Lisa saying how easy that was and there is a restart button. If the player loses they see a gif of Ralph with a flute up his nose and a restart button.
### Game Reset
The restart button hides all the previous prompts and goes back to the player start game while resetting all values

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Styling | H | 8hrs| 8hrs | 8hrs |
| Create Start Game with input and submit| H | 2hrs| 5hrs | 8hrs |
| Create Questions | H | 10hrs| 12hrs | 20hrs |
| Create Finish with win/lose and reset | H | 4hrs| 04hrs | 4hrs |
| Figure Out Classes | H | 10hrs| 12hrs | 20hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| createStart | this will create all the elements for initial prompt that is seen on screen |
| createQuestion| This will create the question prompt with a new question and four answer choices  |
| createFinish | This will create the finish prompts using an if statement based on the score to decide whether the player wins or loses |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project.
jquery will be used to create all DOM manipulations
Classes will be used to store all the game logic  
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
