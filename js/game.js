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
  switch (  +cell.attr('status')) {
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

}

function updateBoard() {

}
function liveNeighborCount() {

}
