

$(function () {
  slider.slider({
    min: 10,
    max: 60,
    step: 1,
  });
  $board.css('width', boardWidth)
  $board.css('height', boardHeight)
  slider.slider({
    change: function( event, ui ) {
      createCells(ui.value)
    }
  })
  //initial state:
  slider.slider( "value", 20 )
  randomize()
}) //end onload

var Cell = function (row,column, $cell) {
  this.row=row;
  this.column=column;
  //0==dead, 1==alive
  this.status=0;
  this.$cell=$cell;
}


function createCells(number) {
  $board.empty();
  board =[]
  for (var i = 0; i < number; i++) {
    //backend:
    var row = []
    //make rows
    var $row = $('<div>');
    $row.addClass('row');
    for (var j = 0; j < number; j++) {

      //make each cell
      var $cell= $('<div>')
      $cell.addClass('cell')
      $cell.attr('row', i);
      $cell.attr('column', j)
      //0=dead, 1=alive
      $cell.attr('status', 0)
      //the -2 is twice the border pixel size
      var cellWidth = Math.floor(( boardWidth)/number )-2
      $cell.width(cellWidth)
      $cell.height(cellWidth)
      $row.append($cell)
      var cell = new Cell(i, j, $cell)
      row.push(cell)

    }
    board.push(row)
    $board.append($row)
  }
}
