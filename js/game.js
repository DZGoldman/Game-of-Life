//toggle live/dead on click
//set interval function, runs game. with each iteration, checks neighbors of all cells

$(function () {
  //toggle cell on click
  board.click(function (e) {
    var clickedCell =$(e.toElement)
    toggle(clickedCell)
  })
})

function play() {
}

//toggle live/dead for a cell
function toggle(cell) {
  switch (+cell.attr('status')) {
    case 0:
      cell.attr('status', 1);
      cell.css('background-color', liveColor)
      break;
    case 1:
      cell.attr('status', 0);
      cell.css('background-color', deadColor)
      break
  }
}

function randomize() {
  $('.cell').each(function (index, cell) {
    if (Math.random()>0.8) {
      toggle($(cell) )
    }
  })}

function updateBoard() {
  var liveCells = $('[status=1]');
  var deadCells = $('[status=0]');
  var toBeToggled = [];
  liveCells.each(function (index, vanCell) {
    var cell = $(vanCell)
    var liveNeighbors = liveNeighborCount(cell)
    if (liveNeighbors<2 || liveNeighbors>3 ) {
      toBeToggled.push(cell)
    }
  });
  deadCells.each(function (index, vanCell) {
    var cell = $(vanCell)
    var liveNeighbors = liveNeighborCount(cell)
    if (liveNeighbors==3 ) {
      toBeToggled.push(cell)
    }
  });
  toBeToggled.forEach(function (cell) {
    toggle(cell)
  })
}

var allIndices=[];
[-1,0,1].forEach(function (column) {
  [-1,0,1].forEach(function (row) {
    if( !(column==0 & row==0 ) ){
      allIndices.push([column, row])
    }
  })
})

function liveNeighborCount(cell) {
  var liveNeighbors = 0
  var column = +cell.attr('column')
  var row = +cell.attr('row')
  allIndices.forEach(function (pair) {
    var newColumn = column+pair[0]
    var newRow = row+pair[1]
    if (((newColumn&newRow)>=0) & ((newColumn&newRow)<=8)) {
      var neighbor = $('.cell[row='+newRow+'][column='+newColumn+']' );
      if (neighbor.attr('status')==1 ) {
        liveNeighbors++
      }
    }
  })
  return liveNeighbors
}
