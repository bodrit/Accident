
function Application() {
    this.graphicsEngine = new GraphicsEngine();

    this.game = new Phaser.Game(640, 480);
    this.game.state.add('boot', bootState);
    this.game.state.add('load', loadState);
    this.game.state.add('menu', menuState);
    this.game.state.add('play', playState);
    this.game.state.start('boot');
};

var app = new Application();
