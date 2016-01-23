//This file has general variables and helper functions that get used throughout the app

//define main variables here:
var $board = $('#board'),
  slider = $('#size-slider'),
  $panel = $('#panel'),
  $timeSlider = $('#time-slider'),
  $pause = $('#pause')
  $info = $('#info'),
  board = [];

//optional/alterable variables, in one convenient place
var boardWidth = $(window).height()*3/4;
var boardHeight = boardWidth
  //don't ask:
$panel.toggle()
var liveColor = 'blue'
var deadColor = 'black';

//Helper functions:
//Loop through a 2D array:
function twoDLoop(twoDArray, fn){
  twoDArray.forEach(function(row){
    row.forEach(function(col){
        fn(col);
    })
  })
};

//scramble an array, stolen from the web:
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

//split array into n parts, stolen from the web:
function split(a, n) {
    var len = a.length,out = [], i = 0;
    while (i < len) {
        var size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
    }
    return out;
}
