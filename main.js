$(document).ready(()=> {
  let questionArr = {
    question:'What is homer\'s catchphrase?',
    choices : ['Doh', 'yes', 'maybe', 'i donno'],
    rightAnswer: 'Doh'
  };
  let $grabDiv = $(".answer");
  let $choose = questionArr.choices;
  $grabDiv.each(function(i){
   let btn = $("<button/>");
   console.log('working1');
   btn.attr({
     "id": i,
     "class": "button answer-button"});
     console.log('working2');
   $($grabDiv).append(btn);
   console.log('working3');
  });
console.log(questionArr[1].length)
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

    function createQuestion(){
      let changeQ = questionArr.question;
      $("#question").html(changeQ);
      let choices = questionArr.choices;
      }
  createQuestion();
  // class Game {
  //   constructor() {
  //    this.players = [];
  //    // this method needs to be bound as it's called as a callback on .click()
  //    this.createPlayers = this.createPlayers.bind(this)
  //   }
  //   init(){
  //     $('#submit').click(this.createPlayers)
  //   }
  //   createPlayers(){
  //     let name = $('#name-input').val()
  //     this.players.push(new Player(name))
  //     $('.players').append('<div>' + this.players[this.players.length-1].name + '</div>')
  //     $('.players').show();
  //     $('.hide-button').show();
  //     $('legend').hide();
  //     $('#submit').hide();
  //     $('#name-input').hide();
  //
  //   }
  // }
  // class Player {
  //   constructor(name) {
  //     this.name = name;
  //     this.position = 0;
  //     this.won = false;
  //   }
  //   move() {
  //   }
  // }
  // //end of game Class
  // //calling game class
  // let game = new Game()
  // //initializing Game class to activate event listener to create player
  // game.init()

  //$('#start-game').click(createQuestion);

  // class Questions {
  // constructor(question, rightAnswer, choices, correct ){
  //   this.question = question,
  //   this.rightAnswer = rightAnswer,
  //   this.choices = [],
  //   // this.difficulty = 'high',
  //   this.correct = false;
  //   }
  // isCorrect() {
  //   this.correct = true;
  // }
    // createQuestion(){
    // let q = $('#question');
    // let a = $('#answer-button');
    // console.log('create Question Working')
    // }

  //  }
  // end of question class
  // Shows question and answers
  // let q1 = new Questions("What is Homer's catchphrase?", "D'oh",["Eat My Shorts","Aye Caramba", "That's Illogical","D'oh"]),
  // const quest = new Questions()


//creates new choice button
//let $createQuestion = $('div').addClass('answer').append(`<button class='button'>Say what!? </button>`);
//let $newQuestion = $('question-wrapper');

// qqqq.addClass('question') = $('div').addClass('answer').append(`<button class='button'>Say what!? </button>`);


    //   for (var i = 0; i < choices.length; i++) {
    //     let newChoice = $('#ans')
    //     let $choice = $(this[i]);
    //     $choice[i].appendTo('')
    //
    // }


  //quest.createQuestion();
  // let question = [
  //     new Questions("What is Homer's catchphrase?", "D'oh",["Eat My Shorts","Aye Caramba", "That's Illogical"]),
  //     new Questions("Who is Bart's nemesis?", "Sideshow Bob",["Sideshow Mel","Bumblebee Man", "Nelson Muntz"]),
  //     new Questions("What is the cause of and solution to all of life's problems according to Homer?", "Beer",["Pretzels","Doughnuts", "Marge"])
  // ];


  //changes text of #question
   // let $changeQuestion = $('#question');
   //  $changeQuestion.text('new text');

  // for(i=0;i<answer.length;i++){
  //    let random = Math.floor(Math.random() * 4)
  // }
//   $("#question").click(function(){
//
//   }
 // $changeQuestion.innerHTML('new question');




 // $('#question').show();
  //css('display','block');



});

 // classes

//  class Game {
//   constructor(startGame, questionPrompt, finishGame, restart){
//     this.startGame = startGame;
//     this.questionPrompt = questionPrompt;
//     this.finishGame = finishGame;
//     this.restart = restart;
//   }
//    startGame() {
//     body.onload()
//     }
//   }


//    class Questions {
//   constructor(question, rightAnswer, wrongAnswer, correct ){
//     this.question = question,
//     this.rightAnswer = rightAnswer,
//     this.wrongAnswer = wrongAnswer,
//     // this.difficulty = 'high',
//     this.correct = false;
//     }

//   isCorrect() {
//     this.correct = true;

//   }
//     }
//   let question = [
//       new Questions("What is Homer's catchphrase?", "D'oh",["Eat My Shorts","Aye Caramba", "That's Illogical"]),
//       new Questions("Who is Bart's nemesis?", "Sideshow Bob",["Sideshow Mel","Bumblebee Man", "Nelson Muntz"]),
//       new Questions("What is the cause of and solution to all of life's problems according to Homer?", "Beer",["Pretzels","Doughnuts", "Marge"])
//   ];
