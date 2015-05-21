$(document).ready(function(){
	$('#counter').append('<p> Please select an option. </p>');
	
	$('#button_black').on('click', function(event){
		event.preventDefault();
		$('.box').remove();
	 	var input = prompt('Please choose a number between 1 and 64');
	 	if (input >= 1 && input <= 64){
	 		var box_size = $('#pad').width()/input - 2;
	 		
	 		for (var i = 1; i <= input; i++){
	 			for (var j = 1; j <= input; j++){
	 				$('#pad').append('<div class="box"/>');
	 			}
	 			$('#pad').append('<div class="row"/>');
	 		}
	 		
	 		$('.box').css('height',box_size);
	 		$('.box').css('width',box_size);
	 		
	 	}
	 	else {
	 		alert('Please try again');
	 	}
	 	
	 	$('#counter').html('<p>Grid Size: ' + input + ' x ' + input + '</p>');
	 	
	 	$('.box').on('mouseenter', function(event){
	 		$(this).addClass('black');
	 	});
	});

// Plan to work on this later //
	
	$('#button_random').on('click', function(event){
		event.preventDefault();
		$('.box').remove();
	 	var input = prompt('Please choose a number between 1 and 64');
	 	if (input >= 1 && input <= 64){
	 		var box_size = $('#pad').width()/input - 2;
	 		
	 		for (var i = 1; i <= input; i++){
	 			for (var j = 1; j <= input; j++){
	 				$('#pad').append('<div class="box"/>');
	 			}
	 			$('#pad').append('<div class="row"/>');
	 		}
	 		
	 		$('.box').css('height',box_size);
	 		$('.box').css('width',box_size);
	 		
	 	}
	 	else {
	 		alert('Please try again');
	 	}
	});
});