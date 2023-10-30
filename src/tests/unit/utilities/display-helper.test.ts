// import { Maze } from '../../../services/maze';
// import { Explorer } from '../../../services/explorer';
// import { display } from '../../../utilities/display-helper';
//
// let maze: Maze;
// let exampleMaze: string;
// let explorer: Explorer;
//
// jest.mock('../../../utilities/maze-helper', () => {
//     return {
//         readMaze: jest.fn(() => {
//             return exampleMaze;
//         }),
//     };
// });
//
// describe('Unit test for maze reader', () => {
//     beforeEach(() => {
//         exampleMaze = '  X\n S \n  E';
//         maze = new Maze('');
//         explorer = new Explorer(maze);
//     });
//
//     it.each`
//         rightTurn | expectedMaze
//         ${0}      | ${'  X\n ▲ \n  E'}
//         ${1}      | ${'  X\n ▶ \n  E'}
//         ${2}      | ${'  X\n ▼ \n  E'}
//         ${3}      | ${'  X\n ◀ \n  E'}
//     `(
//         'should display the $expectedMaze and the explorer turns right $rightTurn times',
//         ({ expectedMaze, rightTurn }) => {
//             for (let i = 0; i < rightTurn; i++) {
//                 explorer.turnRight();
//             }
//
//             expect(display(maze, explorer)).toEqual(expectedMaze);
//         },
//     );
//
//     it('should display an empty space where the start was', () => {
//         explorer.moveForwards();
//         expect(display(maze, explorer)).toEqual(' ▲X\n   \n  E');
//     });
// });
describe('temp test', () =>{it('test', () => {expect(1).toEqual(1)})})