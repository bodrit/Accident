
var loadState = {
    preload: function() {
        // loading...
        var loadingLabel = game.add.text(
            game.width/2, 150,
            'loading...',
            { font: '30px Arial', fill: '#00ff00' }
        );
        loadingLabel.anchor.setTo(0.5, 0.5);

        // progress bar
        var progressBar = game.add.sprite(
            game.width/2, 200,
            'progressBar'
        );
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

        //
        game.load.image('enemy', 'assets/enemy.png');
	var gf = [
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCACCCC',
            'CCCCCAACCC',
            'CCCCCACCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC',
            'CCCCCCCCCC'
        ];
        game.create.texture('gameField', gf, 16, 16);
    },

    create: function() {
        game.state.start('menu');
    }
};
