pixel_studio.canvas = {

	screen: {
		width: 0,
		height: 0
	},

	pixel_dimension: 0,

	nb_pixel_width: 0,

	/**
	 * Préparation de la zone de dessin
	 * @param  {string} div_id         nom de la div dans leuqel sera placé le canvas
	 * @param  {number} width          largeur exact max en pixel ecran
	 * @param  {number} height         hauteur exact max en pixel ecran
	 * @param  {number} nb_pixel_width nombre de pixel en largeur
	 */
	init: function(div_id, width, height, nb_pixel_width){
		this.div_id 			= div_id;
		this.width 				= screen.width;
		this.height 			= screen.height;
		this.nb_pixel_width  	= nb_pixel_width; 



	}
}