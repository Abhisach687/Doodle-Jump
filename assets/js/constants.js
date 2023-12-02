let boardWidth = 360;
let boardHeight = 576;

let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;

let velocityX = 0;
let velocityY = 0; //doodler jump speed
let initialVelocityY = -6; //starting velocity Y
let gravity = 0.2;

let platformWidth = 60;
let platformHeight = 18;
