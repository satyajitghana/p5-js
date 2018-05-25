function Firework(pos) {
  this.firework = new Particle(pos, height, true);
  this.gravity = createVector(0, 0.2);
  this.exploded = false;
  this.isAlive = true;
  this.particles = [];
  
  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(this.gravity);
      this.firework.update();
      if (this.firework.vel.y > 1) {
        this.exploded = true;
        this.explode();
      }
      else this.exploded = false;
    }
    
     for (var i = this.particles.length-1 ; i >= 0; i--) {
      this.particles[i].applyForce(this.gravity);
      this.particles[i].update();
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      }
    }
    
  }
  
  this.show = function() {
    if (!this.exploded)
      this.firework.show();
    for (var i = 0 ; i < this.particles.length ; i++) {
      this.particles[i].show();
      //particles[i].lifetime--;
    }
  }
  
  this.explode = function() {
    var c = random(255);
    for (var i = 0 ; i < 100 ; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, false);
      p.c = c;
      this.particles.push(p);
    }
    
    //while(this.particles.length < 100) {
      //var p = new Particle(this.firework.pos.x, this.firework.pos.y);
      //this.particles.push(p);
    //}
  }
}
