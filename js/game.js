//toggle live/dead on click
//set interval function, runs game. with each iteration, checks neighbors of all cells

$(function () {
  var holdingMouse = false
  //toggle cell on click
  $board.mousedown(function (e) {
    holdingMouse = true
    var clickedCell =$(e.toElement)
    var column = clickedCell.attr('column')
    var row = clickedCell.attr('row')
    board[row][column].toggle()
    $('#live-cell-count').text(liveCellCount())
  })

  $board.mouseup(function (e) {
    holdingMouse = false
  })

  $board.mouseover(function (e) {
    if (holdingMouse) {
      var clickedCell =$(e.toElement)
      var column = clickedCell.attr('column')
      var row = clickedCell.attr('row')
      board[row][column].toggle()
    }

  })



}) // end on load
var intervalID
var running = false
function play(step) {
  if (!running) {
    blinker()
    // typeof step=='undefined'? step=0.3: 'hi'
    intervalID = window.setInterval(function () {
      updateBoard()
    }, step*1000);
    running = true
  }

}

function pause() {
  window.clearInterval(blinkerID)
  window.clearInterval(intervalID);
  running= false
}

function changeTempo(newTempo) {

  pause()
  play(newTempo)

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
  clear()
  twoDLoop(board, function (cell) {
    if (Math.random()>0.9) {
      cell.toggle()
    }
  });
  var count= liveCellCount()
  $('#live-cell-count').text(count)
  return count
}

function updateBoard() {
  var toBeToggled = [];

  twoDLoop(board, function (cell) {
    switch (cell.status) {
      case 1:
        var liveNeighbors = cell.liveNeighborCount();
        if (liveNeighbors<2 || liveNeighbors>3) {
          toBeToggled.push(cell)
        }else{
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

  if (toBeToggled.length==0) {
    pause()
  }
  var count= liveCellCount()
  $('#live-cell-count').text(count)
  return count
}

function clear() {
  pause();
  twoDLoop(board,function (cell) {
    if (cell.status==1) {
      cell.toggle()
    }
  })
  $('#live-cell-count').text(0)
}

function liveCellCount() {
  liveCells = 0
  twoDLoop(board, function (cell) {
    if (cell.status==1) {
      liveCells++
    }
  })
  return liveCells
}

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
