"use strict";

const tiles = document.querySelectorAll(".tile");
const width = 10;
let timerId = null;

const tetromino1 = [
  [0, 1, 2, width + 2],
  [1, width + 1, width * 2, width * 2 + 1],
  [0, width, width + 1, width + 2],
  [0, 1, width, width * 2],
];

const tetromino2 = [
  [0, 1, width + 1, width + 2],
  [1, width, width + 1, width * 2],
  [0, 1, width + 1, width + 2],
  [1, width, width + 1, width * 2],
];

const tetromino3 = [
  [1, width, width + 1, width + 2],
  [0, width, width + 1, width * 2],
  [0, 1, 2, width + 1],
  [1, width, width + 1, width * 2 + 1],
];

const tetromino4 = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
];

const tetromino5 = [
  [0, width, width * 2, width * 3],
  [0, 1, 2, 3],
  [0, width, width * 2, width * 3],
  [0, 1, 2, 3],
];

let randomNum = Math.floor(Math.random() * 5);
const tetrominoes = [
  tetromino1,
  tetromino2,
  tetromino3,
  tetromino4,
  tetromino5,
];

let currentPos = 4;
let currentRotation = 0;
let currentTetromino = tetrominoes[randomNum][currentRotation];

function draw() {
  currentTetromino.forEach((index) => {
    tiles[currentPos + index].classList.add("active");
  });
}

function undraw() {
  currentTetromino.forEach((index) => {
    tiles[currentPos + index].classList.remove("active");
  });
}

function rotate() {
  undraw();

  if (currentRotation === 3) {
    currentRotation = 0;
  } else {
    currentRotation++;
  }

  currentTetromino = tetrominoes[randomNum][currentRotation];

  draw();
}

function control(e) {
  if (e.keyCode === 38) {
    rotate();
  }
}

draw();

timerId = setInterval(() => {
  undraw();
  currentPos += width;
  draw();
}, 1000);

document.addEventListener("keyup", control);
