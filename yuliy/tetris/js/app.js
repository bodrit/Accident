
function Application() {
    var tileSize = {x: 20, y: 20};
    var fieldSize = {x: 10, y: 20};
    var fieldPosition = {x: 50, y: 50};

    this.graphicsEngine = new GraphicsEngine(
        tileSize,
        fieldSize,
        fieldPosition
    );

    this.game = new Phaser.Game(640, 480);
    this.game.state.add('boot', bootState);
    this.game.state.add('load', loadState);
    this.game.state.add('menu', menuState);
    this.game.state.add('play', playState);
    this.game.state.start('boot');
};

var app = new Application();
