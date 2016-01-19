console.log('Hello, Dave');
//define main variables here:
var $board = $('#board'),
  slider = $('#slider'),
  board = [];

//optional/alterable
  var boardWidth = $(window).height()*2/3;
  // boardWidth = '20%'
  var boardHeight = $(window).height()*2/3;
    // boardHeight = '20%'
  var liveColor = 'blue'
  var deadColor = 'transparent';

  var twoDLoop= function(twoDArray, fn){
    twoDArray.forEach(function(row){
      row.forEach(function(col){
        fn(col);
      })
      })
    };

    function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
