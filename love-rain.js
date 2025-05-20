const canvas = document.getElementById("loveRain");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 8 + 2;
  this.speed = Math.random() * 1 + 0.5;
  this.alpha = Math.random() * 0.5 + 0.5;
}

Heart.prototype.draw = function () {
  ctx.globalAlpha = this.alpha;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(
    this.x - this.size / 2, this.y - this.size / 2,
    this.x - this.size, this.y + this.size / 3,
    this.x, this.y + this.size
  );
  ctx.bezierCurveTo(
    this.x + this.size, this.y + this.size / 3,
    this.x + this.size / 2, this.y - this.size / 2,
    this.x, this.y
  );
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.globalAlpha = 1;
};

Heart.prototype.update = function () {
  this.y += this.speed;
  if (this.y > canvas.height) {
    this.y = 0;
    this.x = Math.random() * canvas.width;
  }
};

function createHearts(num) {
  for (let i = 0; i < num; i++) {
    hearts.push(new Heart());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].update();
    hearts[i].draw();
  }
  requestAnimationFrame(animate);
}

createHearts(100);
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
