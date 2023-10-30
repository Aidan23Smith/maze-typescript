import { TileTypeEnum } from '../../enums/tile-type.enum';
export class MazeHelper {
    static exampleBasicMaze() {
        return [
            {
                position: {
                    row: 0,
                    column: 0,
                },
                tile: TileTypeEnum.Start,
            },
            {
                position: {
                    row: 0,
                    column: 1,
                },
                tile: TileTypeEnum.Exit,
            },
            {
                position: {
                    row: 1,
                    column: 0,
                },
                tile: TileTypeEnum.Empty,
            },
            {
                position: {
                    row: 1,
                    column: 1,
                },
                tile: TileTypeEnum.Wall,
            },
        ];
    }
}
//# sourceMappingURL=maze-helper.js.map