export default class Gooey {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.colours = ["#0096ff"];
    this.balls = [];
    this.nextBall = 1;

    this.rescale();
    window.addEventListener("resize", this.rescale.bind(this));

    this.render();
  }

  rescale() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;

    this.origin = { x: 0, y: 0 };
    const wW = window.innerWidth;
    let cW = this.canvas.width;

    // calculate the container width, using the breakpoints
    cW = wW >= 600 ? 540 : cW;
    cW = wW >= 900 ? 720 : cW;
    cW = wW >= 1200 ? 960 : cW;
    cW = wW >= 1800 ? 1000 : cW;

    this.rMult = wW >= 600 ? 1.5 : 1;
    this.pMult = wW >= 600 ? 0.333 : 0;

    const oX = (wW - cW) / 2 + (cW * 5) / 6 - wW * this.pMult;
    const oY = this.canvas.clientHeight / 2;

    this.size = { x: this.canvas.width, y: this.canvas.height };
    this.origin = { x: oX, y: oY };
  }

  render() {
    this.rescale();
    this.ctx.clearRect(0, 0, this.size.x, this.size.y);
    if (this.nextBall <= 0) {
      const randCol = this.colours[randomInt(this.colours.length - 1)];
      this.balls.push(new Ball(this.origin, randCol, this.rMult));
      this.nextBall = 5 + Math.floor(Math.random() * 5);
    }
    this.nextBall--;

    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      b.render(this.ctx, this.rMult);
      b.update();
    }

    this.ctx.fillStyle = "#ffde00";
    this.ctx.beginPath();
    this.ctx.arc(
      this.origin.x,
      this.origin.y,
      40 * this.rMult,
      Math.PI * 2,
      false
    );
    this.ctx.fill();

    for (let i = 0; i < this.balls.length; i++) {
      if (this.balls[i].dead(this.size)) {
        this.balls.splice(i, 1);
        --i;
      }
    }

    window.requestAnimationFrame(this.render.bind(this));
  }

  unhook() {
    window.removeEventListener("resize", this.rescale);
  }
}

class Ball {
  constructor(origin, color, mult) {
    this.x = origin.x;
    this.y = origin.y;
    this.a = Math.PI * 2 * Math.random();
    this.v = {};
    this.v.x = (1.2 + Math.random() * 0.3) * Math.cos(this.a);
    this.v.y = (1.2 + Math.random() * 0.3) * Math.sin(this.a);
    this.c = color;
    this.r = (9 + Math.random() * 5) * mult;
  }

  update() {
    this.x += this.v.x;
    this.y += this.v.y;
    this.r -= 0.02;
  }

  render(ctx) {
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();
  }

  dead(size) {
    return (
      this.x + this.r < 0 ||
      this.x - this.r > size.x ||
      this.y + this.r < 0 ||
      this.y - this.r > size.y ||
      this.r <= 0
    );
  }
}

function randomInt(v) {
  return Math.floor(Math.random() * (v + 1));
}
