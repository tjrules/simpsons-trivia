$(document).ready(() => {

  class Game {
    constructor() {
      this.players = [];
      this.score = 0;
      // this method needs to be bound as it's called as a callback on .click()
      this.createPlayers = this.createPlayers.bind(this)
      this.startGame = this.startGame.bind(this)

    }
    init() {
// Player Submits Name
      $('#submit').click(this.createPlayers)
// Player Starts Game
      $('#start-game').click(this.startGame)
// Action for chosen correct answer
      $('.correct-answer').click(this.rightAnswerOne)

      $('.wrong-answer').click(this.wrongAnswerOne)
      $('.correct-answer').click(this.rightAnswerTwo)
      $('.wrong-answer').click(this.wrongAnswerTwo)
      $('.correct-answer').click(this.rightAnswerThree)
      $('.wrong-answer').click(this.wrongAnswerThree)
      $('#next-1').click(this.nextQuestionOne)
      $('#next-2').click(this.nextQuestionTwo)
      $('#finish-1').click(this.finishOne)
      $('#finish-2').click(this.finishTwo)
      $('#restart-1').click(this.restartOne)
      $('#restart-2').click(this.restartTwo)

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
      $('#question-1').show();
      console.log('click');
    }
    rightAnswerOne() {
      $('.correct-answer').css('background-color', 'green');
      $('#next-1').show();
      console.log(this);
    }
    wrongAnswerOne() {
      $('.wrong-answer').css('background-color', 'red');
      $('.correct-answer').css('background-color', 'green');
      $('#next-1').show();
    }

    rightAnswerTwo() {
      $('.correct-answer').css('background-color', 'green');
      $('#next-2').show();
      console.log(this);
    }
    wrongAnswerTwo() {
      $('.wrong-answer').css('background-color', 'red');
      $('.correct-answer').css('background-color', 'green');
      $('#next-2').show();
    }

    rightAnswerThree() {
      $('.correct-answer').css('background-color', 'green');
      $('#finish-1').show();

    }
    wrongAnswerThree() {
      $('.wrong-answer').css('background-color', 'red');
      $('.correct-answer').css('background-color', 'green');
      $('#finish-3').show();
      $('#finish-2').show();
    }

    nextQuestionOne() {
      $('#question-2').show();
      $('#question-1').hide();
      $('#next-2').hide();
      $('.correct-answer').css('background-color', 'yellow');
      $('.wrong-answer').css('background-color', 'yellow');
    }
    nextQuestionTwo() {
      $('#question-3').show();
      $('#question-2').hide();
      $('.correct-answer').css('background-color', 'yellow');
      $('.wrong-answer').css('background-color', 'yellow');

    }
    finishOne() {
      $('#question-3').hide();
      $('#finish-win').show();
    }
    finishTwo() {
      $('#question-3').hide();
      $('#finish-lose').show();
    }
    restartOne() {
      $('#finish-win').hide();
      $('#finish-lose').hide();
      $('#start').show();
      $('.correct-answer').css('background-color', 'yellow');
      $('.wrong-answer').css('background-color', 'yellow');
    }
    restartTwo() {
      $('#finish-win').hide();
      $('#finish-lose').hide();
      $('#start').show();
      $('.correct-answer').css('background-color', 'yellow');
      $('.wrong-answer').css('background-color', 'yellow');
    }
  }//end of Game Class

  class Player {
    constructor(name) {
      this.name = name;
      this.won = false;
    }
  }

  //calling game class
  let game = new Game()
  //initializing Game class to activate event listener to create player
  game.init()
  //let score = 0;
  // $('start-game').on( 'click', function() {
  // console.log( "click" );
  // });






});
