console.log('Hello, Dave');



$(function () {

  slider.slider({
    min: 10,
    max: 70,
    step: 1,
    // orientation: 'vertical',
  });

  board.css('width', boardWidth)
  board.css('height', boardHeight)

  slider.slider({
    change: function( event, ui ) {
      createCells(ui.value)
    }
  })
  slider.slider( "value", 20 )


})

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
