// make a grid	
	function makeGrid() {	
	const table = $("#pixel_canvas");
    let rows = $("#input_height").val();
    let columns = $("#input_width").val();
 
	table.children().remove();
    
    for (let i = 0; i < rows; i++) {
        table.append("<tr></tr>");
		for (let j = 0; j < columns; j++) {
            table.children().last().append("<td></td>");     
		}
	}
};

//initialize the grid - calling the function
$(document).ready(function() {	
    $('#sizePicker').on('submit', function(buildGrid) {
        makeGrid();
        buildGrid.preventDefault();
    });
}); 

// pick or delete a color
$("#pixel_canvas").on('click', 'td', function() {
        let colorCell = $('#colorPicker').val();
        if ($(this).attr('bgcolor') !== colorCell){
		$(this).attr('bgcolor', colorCell);
        } else {
        $(this).attr('bgcolor', '');		
		}
    });

// Limit grid size. Prevent input of other values, change number color warning for min/max and invalid values,
/*function validateRowInput(){
    if ($("#input_height").val() < 1){
        $("#input_height").val(1);
    } else if ($("#input_height").val() > 25){
        $("#input_height").val(25);
    }
}

function validateColumnInput(){
    if ($("#input_width").val() < 1){
        $("#input_width").val(1);
    } else if ($("#input_width").val() > 50){
        $("#input_width").val(50);
    }
}

validateRowInput();
validateColumnInput();*/