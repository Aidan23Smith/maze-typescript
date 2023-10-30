import { Maze } from './services/maze.js';
import { Explorer } from './services/explorer.js';
import { display } from './utilities/display-helper.js';
const maze = new Maze('Maze 1');
const explorer = new Explorer(maze);
const container = document.getElementById('app');
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const forwardButton = document.getElementById("forwards");
container === null || container === void 0 ? void 0 : container.style.setProperty('--grid-cols', maze.getNumberColumns());
container === null || container === void 0 ? void 0 : container.style.setProperty('--grid-rows', maze.getNumberRows());
document.addEventListener('DOMContentLoaded', function onLoad() { updateDisplay(); });
leftButton === null || leftButton === void 0 ? void 0 : leftButton.addEventListener('click', function leftClick() {
    explorer.turnLeft();
    updateDisplay();
});
rightButton === null || rightButton === void 0 ? void 0 : rightButton.addEventListener('click', function leftClick() {
    explorer.turnRight();
    updateDisplay();
});
forwardButton === null || forwardButton === void 0 ? void 0 : forwardButton.addEventListener('click', function leftClick() {
    explorer.moveForwards();
    updateDisplay();
});
function updateDisplay() {
    if (container != null) {
        container.innerHTML = '';
        display(maze, explorer).forEach(function (element) {
            container.appendChild(element).className = element.className;
        });
    }
}
//# sourceMappingURL=maze-app.js.map