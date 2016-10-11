class Pencil extends Tool{
	constructor( canvas ){

		super('pencil', 'pencil');

		this.canvas = canvas;
		this.mouse_down = false;

	}

	/*Fonction permettant de dessiner*/ 
	draw(mouse_event){

        let ps       = pixel_studio,
            position = ps.canvas.screen_to_canvas(mouse_event),
            tool     = ps.palette_tool.get_selected(),
            color    = ps.palette_color.get_selected();
        ps.canvas.draw(position.x, position.y, color);
    }

	on_mousedown( mouse_event ){
		this.draw(mouse_event);
		this.mouse_down = true;
	}

	on_mousemove( mouse_event ){
		if(this.mouse_down == true){
			this.draw(mouse_event);
		}
	}

	on_mouseup( mouse_event ){
		this.mouse_down = false;
	}

}