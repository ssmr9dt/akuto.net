/* global Akutonet */
/* global Phaser */
Akutonet = Akutonet || {};

Akutonet.Game = function() {};

Akutonet.Game.prototype = {
  init: function(){},
  
  preload: function(){
    // this.game.load.image("sprite", "assets/phaser.png");

    // this.game.load.atlas("cards", "assets/481112813.png", "assets/481112813.json");

    // this.scale.pageAlignHorizontally = true;

    // var huesoURI = 'data:image/jpeg;base64,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';
    // this.game.load.image('hueso', huesoURI);
    // var flechaURI = 'data:image/jpeg;base64,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';
    // this.game.load.image('flecha', flechaURI);
  },

  create: function() {
      
    this.camera.flash("#000000");
  
    Akutonet.colors = ["#E27474","E08664","#CDAB51","#A5BC69","#69B27C","#5D93A7","#697CB2","#88759B","#D175B8","#939389"];
    // this.game.stage.backgroundColor = Akutonet.colors[0];
  
    const gwx = this.world.centerX;
    const gwy = this.world.centerY;
    
    const frm = this.game.add.sprite(gwx, gwy, "frame");
    frm.anchor.setTo(0.5, 0.5);
    this.game.add.tween(frm.scale).to({x:1.1, y:1.1}, 50).to({x:1, y:1}, 100).start();
    Akutonet.frm = frm;
    
    Akutonet.count = 0;
    Akutonet.lastTouchTime = this.game.time.time;
    this.game.time.events.loop(Phaser.Timer.SECOND*3, function(){
      if (this.game.time.time - Akutonet.lastTouchTime >= 3000) {
        Akutonet.tap_balloon.show();
      }
    }, this);
    
  
    // const labelScore = this.game.add.text(gwx, gwy+5, "0", { font: "Poppins", fontSize: "350px", fill: "#ffffff", fontWeight: "300" });
    const labelScore = this.game.add.text(gwx, gwy+5, "0", { font: "Graduate", fontSize: "350px", fill: "#ffffff" });
    // const labelScore = this.game.add.text(gwx, gwy+5, "0", { font: "Arial", fontSize: "350px", fill: "#ffffff", fontWeight: "300" });
    labelScore.anchor.setTo(0.5);
    Akutonet.labelScore = labelScore;
    
    
    const tapaction = function(){
      Akutonet.game.add.tween(Akutonet.frm.scale).to({x:1.1, y:1.1}, 50).to({x:1, y:1}, 100).start();
      if (Akutonet.count === 99999) {
          Akutonet.count = -1;
      }
      Akutonet.count++;
      Akutonet.labelScore.text = Akutonet.count;
      if (Akutonet.count >= 100) {
        Akutonet.labelScore.fontSize = 270;
      }
      if (Akutonet.count >= 1000) {
        Akutonet.labelScore.fontSize = 200;
      }
      if (Akutonet.count >= 10000) {
        Akutonet.labelScore.fontSize = 150;
      }
      if (Akutonet.count === 10 || Akutonet.count%100 === 0) {
        Akutonet.game.add.tween(Akutonet.labelScore.scale).to({x:1.1, y:1.1}, 50).to({x:1, y:1}, 100).start();
      }
      Akutonet.game.stage.backgroundColor = Akutonet.colors[Akutonet.count%10];

      Akutonet.lastTouchTime = Akutonet.game.time.time;
      Akutonet.tap_balloon.hide();
    };
    
    this.game.input.onTap.add(tapaction, this);
    
    if (!!this.game.device.desktop) {
      const spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      spacekey.onDown.add(tapaction ,this);
    }
    
    const tap_balloon = this.game.add.group();
    
    tap_balloon.alpha = 0;
    // tap_balloon.centerX = gwx;
    // tap_balloon.centerY = gwy - 300;
    
    const balloon = this.game.add.sprite(0,0,"balloon");
    balloon.anchor.setTo(0.5, 1.0);
    // balloon.scale.setTo(0.6, 0.6);
    tap_balloon.add(balloon);
    
    const tap_font1 = this.game.add.text(-50, -340, "TAP!", { font: "Arial", fontSize: "100px", fill: "#000000", fontWeight: "bold" });
    tap_font1.anchor.setTo(0.5, 0.5);
    tap_font1.angle = -16;
    tap_balloon.add(tap_font1);
    
    const tap_font2 = this.game.add.text(60, -180, "TAP!", { font: "Arial", fontSize: "100px", fill: "#000000", fontWeight: "bold" });
    tap_font2.anchor.setTo(0.5, 0.5);
    tap_font2.angle = 8;
    tap_balloon.add(tap_font2);
    
    tap_balloon.show = function(){
      if (this.alpha === 1) { return; }
      this.alpha = 0;
      this.centerX = gwx - 100;// + Akutonet.game.rnd.integerInRange(-100,100);
      this.centerY = gwy - 600;// - Akutonet.game.rnd.integerInRange(0,200);
      Akutonet.game.add.tween(this).to({alpha:1,y:"-10"}, 100).start();
      if (!!!this.yoyo) {
        this.yoyo = Akutonet.game.add.tween(this.scale).to({x:1.1,y:1.1}, 300, Phaser.Easing.Quintic.In, true, 0, -1, true);
      }
      // Akutonet.game.add.tween(this).to({alpha:1,y:"-10"}, 100).to({alpha:0,y:"-10"}, 100, null, null, 400).start();
    };
    
    tap_balloon.hide = function(){
      if (this.alpha === 0) { return; }
      Akutonet.game.add.tween(this).to({alpha:0,y:"-10"}, 100).start();
    };
    
    Akutonet.tap_balloon = tap_balloon;
    
    
    
    // this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // var sprite = this.game.add.sprite(
    //     this.world.centerX,
    //     this.world.centerY-this.world.centerY/2,
    //     "sprite"
    // );
    
    // sprite.inputEnabled = true;
    // sprite.input.enableDrag();
    // sprite.anchor.setTo(0.5, 0.5);
    
    // // Akutonet.sprite = sprite;
    
    
    // Akutonet.cards = [];
    
    // var suit = ["hearts01","clubs01","diamonds01","spades01"];
    
    // for (var i=0; i<4; i++) {
    //     var card = this.game.add.tileSprite(1080/4*(i+1)-1080/8,this.world.centerY+300,169,238, "cards",suit[i]);
    //     card.anchor.setTo(0.5,0.5);
    //     card.tint = 0x3f3f3f;
    //     Akutonet.cards.push(card);
    // }
    
    // for (var i=0; i<4; i++) {
        
    //     (function(game,targetSprite){
    //         var card = game.game.add.tileSprite(1080/4*(i+1)-1080/8,game.world.centerY-300,169,238, "cards",suit[i]);
    //         game.physics.arcade.enable([ card, targetSprite ], Phaser.Physics.ARCADE);
    //         card.anchor.setTo(0.5,0.5);
    //         card.inputEnabled = true;
    //         card.input.enableDrag();
    //         card.originalPosition = card.position.clone();
    //         card.events.onDragStop.add(function(currentSprite){
    //             var endSprite = targetSprite;
    //             var flg = game.physics.arcade.overlap(currentSprite, endSprite, function() {
    //                 currentSprite.input.draggable = false;
    //                 currentSprite.position.copyFrom(endSprite.position); 
    //                 currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
    //             });
            
    //             if (!flg) {
    //                 currentSprite.position.copyFrom(currentSprite.originalPosition);
    //             } else {
    //                 setTimeout(function(){
    //                     currentSprite.input.draggable = true;
    //                     currentSprite.position.copyFrom(currentSprite.originalPosition);
    //                 },1000);
    //             }
    //         },this);
    //         Akutonet.cards.push(card);
    //     })(this,Akutonet.cards[i]);
    // }
    
    
    
    // // Akutonet.cursors = this.game.input.keyboard.createCursorKeys();
  
    
    // this.hueso = this.game.add.sprite(this.game.world.centerX, this.game.world.height, 'hueso');
    // this.hueso.anchor.setTo(0.5, 1);
    // this.game.physics.arcade.enable(this.hueso);
    // this.hueso.tint= 0xff00ff;
    
    // this.huesoCopy = this.game.add.sprite(this.game.world.centerX, 0, this.hueso.key, this.hueso.frame);
    // this.huesoCopy.anchor.x = 0.5;
    // this.game.physics.arcade.enable(this.huesoCopy);
    // this.huesoCopy.inputEnabled = true;
    // this.huesoCopy.input.enableDrag();
    // this.huesoCopy.originalPosition = this.huesoCopy.position.clone();
    // this.huesoCopy.events.onDragStop.add(function(currentSprite){
    //   this.stopDrag(currentSprite, this.hueso);
    // }, this);
    
    // this.flecha = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'flecha');
    // this.flecha.anchor.set(0.5);
    
    
    // // Akutonet.count = 0;
    // // Akutonet.text = this.add.text(
    // //     this.world.centerX,
    // //     this.world.centerY,
    // //     "Clicked\n" + Akutonet.count,
    // //     {
    // //         font: "65px Arial",
    // //         fill: "#ff0044",
    // //         align: "center"
    // //     }
    // // );
    
    // // Akutonet.text.anchor.setTo(0.5, 0.5);
  },
  
  // stopDrag: function(currentSprite, endSprite){
  //     var flg = this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
  //         currentSprite.input.draggable = false;
  //         currentSprite.position.copyFrom(endSprite.position); 
  //         currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
  //     });
      
  //     if (!flg) {
  //         currentSprite.position.copyFrom(currentSprite.originalPosition);
  //     }
  // },
  
  update: function(){
    // if (Akutonet.cursors.left.isDown) {
    //     Akutonet.cards[0].tilePosition.x += 1;
    // } else if (Akutonet.cursors.right.isDown) {
    //     Akutonet.cards[0].tilePosition.x -= 1;
    // }
    
    // if (Akutonet.cursors.up.isDown) {
    //     Akutonet.cards[0].tilePosition.y += 1;
    // } else if (Akutonet.cursors.down.isDown) {
    //     Akutonet.cards[0].tilePosition.y -= 1;
    // }
    
    // console.log("posx", Akutonet.cards[0].tilePosition.x, "posy", Akutonet.cards[0].tilePosition.y);
    
        
    // this.input.onDown.addOnce(function(){
    //     Akutonet.count++;
    //     Akutonet.text.setText("Clicked\n" + Akutonet.count);
    // }, this);
    
    // this.input.onUp.addOnce(function(){
    //     Akutonet.count = 0;
    //     Akutonet.text.setText("Clicked\n" + Akutonet.count);
    // }, this);
  },
  
  render: function(){
    // this.game.debug.text("Time until event: " + this.game.time.events.duration, 32, 32);
    // this.game.debug.text("lastTouch: " + (this.game.time.time - Akutonet.lastTouchTime), 32, 64);
  },
  
  quitGame: function(){}
};