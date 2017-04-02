
var playState = {
    preload: function() {
        //
        console.log('playState.preload');
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
        console.log('playState.create');
    },

    update: function() {
        this.fpsLabel.text = game.time.fps;
    },

    createWorld: function() {
        this.map = game.add.tilemap('map');
        this.map.addTilesetImage('tileset');
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();
        console.log(this.layer);
    }
};
