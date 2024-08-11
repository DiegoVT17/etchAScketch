const container = document.querySelector(".grid-container");
const sizePara = document.querySelector(".size");
const GRIDSIZE = 500;
container.style.width = `${GRIDSIZE}px`;
container.style.height = `${GRIDSIZE}px`;
container.style.border = "1px solid black";
container.style.backgroundColor = "white";

const input = document.querySelector(".input");
input.addEventListener("change", function () {
  container.innerHTML = "";
  createGrid(this.value);
});

function createGrid(input) {
  const squareSize = GRIDSIZE / input;

  for (let i = 0; i < input; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";

    for (let j = 0; j < input; j++) {
      const div = document.createElement("div");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.style.border = "1px solid black";
      div.classList.add("square");

      row.appendChild(div);
    }

    container.appendChild(row);
  }
  sizePara.textContent = `${input} x ${input}`;
}

function blackBg() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mousemove", () => {
      square.style.backgroundColor = "black";
    });
  });
}

function randomBg() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mousemove", () => {
      const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`;
      square.style.backgroundColor = randomColor;
    });
  });
}

function clearBg() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

const blackBtn = document.querySelector(".black");
const randomBtn = document.querySelector(".random");
const clearBtn = document.querySelector(".clear");

blackBtn.addEventListener("click", blackBg);

randomBtn.addEventListener("click", randomBg);

clearBtn.addEventListener("click", clearBg);
createGrid(input.value);
