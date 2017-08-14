Akutonet = {
    text: null,
    count: null
};

Akutonet.Boot = function(game){};

Akutonet.Boot.prototype = {
    init: function() {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      
      if (!!!this.game.device.desktop) {
        this.scale.forceOrientation(true, false);
        this.scale.enterIncorrectOrientation
          .add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation
          .add(this.leaveIncorrectOrientation, this);
      }
  
      this.scale.refresh();
    },
    
    preload: function(){},
    
    create: function(){
        this.state.start("Boot");
    },
    
    update: function(){},
    
    quitGame: function(){}
};