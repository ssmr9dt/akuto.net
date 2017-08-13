Akutonet = Akutonet || {};

Akutonet.Create = function(){};

Akutonet.Create.prototype = {
    init: function(){},
    
    preload: function(){},
    
    create: function(){
        // this.scale.setGameSize(640, 480);

        this.state.start("Game");
    },
    
    update: function(){},
    
    quitGame: function(){}
};