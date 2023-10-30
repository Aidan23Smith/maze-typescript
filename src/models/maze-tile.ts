import { IPosition } from './position.interface.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';
import { MazeValidationException } from '../exceptions/maze-validation-exception.js';

export interface IMazeTile {
    position: IPosition;
    tile: TileTypeEnum;
}

export function createTile(row: number, column: number, mazeCharacter: string): IMazeTile {
    validateCharacter(mazeCharacter);
    return {
        position: {
            row: row,
            column: column,
        },
        tile: mazeCharacter as TileTypeEnum,
    };
}

function validateCharacter(mazeCharacter: string): void {
    if (!Object.values(TileTypeEnum).some((value) => value === mazeCharacter)) {
        throw new MazeValidationException("Undefined Character '" + mazeCharacter + "' was included in the maze");
    }
}
