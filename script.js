function makeGrid(size=16){
    const grid = document.querySelector('#grid');
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    let block;
    for(let i = 0; i<size**2; i++){
        block = document.createElement('div');
        block.className = 'block';
        block.addEventListener('mouseover', changeColor);
        grid.append(block);
    }
}

function changeColor(event){
    event.target.classList.add('mouseOver');
}

function clearGrid(){
    const grid = document.querySelector('#grid');
    let size = prompt('How many squares per side do you want on the new grid? Maximum of 100', "16");
    if(size>100) size = 100;
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    makeGrid(+size); //Unary + converts string to number
}

makeGrid(30);