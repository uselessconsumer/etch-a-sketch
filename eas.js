const gridContainer = document.querySelector('div.gridContainer');
let gridDiv;
let gridSize = 16;

//creates a div to be used as a node in the grid and scales it to fit the containers gridSize dimensions
function createGridDiv(){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.setAttribute('id', 'gridNode');
    gridDiv.style.width = `${scaleGridDiv()}px`;
    gridDiv.style.height = `${scaleGridDiv()}px`;
    gridContainer.appendChild(gridDiv);
}

//calculates the value for gridDiv's width+height
function scaleGridDiv() { return 500 / gridSize; }

//populates the container with the amount of div's needed 
function fillGrid() {
    let totalDiv = Math.pow(gridSize, 2);
    let divCount = 0;
    do {
        createGridDiv();
        ++divCount;
    } while (divCount < totalDiv);
}

fillGrid();

//creates a toggled to determine if the mouse is being held down
let toggle = false;
document.addEventListener('mousedown', () => toggle = true);
document.addEventListener('mouseup', () => toggle = false);

//selects all div's in the grid
const allGridDiv = document.querySelectorAll('.gridDiv');

allGridDiv.forEach((div) => {
    div.addEventListener('mousedown', () => div.style.backgroundColor = 'black');
    div.addEventListener('mouseover', () => {
        if (toggle === true){
            div.style.backgroundColor = 'black';
        };
    });
});

//add a select tag that allows the user to change the size of the grid depending on the selected grid size
    //starts on 8x8
    //when a new value is selected
    //update the gridsize and refresh the grid to the new size