import { TileTypeEnum } from '../enums/tile-type.enum.js';
import { MazeValidationException } from '../exceptions/maze-validation-exception.js';
export function createTile(row, column, mazeCharacter) {
    validateCharacter(mazeCharacter);
    return {
        position: {
            row: row,
            column: column,
        },
        tile: mazeCharacter,
    };
}
function validateCharacter(mazeCharacter) {
    if (!Object.values(TileTypeEnum).some((value) => value === mazeCharacter)) {
        throw new MazeValidationException("Undefined Character '" + mazeCharacter + "' was included in the maze");
    }
}
//# sourceMappingURL=maze-tile.js.map