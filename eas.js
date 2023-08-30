const gridContainer = document.querySelector('div.gridContainer');
let gridDiv;
let gridSize = 16;

const buttons = document.querySelectorAll('.gridBtn > button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gridSize = button.id;
        clearGrid();
        fillGrid();
    });
});

//clears all coloured div'ss leaving the grid size the same
function clearColor() {
    const toBeCleared = document.querySelectorAll('.gridDiv');

    toBeCleared.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => { clearColor() })


//populates the container with the amount of div's needed 
function fillGrid() {
    let totalDiv = Math.pow(gridSize, 2);
    let divCount = 0;
    do {
        createGridDiv();
        ++divCount;
    } while (divCount < totalDiv);
    toDraw();
}

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


//default toggles for color buttons when launched
let blackToggle = true;
let rainbowToggle = false;

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    rainbowToggle = true;
    blackToggle = false;
    toDraw();
});

const black = document.querySelector('.black');
black.addEventListener('click', () => {
    blackToggle = true;
    rainbowToggle = false;
    toDraw();
});


//creates the ability to 'draw' in the container
function toDraw() {
    //creates a toggled to determine if the mouse is being held down
    let toggle = false;
    document.addEventListener('mousedown', () => toggle = true);
    document.addEventListener('mouseup', () => toggle = false);


    function randomColor() {
        let maxVal = 0xFFFFFF;
        let randNumber = Math.random() * maxVal;
    
        randNumber = Math.floor(randNumber);
        randNumber = randNumber.toString(16);
        let randColor = randNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }

    //selects all div's in the grid
    const allGridDiv = document.querySelectorAll('.gridDiv');

    allGridDiv.forEach((div) => {
        if (blackToggle === true) {
            div.addEventListener('mousedown', () => div.style.backgroundColor = '#000000');
            div.addEventListener('mouseover', () => {
                if (toggle === true){
                    div.style.backgroundColor = '#000000';
                };
            });
        } else if (rainbowToggle === true) {
            div.addEventListener('mousedown', () => div.style.backgroundColor = randomColor());
            div.addEventListener('mouseover', () => {
                if (toggle === true){
                    div.style.backgroundColor = randomColor();
                };
            });
        }
    });
}

//removes all current div's in gridContainer
function clearGrid() {
    const toBeCleared = document.querySelectorAll('.gridDiv');
    
    toBeCleared.forEach((div) => {
        gridContainer.removeChild(div);
    });
}

fillGrid();
