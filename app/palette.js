pixel_studio.palette = {
	init_colors: function(colors){
        for (var i = 0; i < colors.length; i++){
        	var color_element = $( "#color" ).clone();
	        	color_element.css("background", colors[i].to_string());
	        	color_element.attr("title", colors[i].name);
	        	$("#palette").append(color_element);
        }
    }
}
		/*$( "li" ).click(function() {
		  var color = $( this ).css( "background-color" );
		  console.log(color);
		});*/
