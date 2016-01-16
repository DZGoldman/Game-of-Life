

$(function () {
  slider.slider({
    min: 10,
    max: 60,
    step: 1,
  });

  board.css('width', boardWidth)
  board.css('height', boardHeight)
  slider.slider({
    change: function( event, ui ) {
      createCells(ui.value)
    }
  })

  //initial state:
  slider.slider( "value", 20 )
  randomize()
}) //end onload

function createCells(number) {
  board.empty()
  for (var i = 0; i < number; i++) {
    //make rows
    var row = $('<div>');
    row.addClass('row');
    for (var j = 0; j < number; j++) {
      //make each cell
      var cell= $('<div>')
      cell.addClass('cell')
      cell.attr('row', i);
      cell.attr('column', j)
      //0=dead, 1=alive
      cell.attr('status', 0)
      //the -2 is twice the border pixel size
      var cellWidth = Math.floor(( board.width())/number )-2
      cell.width(cellWidth)
      cell.height(cellWidth)
      row.append(cell)
    }
    board.append(row)
  }
}

// $('#slider').css('background-color', 'blue')
