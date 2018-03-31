/* global Phaser */
/* global Akutonet */
(function(){
    const $stage = document.getElementById("stage");
    
    const h = 1920;
    const w = (h / window.innerHeight) * window.innerWidth;
    const game = new Phaser.Game(w, h, Phaser.AUTO, $stage);
    
    game.state.add("Boot", Akutonet.Boot);
    game.state.add("Game", Akutonet.Game);
    
    game.state.start("Boot");
    
    Akutonet.game = game;

})();
