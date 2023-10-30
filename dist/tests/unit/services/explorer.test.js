import { Maze } from '../../../services/maze';
import { Explorer } from '../../../services/explorer';
import { DirectionEnum } from '../../../enums/direction.enum';
let maze;
let mockExampleMaze;
let explorer;
jest.mock('../../../utilities/maze-helper.js', () => {
    return {
        readMaze: jest.fn(() => {
            return mockExampleMaze;
        }),
    };
});
describe('Unit test for explorer', () => {
    let consoleWarningMock;
    beforeEach(() => {
        consoleWarningMock = jest.spyOn(global.console, 'warn');
    });
    afterEach(() => {
        consoleWarningMock.mockRestore();
    });
    beforeAll(() => {
        mockExampleMaze = '  X\n S \n  E';
        maze = new Maze('');
    });
    beforeEach(() => {
        explorer = new Explorer(maze);
    });
    it('should start explorer at start tile', () => {
        expect(explorer.position).toEqual({ row: 1, column: 1 });
    });
    it('should start explorer facing north', () => {
        expect(explorer.direction).toEqual(DirectionEnum.North);
    });
    it.each `
        rightTurn | expectedDirection
        ${1}      | ${DirectionEnum.East}
        ${2}      | ${DirectionEnum.South}
        ${3}      | ${DirectionEnum.West}
        ${4}      | ${DirectionEnum.North}
    `('should be facing $expectedDirection after turning $rightTurn times', ({ expectedDirection, rightTurn }) => {
        for (let i = 0; i < rightTurn; i++) {
            explorer.turnRight();
        }
        expect(explorer.direction).toEqual(expectedDirection);
    });
    it.each `
        leftTurn | expectedDirection
        ${1}     | ${DirectionEnum.West}
        ${2}     | ${DirectionEnum.South}
        ${3}     | ${DirectionEnum.East}
        ${4}     | ${DirectionEnum.North}
    `('should be facing $expectedDirection after turning $leftTurn times', ({ expectedDirection, leftTurn }) => {
        for (let i = 0; i < leftTurn; i++) {
            explorer.turnLeft();
        }
        expect(explorer.direction).toEqual(expectedDirection);
    });
    it.each `
        rightTurn | expectedDirection      | expectedPosition
        ${0}      | ${DirectionEnum.North} | ${{ row: 0, column: 1 }}
        ${1}      | ${DirectionEnum.East}  | ${{ row: 1, column: 2 }}
        ${2}      | ${DirectionEnum.South} | ${{ row: 2, column: 1 }}
        ${3}      | ${DirectionEnum.West}  | ${{ row: 1, column: 0 }}
    `('should move forward to position $expectedPosition and facing $expectedDirection after turning $rightTurn times', ({ expectedDirection, expectedPosition, rightTurn }) => {
        for (let i = 0; i < rightTurn; i++) {
            explorer.turnRight();
        }
        explorer.moveForwards();
        expect(explorer.position).toEqual(expectedPosition);
        expect(explorer.direction).toEqual(expectedDirection);
    });
    it('should not allow explorer to walk through walls', () => {
        explorer.moveForwards();
        explorer.turnRight();
        expect(explorer.position).toEqual({ row: 0, column: 1 });
        explorer.moveForwards();
        expect(explorer.position).toEqual({ row: 0, column: 1 });
        expect(consoleWarningMock).toHaveBeenCalledTimes(1);
        expect(consoleWarningMock).toHaveBeenCalledWith('Cannot pass through walls');
    });
    it('should not allow explorer to walk off edge', () => {
        explorer.moveForwards();
        expect(explorer.position).toEqual({ row: 0, column: 1 });
        explorer.moveForwards();
        expect(explorer.position).toEqual({ row: 0, column: 1 });
        expect(consoleWarningMock).toHaveBeenCalledTimes(1);
        expect(consoleWarningMock).toHaveBeenCalledWith('Cannot pass through walls');
    });
});
//# sourceMappingURL=explorer.test.js.map