let color = "black";  // default to black
let size = 100;  // default to 10x10


/** Draws on canvas if hovered. */
function draw() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach(g => {
        g.addEventListener('mouseover', () => g.style.backgroundColor = color);
      });
}


/** Creates a new grid based on the specified `size`. */
function createGrid() {
    const canvas = document.querySelector("#canvas");

    // remove all child nodes first
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    // then add new children based on the specified size
    for (var i = 0; i < size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.flexBasis = (100 / Math.sqrt(size)) + "%";
        canvas.appendChild(grid);
    }
    console.log(size);
}


function buttonOnClick() {
    const colorBtn = document.querySelector(".change-color");
    const gridBtn = document.querySelector(".change-grid");

    colorBtn.addEventListener("click", changeColor);
    gridBtn.addEventListener("click", changeGrid);
}


function changeColor() {
    color = prompt("Insert a new color.");
}


/** `size` represents the total number of grids in a canvas. If `size` 
* is not a perfect square, it will be rounded to the nearest perfect 
* square, and its square root will be rounded to the nearest integer. 
*/
function changeGrid() {
    let newSize = prompt("Insert a new grid size. (max 100)");

    if (newSize > 100) {
        alert("too large!");
        return;
    }

    // round `size` to the nearest perfect square
    let sizeSqrt = Math.round(newSize);
    size = sizeSqrt * sizeSqrt;
    createGrid();
    draw();
}


buttonOnClick();
createGrid();
draw();
