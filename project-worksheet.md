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

#theme song plays at beginning and end of game
#

## Wireframes

## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122527_nhrxrl.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122410_v48jox.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122527_nhrxrl.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122401_gtd9k7.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512672886/IMG_20171207_122416_tsfdqr.jpg
## http://res.cloudinary.com/dftzmialt/image/upload/v1512673255/IMG_20171207_135912_dgmga3.jpg


## Game Components

### Landing Page
What will a player see when they start your game?

### Game Initialization
What will a player see when the game is started? 

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

### Game Reset
How will the user restart the game once it has been completed.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Styling | H | 8hrs| 5hrs | 5hrs |
| Create Start Game with input and submit| H | 2hrs| 0hrs | 0hrs |
| Create Questions | H | 10hrs| 12hrs | 12hrs |
| Create Finish with win/lose and reset | H | 4hrs| 0hrs | 0hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| createStart | this will create all the elements for initial prompt that is seen on screen |
| createQuestion| This will create the question prompt with a new question and four answer choices  |
| createFinish | This will create the finish prompts using an if statment based on the score to decide whether the player wins or loses |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
jquery will be used to create all DOM manipulations
Classes will be used to store all the game logic and 
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
