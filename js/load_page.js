$( document ).ready(function() {
    var height = $( document ).height();
    var nav_height = $( 'nav' ).height();
    $('#loading_screen').css('height', height);
    $('#zone_dessin').css('height', height-=nav_height);
});


function ready(){
	setTimeout(function(){
    	$('#loading_screen').addClass('none');
    	$('#loading_screen h2').addClass('none');
    	$('#loading_screen img').addClass('none');
    }, 1800);
}