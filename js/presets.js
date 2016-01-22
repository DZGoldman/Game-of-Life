//saves a board as an array of points for the Creator (me), not the user
function save() {
  var liveCells = [];
  twoDLoop(board, function (cell) {
    if (cell.status) {
      liveCells.push( [cell.column, cell.row] )
      console.log([cell.column, cell.row]);
    }
  })
  return liveCells
}

function loadGrid(coordinates) {
  coordinates.forEach(function (coordinate) {
    var column = coordinate[0]
    var row = coordinate[1]
    var cell = board[row][column]

    cell.status=1;
    cell.$cell.attr('status', 1);
    cell.$cell.animate({
      backgroundColor: liveColor
    }, 200 );
  })
}

var gliderGun = [
[30, 4],
[28, 5],
[30, 5],
[18, 6],
[19, 6],
[26, 6],
[27, 6],
[40, 6],
[41, 6],
[17, 7],
[21, 7],
[26, 7],
[27, 7],
[40, 7],
[41, 7],
[6, 8],
[7, 8],
[16, 8],
[22, 8],
[26, 8],
[27, 8],
[6, 9],
[7, 9],
[16, 9],
[20, 9],
[22, 9],
[23, 9],
[28, 9],
[30, 9],
[16, 10],
[22, 10],
[30, 10],
[17, 11],
[21, 11],
[18, 12],
[19, 12]
]
var gliders= [
[72, 0],
[3, 1],
[72, 1],
[74, 1],
[1, 2],
[3, 2],
[72, 2],
[73, 2],
[2, 3],
[3, 3],
[71, 71],
[72, 71],
[1, 72],
[2, 72],
[71, 72],
[73, 72],
[0, 73],
[2, 73],
[71, 73],
[2, 74]
]
