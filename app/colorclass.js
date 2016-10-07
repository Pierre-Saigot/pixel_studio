class Color{
	/**
	 * Represente une couleur de la palette
	 * @param  {string} name  nom de la couleur
	 * @param  {array} color  les couleurs
	 */
	constructor(name , color){
				this.name 		= name;
				this.color_rgb		= color;
			}

	to_string(){
        return "rgb("+this.color_rgb.join(',')+")";
    }
}



