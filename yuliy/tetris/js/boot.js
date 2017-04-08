
var bootState = {
    preload: function() {
        app.game.load.image('progressBar', 'assets/progressBar.png');
    },

    create: function() {
        app.game.stage.backgroundColor = '#000000';
        app.game.renderer.renderSession.roundPixels = true;

        if (!app.game.device.desktop) {
            app.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            app.game.scale.setMinMax(
                app.game.width/2, app.game.height/2,
                app.game.width*2, app.game.height*2
            );
            app.game.scale.pageAlignHorizontally = true;
            app.game.scale.pageAlignVertically = true;

            document.body.style.backgroundColor = '#000000';
        }

        app.game.state.start('load');
    }
};
