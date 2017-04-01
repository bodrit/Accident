
var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(
            game.width/2, 150,
            'loading...',
            { font: '30px Arial', fill: '#00ff00' }
        );
        loadingLabel.anchor.setTo(0.5, 0.5);

        var progressBar = game.add.sprite(
            game.width/2, 200,
            'progressBar'
        );
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
    },

    create: function() {
        game.state.start('menu');
    }
};
