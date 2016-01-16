console.log('Hello, Dave');
//define main variables here:
var $board = $('#board'),
  slider = $('#slider'),
  board = [];

//optional/alterable
  var boardWidth = $(window).height()*3/4;
  // boardWidth = '20%'
  var boardHeight = $(window).height()*3/4;
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
