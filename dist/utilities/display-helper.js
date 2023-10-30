import { isEqualTo } from '../models/position.interface.js';
import { TileTypeEnum } from "../enums/tile-type.enum.js";
export function display(maze, explorer) {
    let display = [];
    const explorerPos = explorer.position;
    for (let row = 0; row < maze.getNumberRows(); row++) {
        for (let column = 0; column < maze.getNumberRows(); column++) {
            let currentTile = document.createElement("div");
            if (isEqualTo({ row: row, column: column }, explorerPos)) {
                currentTile.textContent = ['▲', '▶', '▼', '◀'][explorer.direction];
                currentTile.className = "Empty grid";
            }
            else {
                const tile = maze.getTile({ row: row, column: column });
                const index = Object.values(TileTypeEnum).indexOf(tile);
                currentTile.className = Object.keys(TileTypeEnum)[index] + " grid";
            }
            display.push(currentTile);
        }
    }
    return display;
}
//# sourceMappingURL=display-helper.js.map