$(document).ready(() => {

  class Game {
    constructor() {
      this.players = [];
      // this method needs to be bound as it's called as a callback on .click()
      // this.question = [];
      // this.qs = qs;
      // this.choices = choices;
      //this.discard = [];
      this.counter = 0;
      this.currentRightAnswer = [];
      //  this.choices = choices;
      this.createPlayers = this.createPlayers.bind(this)
      this.startGame = this.startGame.bind(this)
      this.checkAnswer = this.checkAnswer.bind(this)
      // this.checkAnswer = this.checkAnswer.bind(this)
      // this.createQuestion = this.createQuestion.bind(this)
    }
    init() {
      // Player Submits Name
      $('#submit').click(this.createPlayers)
      // Player Starts Game
      $('#start-game').click(this.startGame)
      // choosing answers
      $('.answer-button').click(this.checkAnswer);
      // $('.correct-answer').click(this.rightAnswer)
      $('.wrong-answer').click(this.wrongAnswer)
      //next button
      $('#next').click(this.nextQuestion)
      $('#finish').click(this.calculateScore)
      $('#restart-1').click(this.restartOne)
      // $('#answer-wrapper').click(this.rightAnswer);

      $('#button1').click(this.rightAnswer);
    }
    createPlayers() {
      let name = $('#name-input').val()
      this.players.push(new Player(name))
      $('.players').append('<div>' + this.players[this.players.length - 1].name + '</div>')
      $('.players').show();
      $('.hide-button').show();
      $('legend').hide();
      $('#submit').hide();
      $('#name-input').hide();
    }


    startGame() {
      $('#start').hide();
      $('#question-wrapper').show();
      this.newQuestion();
}

    newQuestion(){
      let randomize = Math.trunc(Math.random() * 7);
      let answers = $('.answer-button');
      let rightAnswer= qs[randomize].rightAnswer;
      let newQuest = qs[randomize].question;
      // let currentRightAnswer = this.currentRightAnswer;
// console.log(this);
this.currentRightAnswer.push(rightAnswer)
    // console.log(this.currentRightAnswer);
      $("#question-box").text(newQuest);
    for (let i = 0; i < qs[randomize].choices.length; i++) {
    $(answers[i]).text(qs[randomize].choices[i])
    }
}
    // changing this to a chooseAnswer method
    // rightAnswer() {
    //   $('#button1').css('background-color', 'green');
    //   $('#next').show();
    //   // console.log(this);
    // }
    checkAnswer() {
      let currentTarget = $(event.currentTarget).text()
      let rightAnswer = this.currentRightAnswer[0]
      // console.log('checkAnswer called');
      // console.log($(this).text())
      // console.log("the correct answer is " + this.currentRightAnswer);
      if (currentTarget == rightAnswer) {
        $(event.currentTarget).css('background-color', 'green');
        this.counter++;
        $('#next').show();
        nextQuestion();
      }else{
        $(event.currentTarget).css('background-color', 'red');
          $('#next').show();
          nextQuestion();
      }
    }

    nextQuestion(){
      this.newQuestion();
        $('#next').hide();
    }



    wrongAnswer(){

    }
    // nextQuestion() {
    //   $('#question-2').show();
    //   $('#question-1').hide();
    //   $('#next-2').hide();
    //   $('.correct-answer').css('background-color', 'yellow');
    //   $('.wrong-answer').css('background-color', 'yellow');
    // }

isClicked(){

}


    calculateScore() {
      $('#question-3').hide();
      $('#finish-win').show();
    }

    restart() {
      $('#finish-win').hide();
      $('#finish-lose').hide();
      $('#start').show();
      $('.correct-answer').css('background-color', 'yellow');
      $('.wrong-answer').css('background-color', 'yellow');
      this.counter = 0;
    }

  } //end of Game Class

  class Player {
    constructor(name) {
      this.name = name;
      this.won = false;
    }
  }
  class Question {

    constructor(question, rightAnswer, choices) {
      this.question = question;
      this.rightAnswer = rightAnswer;
      this.choices = choices;
      this.correct = false;
  //this.checkAnswer = this.checkAnswer.bind(this)
    }
init(){
  // $('.answer-button').click(this.checkAnswer);
}

    // checkAnswer() {
    //   console.log('checkAnswer called');
    //   console.log($(this).text())
    //   console.log("the correct answer is " + this.rightAnswer);
    //   if ($(this).text() == this.rightAnswer) {
    //     console.log('right answer clicked')
    //   }
    // }

    isCorrect() {
      this.correct = true;

    }
  }
  let qs = [
    new Question("What is Homer's catchphrase?", "D'oh", ["D'oh", "Eat My Shorts", "Aye Caramba", "That's Illogical"], false),

    new Question("Who is Bart's nemesis?", "Sideshow Bob", ["Sideshow Bob", "Sideshow Mel", "Bumblebee Man", "Nelson Muntz"], false),

    new Question("What is the cause of and solution to all of life's problems according to Homer?", "Beer", ["Beer", "Pretzels", "Doughnuts", "Marge"], false),

    new Question("Who are the Simpson's annoying, neighbors?", "The Flander's", ["The Flander's", "The Van Houtens", "The Hibbert's", "Principal Skinner and his mother"], false),

    new Question("Name the composer of the Simpson's Theme Song", "Danny Elfman", ["Danny Elfman", "John Williams", "Hans Zimmer", "None of the above"], false),

    new Question("What is Homer's name in the Arabic version of The Simpson's?", "Omar Shamshoom", ["Omar Shamshoom", "Homer Simpson", "Omar Simpson", "Homer Shamshoom"], false),

    new Question("What is the presumed real name of Bumblebee Man? ", "Pedro", ["Pedro", "Lloyd", "Juan", "Jeff"]),

  //  new Question("What is Homer's catchphrase?", "D'oh", ["Eat My Shorts", "Aye Caramba", "That's Illogical"])
  ];

  //calling game class
  const game = new Game()
  //initializing Game class to activate event listener to create player
const question = new Question()
  game.init()
  question.init()

  // console.log(question.rightAnswer);
  //let score = 0;
  // $('start-game').on( 'click', function() {
  // console.log( "click" );
  // });



  // const qs = [{ question, [choices],false }]
  // let q = this.question[this.counter];
  // $('#q').html(q.q)
  // q.choices.each(d,i)=>{
  //   $('#c[i]').html(d)
  //   this.counter ++;
  // }

});
