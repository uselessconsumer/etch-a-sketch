//make them appear as a grid using flexbox
    //divide the containers width & height by the gridSize (will be the same number)
    //scale the gridDiv to that size


const gridContainer = document.querySelector('div.gridContainer');
let gridDiv;
let gridSize = 16;

//creates a div to be used as a node in the grid and scales it to fit the containers gridSize dimensions
function createGridDiv(){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.style.width = scaleGridDiv();
    gridDiv.style.height = scaleGridDiv();
    gridContainer.appendChild(gridDiv);
}

//calculates the value for gridDiv's width+height
function scaleGridDiv() {
    return 500 / gridSize + 'px';
}

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
