$(document).ready(()=> {

  class Game {
    constructor() {
     this.players = [];
     // this method needs to be bound as it's called as a callback on .click()
     this.createPlayers = this.createPlayers.bind(this)
      this.startGame = this.startGame.bind(this)
    }
    init(){
      $('#submit').click(this.createPlayers)
      $('#start-game').click(this.startGame)
      $('.correct-answer').click(this.rightAnswer)
      $('.wrong-answer').click(this.wrongAnswer)
      $('#next').click(this.nextQuestion)
    }
    createPlayers(){
      let name = $('#name-input').val()
      this.players.push(new Player(name))
      $('.players').append('<div>' + this.players[this.players.length-1].name + '</div>')
      $('.players').show();
      $('.hide-button').show();
      $('legend').hide();
      $('#submit').hide();
      $('#name-input').hide();

    }
    startGame(){
$('#start').hide();
$('#question-1').show();
      console.log('click');
    }
    rightAnswer(){
$('.correct-answer').css('background-color','green');
$('#next').show();
return player.value ++;
    }
    wrongAnswer(){
      $('.wrong-answer').css('background-color','red');
      $('#next').show();
    }
    nextQuestion(){
      $('#question-2').show();
      $('#question-1').hide();
      $('#next').hide();
    }
  }
  class Player {
    constructor(name) {
      this.name = name;
      this.value = 0;
      this.won = false;
    }
    nextQuestion() {
    }
  }
  //end of game Class
  //calling game class
  let game = new Game()
  //initializing Game class to activate event listener to create player
  game.init()

  // $('start-game').on( 'click', function() {
  // console.log( "click" );
  // });






});
