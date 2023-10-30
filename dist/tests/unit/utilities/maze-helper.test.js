import { readMaze } from '../../../utilities/maze-helper';
describe('Unit test for maze reader', () => {
    it('should return the file', () => {
        let expectedResult = 'SE\n X';
        let actualResult = readMaze('');
        expect(actualResult).toEqual(expectedResult);
    });
});
//# sourceMappingURL=maze-helper.test.js.map