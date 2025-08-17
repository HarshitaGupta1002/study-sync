// Script for StudyBuddy Project

// Highlight active menu item
document.querySelectorAll(".sidebar ul li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".sidebar ul li").forEach(li => li.classList.remove("active"));
    item.classList.add("active");
  });
});

// Logout button action
const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    alert("You have been logged out!");
    window.location.href = "index.html";
  });
}
// Circular Progress for Striver Sheet
document.querySelectorAll('.progress-circle').forEach(canvas => {
  let ctx = canvas.getContext('2d');
  let progress = canvas.dataset.progress;
  let radius = canvas.width / 2 - 10;
  let x = canvas.width / 2;
  let y = canvas.height / 2;

  ctx.lineWidth = 12;
  ctx.strokeStyle = "#e5e7eb";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = "#3b82f6";
  ctx.beginPath();
  ctx.arc(x, y, radius, -0.5 * Math.PI, (2 * Math.PI) * (progress / 100) - 0.5 * Math.PI);
  ctx.stroke();
});
function animateCircle(canvas, progress) {
  let ctx = canvas.getContext("2d");
  let radius = canvas.width / 2 - 10;
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let current = 0;

  function draw(current) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.lineWidth = 12;
    ctx.strokeStyle = "#e5e7eb";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Progress
    ctx.strokeStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(x, y, radius, -0.5 * Math.PI, (2 * Math.PI) * (current / 100) - 0.5 * Math.PI);
    ctx.stroke();

    // Text
    ctx.fillStyle = "#111";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(current + "%", x, y);
  }

  let interval = setInterval(() => {
    if (current >= progress) clearInterval(interval);
    else {
      current++;
      draw(current);
    }
  }, 20);
}

document.querySelectorAll("canvas").forEach(canvas => {
  let progress = parseInt(canvas.dataset.progress);
  animateCircle(canvas, progress);
});


