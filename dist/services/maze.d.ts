import { IMazeTile } from '../models/maze-tile.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';
import { IPosition } from '../models/position.interface.js';
export declare class Maze {
    private readonly mazeName;
    private readonly mazeString;
    private readonly _maze;
    constructor(mazeName: string);
    getStartPosition(): IPosition;
    getTile(tilePos: IPosition): TileTypeEnum;
    getNumberColumns(): number;
    getNumberRows(): number;
    get maze(): Array<IMazeTile>;
    private convertToTiles;
    private validateMaze;
    private howManyOfTileType;
}
//# sourceMappingURL=maze.d.ts.map