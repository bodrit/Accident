
var graphicsEngine = new GraphicsEngine();

var game = new Phaser.Game(640, 480);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.start('boot');
