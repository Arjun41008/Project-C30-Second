class Stone {
  constructor(x, y, w, h) {
    var options = {
      restitution: 0.8,
    };

    this.w = w;
    this.h = h;

    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("white");
    ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
    noStroke();
    pop();
  }
}
