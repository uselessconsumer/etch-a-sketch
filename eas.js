//create an effect that changes the gridDiv colour to black when it has been clicked.
    //I can either use a class selector
    //or using JavaScript to change the divs background.


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

const allGridDiv = document.querySelectorAll('.gridDiv');
console.log(allGridDiv);
