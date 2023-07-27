function main() {
    /* Main function goes here. */

    const grid = document.querySelectorAll(".grid");
    grid.forEach(g => {
        g.addEventListener('click', () => g.style.backgroundColor = "black");
      });
}


/** Creates a new grid based on the specified `size`.
 * `size` represents the total number of grids in a canvas. If `size` 
 * is not a perfect square, it will be rounded to the nearest perfect 
 * square, and its square root will be rounded to the nearest integer.
 */
function createGrid(size) {
    const canvas = document.querySelector("#canvas");

    // round `size` to the nearest perfect square
    sizeSqrt = Math.round(Math.sqrt(size));
    size = sizeSqrt * sizeSqrt;

    // remove all child nodes first
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }

    // then add new children based on the specified size
    for (var i = 0; i < size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.flexBasis = (100 / sizeSqrt) + "%";
        canvas.appendChild(grid);
    }
}

createGrid(100);
main();