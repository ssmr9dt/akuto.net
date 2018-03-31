/* global Phaser */
/* global Akutonet */
(function(){

    const $stage = document.getElementById("stage");
    var physicalScreenWidth = window.screen.width * window.devicePixelRatio;
    var physicalScreenHeight = window.screen.height * window.devicePixelRatio;
    const w = physicalScreenWidth;//1080;
    const h = physicalScreenHeight;//1920;
    const game = new Phaser.Game(w, h, Phaser.AUTO, $stage);
    
    game.state.add("Boot", Akutonet.Boot);
    game.state.add("Game", Akutonet.Game);
    
    game.state.start("Boot");
    
    Akutonet.game = game;

})();