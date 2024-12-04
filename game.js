const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let keys = {};
let taskMessage = { message: "" };

// Handle keyboard input
window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePlayer(keys); // Update player movement and animation
  checkTasks(player, taskMessage); // Check for task interactions

  drawPlayer(ctx); // Draw the animated player
  drawTasks(ctx); // Draw the tasks

  // Display task messages
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(taskMessage.message, 20, 20);

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();