import { createTile } from '../models/maze-tile.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';
import { MazeValidationException } from '../exceptions/maze-validation-exception.js';
import { isEqualTo } from '../models/position.interface.js';
import { readMaze } from '../utilities/maze-helper.js';
export class Maze {
    constructor(mazeName) {
        this.mazeName = mazeName;
        this.mazeString = readMaze('');
        this._maze = this.convertToTiles(this.mazeString);
    }
    getStartPosition() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Object.assign({}, this._maze.find((tile) => tile.tile === TileTypeEnum.Start).position);
    }
    getTile(tilePos) {
        const tile = this._maze.find((tile) => isEqualTo(tile.position, tilePos));
        if (tile === undefined) {
            return TileTypeEnum.Wall;
        }
        if (tile.tile === TileTypeEnum.Start) {
            return TileTypeEnum.Empty;
        }
        return tile.tile;
    }
    getNumberColumns() {
        return Math.max(...this._maze.map((tile) => tile.position.column)) + 1;
    }
    getNumberRows() {
        return Math.max(...this._maze.map((tile) => tile.position.row)) + 1;
    }
    get maze() {
        return this._maze;
    }
    convertToTiles(mazeString) {
        const mazeTiles = new Array();
        let row = 0;
        let column = 0;
        for (let i = 0; i < mazeString.length; i++) {
            if (mazeString[i] == '\n') {
                row++;
                column = 0;
            }
            else {
                mazeTiles.push(createTile(row, column, mazeString[i]));
                column++;
            }
        }
        this.validateMaze(mazeTiles);
        return mazeTiles;
    }
    validateMaze(mazeTiles) {
        if (this.howManyOfTileType(mazeTiles, TileTypeEnum.Start) != 1) {
            throw new MazeValidationException('Maze must contain exactly one Start character');
        }
        else if (this.howManyOfTileType(mazeTiles, TileTypeEnum.Exit) == 0) {
            throw new MazeValidationException('Maze was missing the Exit character');
        }
    }
    howManyOfTileType(mazeTiles, tileType) {
        return mazeTiles.filter(({ tile }) => tile === tileType).length;
    }
}
//# sourceMappingURL=maze.js.map