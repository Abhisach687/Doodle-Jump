const boardWidth = 360;
const boardHeight = 576;

const doodlerWidth = 46;
const doodlerHeight = 46;
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;

let velocityX = 0;
let velocityY = 0; //doodler jump speed
const initialVelocityY = -8; //starting velocity Y
const gravity = 0.4;

const platformWidth = 60;
const platformHeight = 18;
