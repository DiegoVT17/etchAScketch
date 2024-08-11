const container = document.querySelector(".grid-container");
const GRIDSIZE = 500;
container.style.width = `${GRIDSIZE}px`;
container.style.height = `${GRIDSIZE}px`;

const input = document.querySelector(".input");
input.addEventListener("change", function () {
  container.innerHTML = "";
  console.log(this.value);
  createGrid(this.value);
});

function createGrid(input) {
  const squareSize = GRIDSIZE / input;

  for (let i = 0; i < input; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < input; j++) {
      const div = document.createElement("div");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.classList.add("square");

      row.appendChild(div);
    }

    container.appendChild(row);
  }
}

createGrid(input.value);
