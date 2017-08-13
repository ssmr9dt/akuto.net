(function(){
    var image;
    
    const $stage = document.getElementById("stage");
    const sceneConfig = {
        preload: function(){
            this.load.image("sonic", "assets/phaser.png");
        },
        create: function(){
            image = this.add.image(320,240,"sonic");
        },
        update: function(){
            image.x += ~~(Math.random()*4-2);
            image.y += ~~(Math.random()*4-2);
        }
    };

    const gameConfig = {
        parent: $stage,
        title: "",
        url: "",
        width: 640,
        height: 480,
        scene: sceneConfig
    };

    var game = new Phaser.Game(gameConfig);
})();