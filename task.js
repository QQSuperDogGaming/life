// Load task icons
const taskIcons = {
    "Drink Water": new Image(),
    "Eat Eggs": new Image()
  };
  
  taskIcons["Drink Water"].src = "assets/sprites/water-icon.png";
  taskIcons["Eat Eggs"].src = "assets/sprites/egg-icon.png";
  
  const tasks = [
    { x: 500, y: 400, width: 30, height: 30, color: "green", completed: false, name: "Water Plants" },
    { x: 700, y: 300, width: 30, height: 30, completed: false, name: "Drink Water", icon: taskIcons["Drink Water"] },
    { x: 200, y: 500, width: 30, height: 30, completed: false, name: "Eat Eggs", icon: taskIcons["Eat Eggs"] }
  ];
  
  function drawTasks(ctx) {
    tasks.forEach((task) => {
      if (task.icon) {
        // Draw the task icon
        ctx.drawImage(task.icon, task.x, task.y, task.width, task.height);
      } else {
        // Draw a rectangle for tasks without icons
        ctx.fillStyle = task.completed ? "gray" : task.color;
        ctx.fillRect(task.x, task.y, task.width, task.height);
      }
  
      // Display task name above the task
      ctx.font = "12px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(task.name, task.x, task.y - 5);
    });
  };

  const taskCompleteSound = new Audio("assets/audio/task-complete.mp3");

function checkTasks(player, taskMessage) {
  tasks.forEach((task) => {
    if (
      !task.completed &&
      player.x < task.x + task.width &&
      player.x + player.width > task.x &&
      player.y < task.y + task.height &&
      player.y + player.height > task.y
    ) {
      task.completed = true;
      task.color = "gray";
      taskMessage.message = `Task Completed: ${task.name}`;
      taskCompleteSound.play(); // Play sound effect
    }
  });
}