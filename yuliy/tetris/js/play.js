
var playState = {
    preload: function() {
    },

    create: function() {
        // fps
        app.game.time.advancedTiming = true;
        this.fpsLabel = app.game.add.text(
            app.game.width-50, 20, '0',
            {font: '12px Monaco', fill: '#ffffff'}
        );

        //
        app.graphicsEngine.onCreate();
    },

    update: function() {
        this.fpsLabel.text = app.game.time.fps;
        app.graphicsEngine.updateField();
    }
};
