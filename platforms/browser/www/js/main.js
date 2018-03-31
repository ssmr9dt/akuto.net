(function(){

    const $stage = document.getElementById("stage");
    const w = 1080;
    const h = 1920;
    const game = new Phaser.Game(w, h, Phaser.AUTO, $stage);
    
    game.state.add("Boot", Akutonet.Boot);
    game.state.add("Game", Akutonet.Game);
    
    game.state.start("Boot");
    
    Akutonet.game = game;

})();