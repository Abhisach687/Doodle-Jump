let platformArray = [];
let platformImg;

function placePlatforms() {
  platformArray = [];

  //starting platforms
  const platform = {
    img: platformImg,
    x: boardWidth / 2,
    y: boardHeight - 50,
    width: platformWidth,
    height: platformHeight,
  };

  platformArray.push(platform);

  for (let i = 0; i < 6; i++) {
    const randomX = Math.floor((Math.random() * boardWidth * 3) / 4); //(0-1) * boardWidth*3/4
    const platform = {
      img: platformImg,
      x: randomX,
      y: boardHeight - 75 * i - 150,
      width: platformWidth,
      height: platformHeight,
    };

    platformArray.push(platform);
  }
}

function newPlatform() {
  const randomX = Math.floor((Math.random() * boardWidth * 3) / 4); //(0-1) * boardWidth*3/4
  const platform = {
    img: platformImg,
    x: randomX,
    y: -platformHeight,
    width: platformWidth,
    height: platformHeight,
  };

  platformArray.push(platform);
}
