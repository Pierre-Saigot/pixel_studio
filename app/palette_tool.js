    pixel_studio.palette_tool = {

    tools: [],
    tool_selected: null,

    select_tool:  function( tool ){

        this.tool_selected = tool;
        $('#tools li').removeClass('tool_selected')
                        .eq(tool.id)
                        .addClass('tool_selected');
    },

    init: function( tools ){

        this.tools = tools;

        //  création de la représentation de la palette outil
        
        let $tools = $('#tools'),
            $one    = $tools.children('li').detach();

        for(let j=0; j<tools.length; j++){

            let li      = $one.clone(),
                tool    = this.tools[j];

            tool.id     = j;

            li.html('<i class="fa fa-'+tool.icon_file+ ' fa-4x" aria-hidden="true"></i><br>')
              .attr('title', tool.name);

            $tools.append(li);
        }

        // outil par defaut
        
        this.select_tool(this.tools[0]);

        // gestion des click
        
        var self = this;

        $('#tools').on('click', 'li', function(){

            let index = $( "#tools li" ).index( this );
            self.select_tool(self.tools[index]);        
            Materialize.toast('Vous avez selectionné '+self.tools[index].name, 4000);
        });

    }
};