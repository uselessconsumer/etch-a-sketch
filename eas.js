//make them appear as a grid using flexbox
    //divide the containers width & height by the gridSize (will be the same number)
    //scale the gridDiv to that size


//FOR LATER:
//calculate(function) the grid size: for now just do 16 by 16
    //16 divs will span across and down
    //determine what size the divs will scale to in order to fill the gridContainer


const gridContainer = document.querySelector('div.gridContainer');
let gridDiv;
let gridSize = 16;
let gridXY = scaleGridDiv();
//creates a div to be used as a node in the grid
function createGridDiv(){
    gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.style.width = gridXY;
    gridDiv.style.height = gridXY;
    gridContainer.appendChild(gridDiv);
}


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
