import { Maze } from './services/maze.js';
import { Explorer } from './services/explorer.js';
import { display } from './utilities/display-helper.js';

const maze: Maze = new Maze('Maze 1');
const explorer: Explorer = new Explorer(maze);
const container: HTMLElement | null = document.getElementById('app');
const leftButton: HTMLElement | null = document.getElementById("left");
const rightButton: HTMLElement | null = document.getElementById("right");
const forwardButton: HTMLElement | null = document.getElementById("forwards");

container?.style.setProperty('--grid-cols', maze.getNumberColumns() as unknown as string);
container?.style.setProperty('--grid-rows', maze.getNumberRows() as unknown as string);

document.addEventListener('DOMContentLoaded', function onLoad(){updateDisplay()});

leftButton?.addEventListener('click', function leftClick(){
    explorer.turnLeft();
    updateDisplay();
});

rightButton?.addEventListener('click', function leftClick(){
    explorer.turnRight();
    updateDisplay();
});

forwardButton?.addEventListener('click', function leftClick(){
    explorer.moveForwards();
    updateDisplay();
});

function updateDisplay(): void {
    if (container!=null){
        container.innerHTML = '';
        display(maze, explorer).forEach(function (element : HTMLElement) {
            container.appendChild(element).className = element.className;
        });
    }
}