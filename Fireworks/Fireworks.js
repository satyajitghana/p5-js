var firework = [];
var gravity;
var maxFireworks = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 255);
  //for (var i = 0 ; i < 100 ; i++)
  // firework.push(new Firework());
}

function mousePressed() {
  firework.push(new Firework(mouseX));
}

function draw() {  
  background(0);
  if (random(1) < 0.05)
    firework.push(new Firework(random(width)));

  for (var i = 0 ; i < firework.length ; i++) {
    firework[i].update();
    firework[i].show();
    if ((firework[i].exploded) && (firework[i].particles.length == 0)) {
      firework.splice(i, 1);
      console.log("done");
      //firework.push(new Firework());
    }
  }
  //println(frameRate);
  //console.log(frameRate());
  //text(frameRate(), 900, 900);
}
