//Main functions for the game are in this file

$(function () {
  //add click events to the board; mousedown and mouse up are split so you can hold a click when coloring the board
  var holdingMouse = false
  //toggle cell on click
  $board.mousedown(function (e) {
    console.log('you just clicked');
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
//keep track of whether or not the game is currently running
var running = false
//play the game, takes timing as input
function play(step) {
  if (!running) {
    blinker()
    intervalID = window.setInterval(function () {
      updateBoard()
    }, step*1000);
    running = true
  }
}
//make pause button blink when game is running:
var blinkerID
function blinker() {
  blinkerID=window.setInterval(function () {
    $pause.css('background-color', 'red')
    window.setTimeout(function () {
      $pause.css('background-color', 'white')
    },100)
  }, 1000)
}

//pause simulation
function pause() {
  window.clearInterval(blinkerID)
  window.clearInterval(intervalID);
  running= false
}

//activates when slider moves:
function changeTempo(newTempo) {
  pause()
  play(newTempo)
}


//toggle live/dead for a cell - function given to cell objects
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

//This produces an array of the relative indices of cells around a cell...or something. It gets used in live neighbor count
var allIndices=[];
[-1,0,1].forEach(function (column) {
  [-1,0,1].forEach(function (row) {
    if( !(column==0 & row==0 ) ){
      allIndices.push([column, row])
    }
  })
})

//returns the live neighbors of a cell
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


//put random arrangement on the board
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

//update by one step - used primarily in play(). This is where the actual rules are implemented; could easily turn this into some other cellular automaton by altering this, if you were so inclined.
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
  //Next three lines, now commented out, turn off the simulation when it is static. As it is now, the simulation just keeps running, so if it's all static, you can still mess with it by clicking.
  // if (toBeToggled.length==0) {
  //   pause()
  // }
  var count= liveCellCount()
  $('#live-cell-count').text(count)
  return count
}

//clear the board
function clear() {
  pause();
  twoDLoop(board,function (cell) {
    if (cell.status==1) {
      cell.toggle()
    }
  })
  $('#live-cell-count').text(0)
}

//count live cells on the board
function liveCellCount() {
  liveCells = 0
  twoDLoop(board, function (cell) {
    if (cell.status==1) {
      liveCells++
    }
  })
  return liveCells
}
