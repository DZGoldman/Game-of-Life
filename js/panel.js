

$(function () {

  $board.css('width', boardWidth)
  $board.css('height', boardHeight)

  slider.slider({
    min: 10,
    max: 100,
    step: 1,
  });

  slider.slider({
    change: function( event, ui ) {
      createCells(ui.value)
      $('.size-readout').text(ui.value+'x'+ui.value)
    }
  })
  slider.slider( "value", 50 )

  $timeSlider.slider({
    min: 0.01,
    max: 1,
    step: 0.01,
  });

  $timeSlider.slider({
    slide: function( event, ui ) {
      if (running) {
        changeTempo(ui.value)
      }
      $('.time-readout').text(ui.value)
    }
  })
  $timeSlider.slider( "value", 0.1 )


  //menu
  var $menu= $('#menu')
  $menu.change(function () {
    clear()
    switch (    $(this).val()) {
      case "Gliders":
        slider.slider( "option", "value", 75 )
        loadGrid(gliders)
        break;
      case "Glider Gun":
        slider.slider( "option", "value", 100 )
        $timeSlider.slider( "value", 0.01 )
        $('.time-readout').text(0.01)
        loadGrid(gliderGun)
        break;
      case "Acorn":
        slider.slider( "option", "value", 100 )
        $timeSlider.slider( "value", 0.01 )
        $('.time-readout').text(0.01)
        loadGrid(acorn)
        break;
      case "Line":
        slider.slider( "option", "value", 100 )
        $timeSlider.slider( "value", 0.01 )
        $('.time-readout').text(0.01)
        loadGrid(line)
        break;
      default:
        console.log('default');
        break
    }
  });

  // buttons
  $('#pause').click(function () {
    pause()
  })
  $('#clear').click(function () {
    clear()
  })
  $('#step').click(function () {
    updateBoard()
  })
  $('#random').click(function () {
    randomize()
  })
  $('#play').click(function () {
    play($timeSlider.slider('value'))
  })
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
  pause()
}
