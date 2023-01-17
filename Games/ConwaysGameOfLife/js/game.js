let stateGame = {
    isStopped:true,
    beginning:null,
    resume:null
}

window.addEventListener("load",initialSetup);

function initialSetup(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const height = 500;
    const width = 500;
    let scale = 5;
    let cols = Math.floor(width/scale);
    let rows = Math.floor(height/scale);
    let prevGrid = randomGrid(cols,rows);

    canvas.height = height;
    canvas.width = width;
    stateGame.beginning = {initialGrid:prevGrid,scale,cols,rows,ctx,width,height}
    
    disableOrEnable();
    updateDisplay(prevGrid,scale,cols,rows,ctx,width,height);
}


/*
    Function that clear the previous grid and draw a new one.
 */
function updateDisplay(prevGrid,scale,cols,rows,ctx,w,h){ 
    const interval = setInterval(() => {
        let newGrid = grid(prevGrid,cols,rows);

        ctx.clearRect(0,0,w,h);
        canvasGrid(ctx,newGrid,scale,cols,rows);
        prevGrid = newGrid;

        if(stateGame.isStopped){
            stateGame.resume = {prevGrid,scale,cols,rows,ctx,w,h}
            clearInterval(interval)
        }
    },35)
};

/*
    Function that generates a 2D Array with 1 or 0 in random indices.
Ex:
[
[1,0,0,0,1]
[0,0,1,1,0]
[0,1,1,0,1]
[0,0,1,0,0]
[1,0,0,1,0]
]
*/
function randomGrid(cols,rows){
    let mtx = new Array;
    for(let row = 0; row < rows; row += 1){
        mtx.push([]);
        for(let col = 0; col < cols; col += 1){
            mtx[row].push(Math.floor((Math.random()*2)));
        };
    };
    return mtx;
};

/* 
    Function that receives the indices of a cell and count all the neighbors

    Ex:
    -  0 1 2 3 4
    0 [0,0,1,0,0]
    1 [0,1,1,1,0]
    2 [0,0,1,0,0]

    2DArray[1][2] have 4 neighbors 
*/
function countNeighbors(mtx,r,c,cols,rows,state){
    let sum = 0;
    if(state) sum--;
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            sum += mtx[((r+i)+rows)%rows][((c+j)+cols)%cols];
        };
    };
    return sum;
};

/*
    Function that generates a new 2D array after check the previous 2D Array using
    the Conway's game life rules.

    - Each cell with one or no neighbors dies, as if by solitude.
    - Each cell with four or more neighbors dies, as if by overpopulation.
    - Each cell with two or three neighbors survives.
    - (If the cell is death) Each cell with two or three neighbors survives.

    Ex: 
    Previous grid:           New grid:
    [                       [
    [1,0,0,0,1]              [0,0,0,1,0]
    [0,0,1,1,0]              [0,0,1,0,1]
    [0,1,1,0,1]              [0,1,0,0,0]
    [0,0,1,0,0]              [0,0,1,0,0]
    [1,0,0,1,0]              [0,0,0,0,0]
    ]                       ]
*/
function grid(mtx,cols,rows){
    let newGrid = new Array;
    for(let r = 0; r < rows; r++){
        newGrid.push([]);
        for(let c = 0; c < cols; c++){
            state = mtx[r][c];
            neighbors = countNeighbors(mtx,r,c,cols,rows,state);
            if(state == 0 && neighbors == 3) newGrid[r].push(1);
            else if(state == 1 && (neighbors == 2 || neighbors == 3)) newGrid[r].push(1);
            else newGrid[r].push(0);
        };
    };
    return newGrid;
};

/*  
    Function to draw each cell in the grid.
    if Matrix[ i ][ j ] == 1 == life (Filled Square) 
    Otherwise = Empty Space (Square not filled)
*/
function canvasGrid(ctx,mtx,scale,cols,rows){
    for(let col = 0; col < cols;col++){
        for(let row = 0; row < rows; row++){
            if(mtx[row][col] == 1){
                ctx.fillStyle = "rgba(0, 0, 0)";
                ctx.fillRect(col*scale,row*scale,scale,scale);
            }
            else {
                ctx.fillStyle = "rgba(255,255,255)";
                ctx.fillRect(col*scale,row*scale,scale,scale);
            };
        };
    };
};



// The game is stopped
function btnPlayStop(){
    let text = document.getElementById("btnPlayStop")
    let {prevGrid,scale,cols,rows,ctx,w,h} = stateGame.resume;

    if(text.innerText == 'Play'){
        stateGame.isStopped = false;
        text.innerText = 'Stop'
        updateDisplay(prevGrid,scale,cols,rows,ctx,w,h);
    }
    else{
        stateGame.isStopped = true;
        text.innerText = 'Play'
    }
    disableOrEnable()
}

// Function that resets the game to the beginning of the actual grid.
function btnReset(){
    const {initialGrid,scale,cols,rows,ctx,w,h} = stateGame.beginning;
    updateDisplay(initialGrid,scale,cols,rows,ctx,w,h);
}

// Function that change the grid to a new random grid.
function btnRandom(){
    let {initialGrid,scale,cols,rows,ctx,w,h} =  stateGame.beginning;
    stateGame.beginning = {initialGrid:randomGrid(cols,rows),scale,cols,rows,ctx,w,h};
    ({initialGrid,scale,cols,rows,ctx,w,h} =  stateGame.beginning);
    updateDisplay(initialGrid,scale,cols,rows,ctx,w,h);
}
    
    
// The reset and random buttons are disabled when the game is playing.
// The reset and random buttons are enabled when the game is stopped.
function disableOrEnable(){
    document.getElementById("btnReset").disabled = !stateGame.isStopped;
    document.getElementById("btnRandom").disabled = !stateGame.isStopped;
}
