function Particle(x, y, firework) {
  // Variables
  this.firework = firework;
  this.lifespan = 255;
  this.c = 255;
  this.sat = 255;
  this.bri = 255;
  this.pos = createVector(x, y);
  if (this.firework) 
    this.vel = createVector(0, random(-18, -12));
  else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 25));
    this.sat = random(255);
    this.bri = random(255);
  }
  this.acc = createVector(0, 0); 
  
  // Functions
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= random(-1, 6);
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.show = function() {
    if (!this.firework) {
      stroke(this.c, this.sat, this.bri, this.lifespan);
      var sWeight = map(this.lifespan, 0, 255, 5, 16);
      strokeWeight(sWeight);
      point(this.pos.x, this.pos.y);
    }
    else { 
      fill(255);
      noStroke();
      ellipse(this.pos.x, this.pos.y, 4, 4);
    }
  }
  
  this.isAlive = function() {
    if (lifetime <= 0) return false;
    return true;
  }
}
