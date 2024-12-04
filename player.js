// Load player sprite sheet
const playerSprite = new Image();
playerSprite.src = "path/to/player-spritesheet.png"; // Update with your sprite sheet path

// Player object with animation details
const player = {
  x: 50,
  y: 50,
  width: 32, // Width of one frame
  height: 32, // Height of one frame
  speed: 5,
  frameX: 0,
  frameY: 0,
  frameCount: 4, // Total frames per animation row
  animationSpeed: 10, // Controls frame rate
  animationCounter: 0
};

// Update player movement and animation
function updatePlayer(keys) {
  if (keys["ArrowUp"]) {
    player.y -= player.speed;
    player.frameY = 3; // Row for "up" animation
  }
  if (keys["ArrowDown"]) {
    player.y += player.speed;
    player.frameY = 0; // Row for "down" animation
  }
  if (keys["ArrowLeft"]) {
    player.x -= player.speed;
    player.frameY = 1; // Row for "left" animation
  }
  if (keys["ArrowRight"]) {
    player.x += player.speed;
    player.frameY = 2; // Row for "right" animation
  }

  // Cycle through frames for smooth animation
  player.animationCounter++;
  if (player.animationCounter >= player.animationSpeed) {
    player.frameX = (player.frameX + 1) % player.frameCount; // Loop through frames
    player.animationCounter = 0;
  }
}

// Draw the animated player
function drawPlayer(ctx) {
  ctx.drawImage(
    playerSprite,
    player.frameX * player.width, // Source X (current frame)
    player.frameY * player.height, // Source Y (current row)
    player.width,
    player.height,
    player.x,
    player.y,
    player.width,
    player.height
  );
}