
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
        game.load.image('tileset', 'assets/tileset.png');
        game.load.tilemap('map', 'assets/map.json',
            null, Phaser.Tilemap.TILED_JSON
        );
        console.log('loadState.preload');
    },

    create: function() {
        game.state.start('menu');
    }
};
