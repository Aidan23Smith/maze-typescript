import { IPosition } from '../models/position.interface.js';
import { Maze } from './maze.js';
import { DirectionEnum } from '../enums/direction.enum.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';

export class Explorer {
    private readonly maze: Maze;
    private _position: IPosition;
    private _direction: DirectionEnum;

    constructor(maze: Maze) {
        this.maze = maze;
        this._position = this.maze.getStartPosition();
        this._direction = DirectionEnum.North;
    }

    get position(): IPosition {
        return this._position;
    }

    get direction(): DirectionEnum {
        return this._direction;
    }

    turnRight(): void {
        this._direction = (this._direction + 1) % 4;
    }

    turnLeft(): void {
        this._direction = (this._direction + 3) % 4;
    }

    moveForwards(): void {
        const newPosition: IPosition = { ...this._position };

        switch (this._direction) {
            case DirectionEnum.North:
                newPosition.row--;
                break;
            case DirectionEnum.East:
                newPosition.column++;
                break;
            case DirectionEnum.South:
                newPosition.row++;
                break;
            case DirectionEnum.West:
                newPosition.column--;
                break;
        }

        if (this.isValidMove(newPosition)) {
            this._position = newPosition;
        } else {
            console.warn('Cannot pass through walls');
        }
    }

    private isValidMove(position: IPosition): boolean {
        return this.maze.getTile(position) !== TileTypeEnum.Wall;
    }
}
