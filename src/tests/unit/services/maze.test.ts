import { MazeHelper } from '../../test-helpers/maze-helper';
import { IMazeTile } from '../../../models/maze-tile';
import { MazeValidationException } from '../../../exceptions/maze-validation-exception';
import { Maze } from '../../../services/maze';
import { TileTypeEnum } from '../../../enums/tile-type.enum';

let maze: Maze;
let exampleMaze: string;

jest.mock('../../../utilities/maze-helper', () => {
    return {
        readMaze: jest.fn(() => {
            return exampleMaze;
        }),
    };
});

describe('Unit test for converting maze to tile map', () => {
    it('should return array of maze tiles', () => {
        const expectedResult: Array<IMazeTile> = MazeHelper.exampleBasicMaze();

        exampleMaze = 'SE\n X';
        const actualResult: Array<IMazeTile> = new Maze('').maze;

        expect(actualResult).toEqual(expectedResult);
    });

    it('should throw exception if invalid character', () => {
        exampleMaze = '?SE\n  X';
        expect(function () {
            new Maze('');
        }).toThrow(new MazeValidationException("Undefined Character '?' was included in the maze"));
    });

    it('should throw exception if missing exit', () => {
        exampleMaze = 'S \n X';
        expect(function () {
            new Maze('');
        }).toThrow(new MazeValidationException('Maze was missing the Exit character'));
    });

    it('should throw exception if missing start', () => {
        exampleMaze = ' E\n X';
        expect(function () {
            new Maze('');
        }).toThrow(new MazeValidationException('Maze must contain exactly one Start character'));
    });

    it('should throw exception if more than one start', () => {
        exampleMaze = ' E\n X';
        expect(function () {
            new Maze('');
        }).toThrow(new MazeValidationException('Maze must contain exactly one Start character'));
    });
});

describe('Unit test for returning what the current tile is', () => {
    beforeAll(() => {
        exampleMaze = 'SE\n X';
        maze = new Maze('');
    });

    it('should return Empty for a start space', () => {
        expect(maze.getTile({ row: 0, column: 0 })).toEqual(TileTypeEnum.Empty);
    });

    it('should return Exit for an exit space', () => {
        expect(maze.getTile({ row: 0, column: 1 })).toEqual(TileTypeEnum.Exit);
    });

    it('should return Empty for an empty space', () => {
        expect(maze.getTile({ row: 1, column: 0 })).toEqual(TileTypeEnum.Empty);
    });

    it('should return Wall for a wall space', () => {
        expect(maze.getTile({ row: 1, column: 1 })).toEqual(TileTypeEnum.Wall);
    });

    it('should return Wall for an out of bounds space', () => {
        expect(maze.getTile({ row: -1, column: 0 })).toEqual(TileTypeEnum.Wall);
    });
});

describe('Unit test for returning starting position', () => {
    beforeAll(() => {
        exampleMaze = 'SE\n X';
        maze = new Maze('');
    });

    it('should return Empty for a start space', () => {
        expect(maze.getStartPosition()).toEqual({ row: 0, column: 0 });
    });
});

describe('Unit test for returning number of rows and columns', () => {
    beforeAll(() => {
        exampleMaze = '  SE\n   X';
        maze = new Maze('');
    });

    it('should return there are 4 columns', () => {
        expect(maze.getNumberColumns()).toEqual(4);
    });

    it('should return there are 2 rows', () => {
        expect(maze.getNumberRows()).toEqual(2);
    });
});
