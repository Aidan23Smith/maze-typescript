import { Maze } from '../services/maze.js';
import { Explorer } from '../services/explorer.js';
import { IPosition, isEqualTo } from '../models/position.interface.js';
import { TileTypeEnum } from "../enums/tile-type.enum.js";

export function display(maze: Maze, explorer: Explorer): HTMLElement[] {
    let display : HTMLElement[] = [];
    const explorerPos: IPosition = explorer.position;

    for (let row = 0; row < maze.getNumberRows(); row++) {
        for (let column = 0; column < maze.getNumberRows(); column++) {
            let currentTile: HTMLElement = document.createElement("div")
            if (isEqualTo({ row: row, column: column }, explorerPos)) {
                currentTile.textContent = ['▲', '▶', '▼', '◀'][explorer.direction];
                currentTile.className = "Empty grid";
            } else {
                const tile = maze.getTile({ row: row, column: column });
                const index = Object.values(TileTypeEnum).indexOf(tile);
                currentTile.className = Object.keys(TileTypeEnum)[index] as string + " grid";
            }
            display.push(currentTile);
        }
    }

    return display;
}
