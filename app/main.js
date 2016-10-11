var pixel_studio = {

	init: function(){

		// couleurs de la palette
		
		let colors = [
			new Color('Noir', [22,22,22]),
            new Color('Bleu', [0,153,255]),
            new Color('Vert', [43,173,41]),
            new Color('Jaune', [255,229,0]),
            new Color('Orange', [255,140,0]),
            new Color('Red', [214,32,32])
		];
		this.palette_color.init( colors );

		//Outlis de dessin 
		let tools = [
			new Pencil(this.canvas),
			new Eraser(this.canvas)
		];
		this.palette_tool.init( tools );

		//Canvas
		//
		var height = $(window).height();
		var nav_height = $( 'nav' ).height()-3;
		this.canvas.init('zone_dessin', window.innerWidth, height-=nav_height, 100);
		$('canvas').css('margin-top', nav_height);

		console.log("Pixel studio is initiated and  ready");
	}
};
