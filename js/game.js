//toggle live/dead on click
//set interval function, runs game. with each iteration, checks neighbors of all cells

$(function () {

  //toggle cell on click
  $board.click(function (e) {
    var clickedCell =$(e.toElement)
    var column = clickedCell.attr('column')
    var row = clickedCell.attr('row')
    board[row][column].toggle()
  })

}) // end on load

function play() {
}

//toggle live/dead for a cell
Cell.prototype.toggle = function () {
  switch (this.status) {
    case 0:
      this.status=1;
      this.$cell.attr('status', 1);
      this.$cell.css('background-color', liveColor)
      break;
    case 1:
      this.status=0;
      this.$cell.attr('status', 0);
      this.$cell.css('background-color', deadColor)
      break
  }
}

var allIndices=[];
[-1,0,1].forEach(function (column) {
  [-1,0,1].forEach(function (row) {
    if( !(column==0 & row==0 ) ){
      allIndices.push([column, row])
    }
  })
})

Cell.prototype.liveNeighborCount = function () {
  var liveNeighbors = 0
  var column = this.column
  var row = this.row
  allIndices.forEach(function (pair) {
    var newColumn = column+pair[0]
    var newRow = row+pair[1]
    if (((newColumn)>=0) & ((newRow)>=0) & ((newColumn)<board.length) & ((newRow)<board.length) ) {
      var neighbor = board[newRow][newColumn];
      if (neighbor.status==1 ) {
        liveNeighbors++
      }
    }
  })
  return liveNeighbors
}



function randomize() {
  twoDLoop(board, function (cell) {
    if (Math.random()>0.8) {
      cell.toggle()
    }
  })
}

function updateBoard() {
  var toBeToggled = [];

  twoDLoop(board, function (cell) {
    switch (cell.status) {
      case 1:
        var liveNeighbors = cell.liveNeighborCount();
        if (liveNeighbors<2 || liveNeighbors>3) {
          toBeToggled.push(cell)
        }
        break;
      case 0:
        var liveNeighbors = cell.liveNeighborCount();
        if (liveNeighbors==3) {
          toBeToggled.push(cell)
        }
        break
    }
  })
  toBeToggled.forEach(function (cell) {
    cell.toggle()
  })
}
