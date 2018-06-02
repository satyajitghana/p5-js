var axiom = "F";
var sentence = axiom;
var button;
var rule = [];
var len = 150;
var angle;
var alpha = 255;
var input;

rule[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}
/*
rule[1] = {
  a: "B",
  b: "A"
}*/

function generate() {
  len *= 0.5;
  alpha *= 0.1;
  var nextSentence = "";
  for (var i = 0 ; i < sentence.length ; i++) {
    var current = sentence.charAt(i);
    var changed = false;
    for (var j = 0 ; j < rule.length ; j++) {
      if (current == rule[j].a) {
        nextSentence += rule[j].b;
        changed = true;
        break;
      }
    }
    if (!changed) {
      nextSentence += current;
    }
  }
  
  sentence = nextSentence;
  
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width/2, height);
  stroke(255, alpha);
  strokeWeight(2);
  for (var i = 0 ; i < sentence.length ; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0 , 0, -len);
      translate(0, -len);
    }
    else if (current == "+") {
      rotate(angle);
    }
    else if (current == "-") {
      rotate(-angle);
    }
    else if (current == "[") {
      push();
    }
    else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight-100);
  background(51);
  angle = radians(20);
  createP(axiom);
  turtle();
  button = createButton("Generate");
  button.mousePressed(generate);
  input = createInput();
  input.position(button.x+button.width, height+10);
}

function draw() {
  
}
