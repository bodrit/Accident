
function GraphicsEngine() {
    this.tileSize = {x: 20, y: 20};
    this.fieldSize = {x: 10, y: 20};
    this.fieldPosition = {x: 50, y: 50};

    this.preloadResources = function() {

        app.game.load.spritesheet(
            'tileset', 'assets/tileset.png',
            this.tileSize.x, this.tileSize.y
        );
    };

    this.startEngine = function() {
        this.field = [];

        for (var i = 0; i != this.fieldSize.y; ++i) {
            var line = [];
            for (var j = 0; j != this.fieldSize.x; ++j) {
                var cell = app.game.add.sprite(
                    this.fieldPosition.x + this.tileSize.x * j,
                    this.fieldPosition.y + this.tileSize.y * i,
                    'tileset'
                );
                cell.frame = 0;
                line.push(cell);
            }
            this.field.push(line);
        }
    }
}
