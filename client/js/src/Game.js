Akutonet = Akutonet || {};

Akutonet.Game = function() {};

Akutonet.Game.prototype = {
    init: function(){},
    
    preload: function(){},
    
    create: function(){
        Akutonet.count = 0;
        Akutonet.text = this.add.text(
            this.world.centerX,
            this.world.centerY,
            "Clicked\n" + Akutonet.count,
            {
                font: "65px Arial",
                fill: "#ff0044",
                align: "center"
            }
        );
        
        Akutonet.text.anchor.setTo(0.5, 0.5);
    },
    
    update: function(){
        // console.log(Akutonet.count);
        this.input.onDown.addOnce(function(){
            Akutonet.count++;
            Akutonet.text.setText("Clicked\n" + Akutonet.count);
        }, this);
    },
    
    quitGame: function(){}
};