const gridContainer = document.querySelector(".gridContainer");
const columns = 16;
const rows = 16;

function createGrid(){
    for(let i = 0; i < (columns * rows); i++){
        const square = document.createElement("div");
        gridContainer.appendChild(square);

        gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        // giving class name so can apply css
        square.className = "square";
        square.addEventListener("mouseover", function(){
            square.style.background = "black";
        });

        square.addEventListener("touchmove", function(){
            square.style.background = "black";
          });
    }
}
createGrid();