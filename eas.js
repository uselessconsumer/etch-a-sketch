//create an effect that changes the gridDiv colour to black when it has been clicked.
    //I can either use a class selector
    //or using JavaScript to change the divs background.


//change the bg color of the div when clicked, or when the mouse is being clicked and is dragged over a div
    //


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

//selects all divs in the grid
const allGridDiv = document.querySelectorAll('.gridDiv');
allGridDiv.forEach((div) => {
    div.addEventListener('mousedown', () => div.style.backgroundColor = 'black');
    div.addEventListener('mouseover', () => {
        if (toggle === true){
            div.style.backgroundColor = 'black';
        };
    });
});

