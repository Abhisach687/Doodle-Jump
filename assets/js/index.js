/** Game board */
let board;
/** Context for drawing on the game board */
let context;

/** Image for the doodler character facing right */
let doodlerRightImg;
/** Image for the doodler character facing left */
let doodlerLeftImg;

/** Doodler character */
let doodler = {
  img: null,
  x: doodlerX,
  y: doodlerY,
  width: doodlerWidth,
  height: doodlerHeight,
};

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //used for drawing on the board

  //load images
  doodlerRightImg = new Image();
  doodlerRightImg.src = "./assets/images/doodler-right.png";
  doodler.img = doodlerRightImg;
  doodlerRightImg.onload = function () {
    context.drawImage(
      doodler.img,
      doodler.x,
      doodler.y,
      doodler.width,
      doodler.height
    );
  };

  doodlerLeftImg = new Image();
  doodlerLeftImg.src = "./assets/images/doodler-left.png";

  platformImg = new Image();
  platformImg.src = "./assets/images/platform.png";

  velocityY = initialVelocityY;
  placePlatforms();
  requestAnimationFrame(update);
  document.addEventListener("keydown", moveDoodler);
};
