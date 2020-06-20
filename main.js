const container_div = document.getElementById('container');
const row_div = document.getElementsByClassName('row');
const columns_div = document.getElementsByClassName('columns');
const button = document.getElementById('newgrid');

let makeGrid = square => {
    for(i = 0; i < square; i++){
        const row_div = document.createElement('div');
        row_div.className = 'row';
        row_div.style.width = 400/square + 'px';
        row_div.style.height = 400/square + 'px';
        container_div.appendChild(row_div);
        for(j = 0; j < square; j++){
            const columns_div = document.createElement('div');
            columns_div.className = 'columns';
            columns_div.style.width = 400/square + 'px';
            columns_div.style.height = 400/square + 'px';
            row_div.appendChild(columns_div);
        }
    }
    container_div.style.gridTemplateRows = `repeat(${square}, 1fr)`;
    container_div.style.gridTemplateRows = `repeat(${square}, 1fr)`;
    let columnId = document.getElementsByClassName('columns');
    
    for(k = 0; k < columnId.length; k++){
        columnId[k].addEventListener('mouseover', onHover);
    }
}

const defaultGrid = makeGrid(16);

function onHover() {
    this.style.backgroundColor = '#b5cdbe';
}

let newGrid = () => {
    container_div.innerHTML = '';
    square = window.prompt('How many grid?');
    makeGrid(square)
}

button.addEventListener('click', newGrid);
