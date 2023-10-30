import { DirectionEnum } from '../enums/direction.enum.js';
import { TileTypeEnum } from '../enums/tile-type.enum.js';
export class Explorer {
    constructor(maze) {
        this.maze = maze;
        this._position = this.maze.getStartPosition();
        this._direction = DirectionEnum.North;
    }
    get position() {
        return this._position;
    }
    get direction() {
        return this._direction;
    }
    turnRight() {
        this._direction = (this._direction + 1) % 4;
    }
    turnLeft() {
        this._direction = (this._direction + 3) % 4;
    }
    moveForwards() {
        const newPosition = Object.assign({}, this._position);
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
        }
        else {
            console.warn('Cannot pass through walls');
        }
    }
    isValidMove(position) {
        return this.maze.getTile(position) !== TileTypeEnum.Wall;
    }
}
//# sourceMappingURL=explorer.js.map