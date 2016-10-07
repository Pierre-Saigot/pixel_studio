pixel_studio.palette = {

	colors: [],
	color_selected: null,

	select_color:  function( color ){

		this.color_selected = color;
		$('#palette li').removeClass('selected')
						.eq(color.id)
						.addClass('selected');
	},

	init_colors: function( colors ){

		this.colors = colors;

		//  création de la représentation de la palette
		
		let $colors = $('#palette'),
			$one 	= $colors.children('li').detach();

		for(let j=0; j<colors.length; j++){

			let li 		= $one.clone(),
				color 	= this.colors[j];

			color.id 	= j;

			li.css('background-color', color.to_string())
			  .attr('title', color.name);
			$colors.append(li);
		}

		// couleur par defaut
		
		this.select_color(this.colors[0]);

		// gestion des click
		
		var self = this;

		$('#palette').on('click', 'li', function(){		
			let index = $( "#palette li" ).index( this );
			self.select_color(self.colors[index]);
		});

	}
};