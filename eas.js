//create a 16x16 grid
//

//put these divs into .gridContainer
//make them appear as a grid using flexbox


//FOR LATER:
//calculate(function) the grid size: for now just do 16 by 16
    //16 divs will span across and down
    //determine what size the divs will scale to in order to fill the gridContainer


const gridContainer = document.querySelector('div.gridContainer');

//creates a div to be used as a node in the grid
function createGridDiv(){
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridContainer.appendChild(gridDiv);
}

fillGrid();



function fillGrid(gridSize) {
    gridSize = 3;
    let totalDiv = Math.pow(gridSize, 2);
    let divCount = 0;
    do {
        createGridDiv();
        ++divCount;
    } while (divCount < totalDiv);
}


