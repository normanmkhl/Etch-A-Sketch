const gridColor = ['violet','blush','lime','turquoise','salmon'];
const gridContainer_div = document.querySelector("#grid-container");
let button_div = document.querySelector('#newgrid');

let newGrid = (size) => {
    for (i = 0; i < size * size; i++) {
        let gridItem = document.createElement("div");
        gridItem.addEventListener('mouseenter', () => {
            if (gridItem.style.background == '') {
                gridItem.style.background = gridColor[Math.floor(Math.random() * gridColor.length)]};
        });
        gridContainer_div.appendChild(gridItem).className = 'grid-item';
    }
    gridContainer_div.style.gridTemplateColumns = `repeat(${size}, 30px)`;
    gridContainer_div.style.gridTemplateRows = `repeat(${size}, 30px)`;
}

newGrid(16);

button_div.addEventListener('click', () => {
    gridContainer_div.innerHTML = '';
    const size = prompt("How many squares (empty : 0, default : 16)");
    newGrid(size);
})
