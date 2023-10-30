import { createTile, IMazeTile } from '../models/maze-tile.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';
import { MazeValidationException } from '../exceptions/maze-validation-exception.js';
import { isEqualTo, IPosition } from '../models/position.interface.js';
import { readMaze } from '../utilities/maze-helper.js';

export class Maze {
    // @ts-ignore
    private readonly mazeName: string;
    private readonly mazeString: string;
    private readonly _maze: Array<IMazeTile>;

    constructor(mazeName: string) {
        this.mazeName = mazeName;
        this.mazeString = readMaze('');
        this._maze = this.convertToTiles(this.mazeString);
    }

    getStartPosition(): IPosition {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return { ...this._maze.find((tile) => tile.tile === TileTypeEnum.Start).position };
    }

    getTile(tilePos: IPosition): TileTypeEnum {
        const tile: IMazeTile | undefined = this._maze.find((tile) => isEqualTo(tile.position, tilePos));

        if (tile === undefined) {
            return TileTypeEnum.Wall;
        }

        if (tile.tile === TileTypeEnum.Start) {
            return TileTypeEnum.Empty;
        }

        return tile.tile;
    }

    getNumberColumns(): number {
        return Math.max(...this._maze.map((tile) => tile.position.column)) + 1;
    }

    getNumberRows(): number {
        return Math.max(...this._maze.map((tile) => tile.position.row)) + 1;
    }

    get maze(): Array<IMazeTile> {
        return this._maze;
    }

    private convertToTiles(mazeString: string): Array<IMazeTile> {
        const mazeTiles: Array<IMazeTile> = new Array<IMazeTile>();
        let row = 0;
        let column = 0;

        for (let i = 0; i < mazeString.length; i++) {
            if (mazeString[i] == '\n') {
                row++;
                column = 0;
            } else {
                mazeTiles.push(createTile(row, column, mazeString[i]));
                column++;
            }
        }

        this.validateMaze(mazeTiles);
        return mazeTiles;
    }

    private validateMaze(mazeTiles: Array<IMazeTile>): void {
        if (this.howManyOfTileType(mazeTiles, TileTypeEnum.Start) != 1) {
            throw new MazeValidationException('Maze must contain exactly one Start character');
        } else if (this.howManyOfTileType(mazeTiles, TileTypeEnum.Exit) == 0) {
            throw new MazeValidationException('Maze was missing the Exit character');
        }
    }

    private howManyOfTileType(mazeTiles: Array<IMazeTile>, tileType: TileTypeEnum): number {
        return mazeTiles.filter(({ tile }) => tile === tileType).length;
    }
}
