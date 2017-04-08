
var menuState = {
    create: function() {
        var text = app.game.device.desktop
            ? 'press the up arrow key to start'
            : 'touch the screen to start';
        var startLabel = app.game.add.text(
            app.game.width/2, app.game.height - 80,
            text,
            { font: '25px Arial', fill: '#000000' }
        );
        startLabel.anchor.setTo(0.5, 0.5);
        app.game.add.tween(startLabel)
            .to({angle: -5}, 500)
            .to({angle: 5}, 1000)
            .to({angle: 0}, 500)
            .loop()
            .start();

        //
        //app.game.input.keyboard
        //    .addKey(Phaser.Keyboard.UP)
        //    .onDown.add(this.startapp.game, this);
        this.startGame();

        if (!app.game.device.desktop) {
            app.game.input.onDown.add(this.startGame, this);
        }
    },

    startGame: function() {
        app.game.state.start('play');
    }
};
