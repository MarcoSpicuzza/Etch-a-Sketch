const container = document.querySelector(".container");
const btnSize = document.createElement("button");
const btnColor = document.createElement("button");
const btnShader = document.createElement("button");
const btnRGB = document.createElement("button");
const btnEraser = document.createElement("button");
const btnClear = document.createElement("button");
const btnContainer = document.querySelector(".btnContainer");

window.onload = () => {
  const squares = container.querySelectorAll(".square");
  squares.forEach(square => square.addEventListener("mouseover", () =>{
    square.style.background = "black";
  }));
}

function createGrid(column, row){
    for(let i = 0; i < (column * row); i++){
        const square = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(square).classList.add("square");
    }
}
createGrid(16, 16);

// // BTN SIZE
function size(){
  btnSize.textContent = "SIZE";
  btnSize.addEventListener("click", () =>{
    let user = window.prompt("Insert size of the grid");
    if(user === null || user < 1){
      let user = window.prompt("Insert size of the grid");
      clear();
      createGrid(16,16);
      color();
      shader();
      RGB();
    }
    else{
      clear();
      createGrid(user,user);
      color();
      shader();
      RGB();
    }
  });
  btnContainer.appendChild(btnSize).classList.add("btn");
}
size();

// // BTN COLOR

function color(){
  const squares = container.querySelectorAll(".square");
  btnColor.textContent = "COLOR";
  btnColor.addEventListener("click", () => {
    squares.forEach(square => square.addEventListener("mouseover", () => {
      square.style.background = "black";
    }));
  });

  btnContainer.appendChild(btnColor).classList.add("btn");
}
color();

// // BTN SHADER

function shader(){
    const squares = container.querySelectorAll(".square");
    btnShader.textContent = "SHADER";
    btnShader.addEventListener("click", () => {
      squares.forEach(square => square.addEventListener("mouseover", () => {
        let randomNumber = Math.floor(Math.random() * 255);
        square.style.background = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`;
      }));
    });

    btnContainer.appendChild(btnShader).classList.add("btn");
}
shader();

// // BTN RGB

function RGB(){
  const squares = container.querySelectorAll(".square");
  btnRGB.textContent = "RGB";
  btnRGB.addEventListener("click", () => {
    squares.forEach(square => square.addEventListener("mouseover", () => {
      let R = Math.floor(Math.random() * 255);
      let G = Math.floor(Math.random() * 255);
      let B = Math.floor(Math.random() * 255);
      square.style.background = `rgb(${R}, ${G}, ${B})`;
    }));
  });

  btnContainer.appendChild(btnRGB).classList.add("btn");
}
RGB();

// // BTN CLEAR

function clear(){
  const squares = container.querySelectorAll(".square");
  squares.forEach(square => square.remove());
}

// // BACKGROUND
function backgroundAnimation(){
  colors = ["red", "blue", "green"];
  const section = document.querySelector(".section");
  const span = document.createElement("span");
  
  let size = Math.random() * 50;

  span.style.width = 10 + size + "px";
  span.style.height = 10 + size + "px";

  span.style.borderRadius = `${size}%`;
  span.style.left = Math.random() * innerWidth + "px";
  span.style.top = Math.random() * innerHeight + "px";

  const backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  span.style.background = backgroundColor;
  section.appendChild(span);

  setTimeout(() => {span.remove()}, 5000);
}

setInterval(backgroundAnimation, 500);