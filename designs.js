// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(){

	$("form").submit(function(){
	// assign the textbox inputs to variables
 	let height = $('#inputHeight').val();
 	let width = $('#inputWeight').val();
 	let tBody = $('table').append('<tbody></tbody');
 	
 	// use the width to create rows
 	for(let i = 0; i < width; i++){
 		tRow = $( "<tr></tr>" ).appendTo(tBody);
 		// use the height to create columns
 		for(let j = 0; j < height; j++){ 
 			tRow.append('<td></td>');
 		}
 	}

 	return false;
});

	$("#colorPicker").change(function(){
		//when a celll is clicked
	    $('td').click(function(){
	  		//change the background color of the cell
	        $(this).css("background-color", $('#colorPicker').val()); 		 

	    });
	  		 
	});

}


 	