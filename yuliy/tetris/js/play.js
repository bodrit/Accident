
var playState = {
    preload: function() {
        //
    },

    create: function() {
        // fps
        game.time.advancedTiming = true;
        this.fpsLabel = game.add.text(
            game.width-50, 20, '0',
            {font: '12px Monaco', fill: '#ffffff'}
        );
    },

    update: function() {
        this.fpsLabel.text = game.time.fps;
    }
};
