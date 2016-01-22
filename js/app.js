console.log('Hello, Dave');
//define main variables here:
var $board = $('#board'),
  slider = $('#size-slider'),
  $panel = $('#panel'),
  $timeSlider = $('#time-slider'),
  $pause = $('#pause')
  $info = $('#info'),
  board = [];

//optional/alterable
  var boardWidth = $(window).height()*3/4;
  // boardWidth = '20%'
  var boardHeight = boardWidth
  $panel.toggle()
  // $panel.css('height', boardWidth);
  // $panel.css('height', $(window).height()/5)
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
};

//stolen from stack overflow:
function split(a, n) {
    var len = a.length,out = [], i = 0;
    while (i < len) {
        var size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
    }
    return out;
}
