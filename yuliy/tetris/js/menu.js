
var menuState = {
    create: function() {
        var text = game.device.desktop
            ? 'press the up arrow key to start'
            : 'touch the screen to start';
        var startLabel = game.add.text(
            game.width/2, game.height - 80,
            text,
            { font: '25px Arial', fill: '#000000' }
        );
        startLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(startLabel)
            .to({angle: -5}, 500)
            .to({angle: 5}, 1000)
            .to({angle: 0}, 500)
            .loop()
            .start();

        //
        //game.input.keyboard
        //    .addKey(Phaser.Keyboard.UP)
        //    .onDown.add(this.startGame, this);
        this.startGame();

        if (!game.device.desktop) {
            game.input.onDown.add(this.startGame, this);
        }
    },

    startGame: function() {
        game.state.start('play');
    }
};
