import { IPosition } from './position.interface.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';
export interface IMazeTile {
    position: IPosition;
    tile: TileTypeEnum;
}
export declare function createTile(row: number, column: number, mazeCharacter: string): IMazeTile;
//# sourceMappingURL=maze-tile.d.ts.map