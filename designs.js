
var submitButton = $('input[type="submit"]');
var resetButton = $('#resettable');
var myTable = $('#pixelCanvas');

submitButton.on('click', function (event) {
    event.preventDefault();
    var gridHeight = $('#inputHeight').val();
    var gridWidth = $('#inputWeight').val();
    makeGrid(gridHeight, gridWidth);
});

//reset the table
resetButton.on('click',function() {
    event.preventDefault();
    myTable.children().remove();
});

function makeGrid(gridHeight, gridWidth) {
    myTable.empty();
    for (i = 0; i < gridHeight; i++){
        var row = document.createElement('tr');
        for (var j = 0; j < gridWidth; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
        }
    document.getElementById('pixelCanvas').appendChild(row);
    }
}

myTable.on('click', 'td', function() {
    var colorSelected = $('#colorPicker').val();
    $(this).css('background-color', colorSelected);
});

myTable.on('contextmenu','td', function() {
    event.preventDefault();
    $(this).css('background-color', 'white');
});

/*

    Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
    Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
    Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.
*/
