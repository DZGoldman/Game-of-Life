//Intro animation stuff is in here
$(function () {
  //panel appears at the right time
  window.setTimeout(function () {
    $panel.css('opacity', 1)
    $panel.fadeIn(200, function () {

      $('#info-toggler').toggle()
      console.log('now');
      play(0.1)
    })
  },4000)

//this splits the array into n pieces (40 for now), and loads them piece by piece, so you get that sexy staggered load effect.
var pieces = split(randomArray, 40)
var counter = 0
  var intervalID = window.setInterval(function () {
    if (counter<pieces.length) {
      loadGrid(pieces[counter])
      counter++

    }else{
      //after 'GAME of LIFE' is on board, set the dead cells to their standard background color at random time
      window.setTimeout(function () {
        $('.cell').each(function (index, cell) {
        deadColor = 'grey'
        var $cell = $(cell)
        if ($cell.attr('status')==0) {
          window.setTimeout(function () {
            $cell.css('background-color', deadColor)
          },700*Math.random())

        }
      })
    },1000)
      window.clearInterval(intervalID)
    }
  }, 40);
}) // end on load


//board for the GAME OF LIFE
var gameOfLife = [
[12, 5],
[13, 5],
[14, 5],
[15, 5],
[16, 5],
[17, 5],
[20, 5],
[21, 5],
[22, 5],
[23, 5],
[24, 5],
[28, 5],
[29, 5],
[30, 5],
[31, 5],
[32, 5],
[33, 5],
[34, 5],
[37, 5],
[38, 5],
[39, 5],
[40, 5],
[12, 6],
[20, 6],
[24, 6],
[28, 6],
[31, 6],
[34, 6],
[37, 6],
[12, 7],
[20, 7],
[24, 7],
[28, 7],
[31, 7],
[34, 7],
[37, 7],
[12, 8],
[20, 8],
[24, 8],
[28, 8],
[31, 8],
[34, 8],
[37, 8],
[12, 9],
[15, 9],
[16, 9],
[17, 9],
[20, 9],
[21, 9],
[22, 9],
[23, 9],
[24, 9],
[28, 9],
[31, 9],
[34, 9],
[37, 9],
[38, 9],
[39, 9],
[12, 10],
[17, 10],
[20, 10],
[24, 10],
[28, 10],
[31, 10],
[34, 10],
[37, 10],
[12, 11],
[17, 11],
[20, 11],
[24, 11],
[28, 11],
[31, 11],
[34, 11],
[37, 11],
[12, 12],
[13, 12],
[14, 12],
[15, 12],
[16, 12],
[17, 12],
[20, 12],
[24, 12],
[28, 12],
[31, 12],
[34, 12],
[37, 12],
[38, 12],
[39, 12],
[40, 12],
[16, 18],
[17, 18],
[18, 18],
[19, 18],
[20, 18],
[24, 18],
[25, 18],
[26, 18],
[27, 18],
[28, 18],
[16, 19],
[20, 19],
[24, 19],
[16, 20],
[20, 20],
[24, 20],
[16, 21],
[20, 21],
[24, 21],
[25, 21],
[26, 21],
[27, 21],
[16, 22],
[20, 22],
[24, 22],
[16, 23],
[20, 23],
[24, 23],
[16, 24],
[20, 24],
[24, 24],
[16, 25],
[17, 25],
[18, 25],
[19, 25],
[20, 25],
[24, 25],
[12, 28],
[20, 28],
[21, 28],
[22, 28],
[25, 28],
[26, 28],
[27, 28],
[28, 28],
[29, 28],
[30, 28],
[33, 28],
[34, 28],
[35, 28],
[36, 28],
[37, 28],
[12, 29],
[21, 29],
[25, 29],
[33, 29],
[12, 30],
[21, 30],
[25, 30],
[33, 30],
[12, 31],
[21, 31],
[25, 31],
[33, 31],
[12, 32],
[21, 32],
[25, 32],
[26, 32],
[27, 32],
[28, 32],
[29, 32],
[33, 32],
[34, 32],
[35, 32],
[36, 32],
[12, 33],
[21, 33],
[25, 33],
[33, 33],
[12, 34],
[21, 34],
[25, 34],
[33, 34],
[12, 35],
[21, 35],
[25, 35],
[33, 35],
[12, 36],
[13, 36],
[14, 36],
[15, 36],
[16, 36],
[17, 36],
[20, 36],
[21, 36],
[22, 36],
[25, 36],
[33, 36],
[34, 36],
[35, 36],
[36, 36],
[37, 36]
];

var length = gameOfLife.length
var randomArray = shuffle(gameOfLife)
