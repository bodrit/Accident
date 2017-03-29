
var menuState = {
    create: function() {
        game.add.image(0, 0, 'background');

        // name
        var nameLabel = game.add.text(
            game.width/2, -50,
            'Super Coin Box',
            { font: '50px Arial', fill: '#ffffff' }
        );
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel)
            .to({y: 80}, 1000)
            .easing(Phaser.Easing.Bounce.Out)
            .start();

        // score
        if (!localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', 0);
        }

        if (game.global.score > localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', game.global.score);
        }

        var scoreLabel = game.add.text(
            game.width/2, game.height/2,
            'score: ' + game.global.score
                + '\nbest score: ' + localStorage.getItem('bestScore'),
            { font: '25px Arial', fill: '#ffffff', align: 'center' }
        );
        scoreLabel.anchor.setTo(0.5, 0.5);

        // start
        var startLabel = game.add.text(
            game.width/2, game.height - 80,
            'press the up arrow key to start',
            { font: '25px Arial', fill: '#ffffff' }
        );
        startLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(startLabel)
            .to({angle: -5}, 500)
            .to({angle: 5}, 1000)
            .to({angle: 0}, 500)
            .loop()
            .start();

        //
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.add(this.start, this);
    },

    start: function() {
        game.state.start('play');
    }
};
