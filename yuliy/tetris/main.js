var mainState = {
    preload: function() {
    },

    create: function() {
        game.stage.backgroundColor = '#3498db';
    },

    update: function() {
    }
};

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');
game.state.add('main', mainState);
game.state.start('main');