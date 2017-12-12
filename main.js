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
      this.score = 0;
      this.currentRightAnswer = [];
      //  this.choices = choices;
      this.createPlayers = this.createPlayers.bind(this)
      this.startGame = this.startGame.bind(this)
      this.checkAnswer = this.checkAnswer.bind(this)
      this.newQuestion = this.newQuestion.bind(this)
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
      $('#next').click(this.newQuestion)
      $('#finish').click(this.calculateScore)
      $('#restart').click(this.restart)
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

    newQuestion() {
      $('.answer-button').css('background-color', 'yellow');
      $('#next').hide();
      let randomize = Math.trunc(Math.random() * 12);
      let answers = $('.answer-button');
      let rightAnswer = qs[randomize].rightAnswer;
      let newQuest = qs[randomize].question;
      // let currentRightAnswer = this.currentRightAnswer;
      // console.log(this);
      console.log(this.currentRightAnswer);

      this.currentRightAnswer.shift(0);
      console.log(this.currentRightAnswer);
      this.currentRightAnswer.push(rightAnswer)
      console.log(this.currentRightAnswer);

      // console.log(this.currentRightAnswer);
      $("#question-box").text(newQuest);
      for (let i = 0; i < qs[randomize].choices.length; i++) {
        let randomizeAnswers = Math.trunc(Math.random() * 4);
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
      console.log($(event.currentTarget).text())
      // console.log("the correct answer is " + this.currentRightAnswer);
      if (currentTarget == rightAnswer) {
        $(event.currentTarget).css('background-color', 'green');
        this.counter++;
        this.score++;
        $('#next').show();

      } else {
        $(event.currentTarget).css('background-color', 'red');
        $('#next').show();
        this.counter++;
      }
      this.calculateScore();
    }

    // nextQuestion(){
    //   this.newQuestion();
    //   $('.answer-button').css('background-color', 'yellow');
    //     $('#next').hide();
    // }



    wrongAnswer() {

    }
    // nextQuestion() {
    //   $('#question-2').show();
    //   $('#question-1').hide();
    //   $('#next-2').hide();
    //   $('.correct-answer').css('background-color', 'yellow');
    //   $('.wrong-answer').css('background-color', 'yellow');
    // }

    isClicked() {

    }


    calculateScore() {
      console.log('current counter is ' + this.counter);
      console.log('current score is ' + this.score);

      if (this.counter == 5) {
        if (this.score >= 3) {
          console.log('win');
          $('#question-wrapper').hide();
          $('#finish-wrapper').show();
          $('#finish-win').show();
          this.counter = 0;
          this.score = 0;
        } else {
          console.log('lose');
          $('#question-wrapper').hide();
          $('#finish-lose').show();
          $('#finish-wrapper').show();
          this.counter = 0;
          this.score = 0;
        }
      }
    }

    restart() {
      $('#finish-wrapper').hide();
      $('#finish-win').hide();
      $('#finish-lose').hide();
      $('#start').show();
      this.counter = 0;
      this.score = 0;
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
    init() {
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
    new Question("What is Homer's catchphrase?", "D'oh", [ "Eat My Shorts", "Aye Caramba", "That's Illogical", "D'oh"], false),

    new Question("Who is Bart's nemesis?", "Sideshow Bob", [ "Sideshow Mel", "Bumblebee Man", "Sideshow Bob", "Nelson Muntz"], false),

    new Question("What is the cause of and solution to all of life's problems according to Homer?", "Beer", [ "Pretzels", "Doughnuts", "Beer", "Marge"], false),

    new Question("Who are the Simpson's annoying, neighbors?", "The Flander's", [ "The Van Houtens", "The Flander's", "The Hibbert's", "Principal Skinner and his mother"], false),

    new Question("Name the composer of the Simpson's Theme Song", "Danny Elfman", ["Danny Elfman", "John Williams", "Hans Zimmer", "Beethoven"], false),

    new Question("What is Homer's name in the Arabic version of The Simpson's?", "Omar Shamshoom", [ "Homer Simpson", "Omar Shamshoom", "Omar Simpson", "Homer Shamshoom"], false),

    new Question("What is the presumed real name of Bumblebee Man? ", "Pedro", ["Pedro", "Lloyd", "Juan", "Jeff"]),

    new Question("What is Milhouse's Mom's name? ", "Luann", ["Linda", "Luann", "Sara", "Mindy"]),

    new Question("What is Mr. Burns' catchphrase? ", "Excellent", ["Excellent", "Amazing", "Funky Fresh", "Shut Up Smithers"]),

    new Question("What picture is displayed in the Simpson living room? ", "Boat", ["Boat", "Family photo", "Grandpa", "Forest Landscape"]),

    new Question("What Season is The Simpson's TV show currently on? ", "29", ["18", "32", "28", "29"]),

    new Question("Who is the actor that plays the voice of Sideshow Bob? ", "Kelsey Grammar", ["Alec Baldwin", "Matt Damon", "Kelsey Grammar", "Samuel L. Jackson"]),


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
