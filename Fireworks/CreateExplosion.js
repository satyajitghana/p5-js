/*function CreateExplosion(x, y, n) {
  this.origin = createVector(x, y);
  this.particles = [];
  this.maxParticles = n;
  
  this.show = function() {
    for (var i = 0; i < particles.length ; i++) {
      particles.[i].update();
      particles.[i].show();
      particles.[i].lifetime--;
    }
  }
  
  this.isExplosionDone() {
    if (particles.[i].lifetime <=0) return true;
    return false;
  }
  
  this.addParticles = function() {
    for (var i = 0 ; i < this.maxParticles ; i++) {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
      this.particles[i].vel = createVector(random(-5, 5), random(-5, 5));
    }
  }
}*/
