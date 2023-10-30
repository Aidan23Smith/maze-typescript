import { IPosition } from '../models/position.interface.js';
import { Maze } from './maze.js';
import { DirectionEnum } from '../enums/direction.enum.js';
export declare class Explorer {
    private readonly maze;
    private _position;
    private _direction;
    constructor(maze: Maze);
    get position(): IPosition;
    get direction(): DirectionEnum;
    turnRight(): void;
    turnLeft(): void;
    moveForwards(): void;
    private isValidMove;
}
//# sourceMappingURL=explorer.d.ts.map