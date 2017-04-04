
var playState = {
    preload: function() {
    },

    create: function() {
        // fps
        game.time.advancedTiming = true;
        this.fpsLabel = game.add.text(
            game.width-50, 20, '0',
            {font: '12px Monaco', fill: '#ffffff'}
        );

        //
        this.createWorld();
    },

    update: function() {
        this.fpsLabel.text = game.time.fps;
    },

    createWorld: function() {
        /*
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
        this.gameField = game.add.sprite(10, 10, 'gameField');
        */
        var t = game.create.texture('gameField', gf, 16, 16);
        this.gameField = game.add.sprite(10, 10, t);
    }
};
