
var loadState = {
    preload: function() {
        // loading...
        var loadingLabel = app.game.add.text(
            app.game.width/2, 150,
            'loading...',
            { font: '30px Arial', fill: '#00ff00' }
        );
        loadingLabel.anchor.setTo(0.5, 0.5);

        // progress bar
        var progressBar = app.game.add.sprite(
            app.game.width/2, 200,
            'progressBar'
        );
        progressBar.anchor.setTo(0.5, 0.5);
        app.game.load.setPreloadSprite(progressBar);

        //
        app.graphicsEngine.onPreload();
    },

    create: function() {
        app.game.state.start('menu');
    }
};
