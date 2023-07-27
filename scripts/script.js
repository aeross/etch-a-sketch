function main() {
    /* Main function goes here. */
    
    const grid = document.querySelectorAll(".grid");
    grid.forEach(g => {
        g.addEventListener('click', () => g.style.backgroundColor = "black");
      });
}

main();