function Drop() {
  this.pos = createVector(random(width), random(-1000, -100));
  //this.pos = createVector(random(width), 0);
  this.vel = createVector(0, random(3, 4));
  this.grav = createVector(0, random(0.2, 0.3));
  this.size = random(10, 15);
  //this.alpha = 150;
  this.update = function() {
    this.pos.add(this.vel);
    //this.vel.add(this.grav);
    this.alpha = map(this.pos.y, -100, height, 150, 0);
  }
  
  this.show = function() {
    noStroke();
    fill(0, 173, 255, alpha);
    //fill(0, 173, 255, random(this.alpha));
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }  
}
