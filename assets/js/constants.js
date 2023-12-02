/** Width of the game board */
const boardWidth = 360;
/** Height of the game board */
const boardHeight = 576;

/** Width of the doodler character */
const doodlerWidth = 46;
/** Height of the doodler character */
const doodlerHeight = 46;
/** Initial horizontal position of the doodler character */
let doodlerX = boardWidth / 2 - doodlerWidth / 2;
/** Initial vertical position of the doodler character */
let doodlerY = (boardHeight * 7) / 8 - doodlerHeight;

/** Horizontal velocity of the doodler character */
let velocityX = 0;
/** Vertical velocity of the doodler character */
let velocityY = 0; //doodler jump speed
/** Starting vertical velocity of the doodler character */
const initialVelocityY = -8; //starting velocity Y
/** Gravity affecting the doodler character */
const gravity = 0.4;

/** Width of the platforms */
const platformWidth = 60;
/** Height of the platforms */
const platformHeight = 18;
