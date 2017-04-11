
function GraphicsEngine(
    tileSize,
    fieldSize,
    fieldPosition
) {
    this._tileSize = {x: 20, y: 20};
    this._fieldSize = {x: 10, y: 20};
    this._fieldPosition = {x: 50, y: 50};

    this.onPreload = function() {
        app.game.load.spritesheet(
            'brick', 'assets/brick.png',
            this._tileSize.x, this._tileSize.y
        );
    };

    this.onCreate = function() {
        this._field = [];

        for (var i = 0; i != this._fieldSize.y; ++i) {
            var line = [];
            for (var j = 0; j != this._fieldSize.x; ++j) {
                var cell = app.game.add.sprite(
                    this._fieldPosition.x + this._tileSize.x * j,
                    this._fieldPosition.y + this._tileSize.y * i,
                    'brick'
                );
                cell.frame = 0;
                line.push(cell);
            }
            this._field.push(line);
        }
    }

    this.updateField = function(fieldData) {
        for (var i = 0; i != this._fieldSize.y; ++i) {
            for (var j = 0; j != this._fieldSize.x; ++j) {
                //this._field[i][j].frame = fieldData[i][j];
                this._field[i][j].frame = app.game.rnd.pick([0, 1]);
            }
        }
    }
}
