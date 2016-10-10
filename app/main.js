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
			new Tool('pencil', 'pencil'),
			new Tool('circle', 'circle-o'),
			new Tool('eraser', 'eraser')
		];
		this.palette_tool.init( tools );

		//Canvas
		this.canvas.init();

		console.log("Pixel studio is initiated and  ready");
	}
};
