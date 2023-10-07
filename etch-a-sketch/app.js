// Dynamically creates a 16 by 16 grid
const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}

// Changes the grid-items color when the mouse passes over them
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'black';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'black';
    });
  });