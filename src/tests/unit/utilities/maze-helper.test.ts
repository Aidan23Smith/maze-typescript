import { readMaze } from '../../../utilities/maze-helper';

describe('Unit test for maze reader', () => {
    it('should return the file', () => {
        let expectedResult = 'SE\n X';

        let actualResult: string = readMaze('');

        expect(actualResult).toEqual(expectedResult);
    });
});
