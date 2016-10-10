$( document ).ready(function() {
	setTimeout(function(){
	    var height = $( document ).height();
	    /*var nav_height = $( 'nav' ).height();
	    $('#canvas').css('height', height-=nav_height);*/
	    $('#loading_screen').css('height', height);
	}, 100);
});


function ready(){
	setTimeout(function(){
    	$('#loading_screen').addClass('none');
    	$('#loading_screen h2').addClass('none');
    	$('#loading_screen img').addClass('none');
    }, 2200);
}