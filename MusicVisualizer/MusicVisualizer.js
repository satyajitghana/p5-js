var song;
var sliderVolume;
var button;
var amp;
var fft;
var sVol = 1;
var volHistoryL = [];
var volHistoryR = [];
var rain = [];
var maxRain = 100;
var alpha = 50;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("Tera-Ghata-128Kbps.mp3", loaded);
  amp = new p5.Amplitude();
  fft = new p5.FFT(1, 2048);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function togglePlay() {
  if(song.isPlaying()) {
    song.pause();
    button.html("Play");
  }

  else {
    song.play();
    button.html("Pause");
  }
}

function loaded() {
  console.log("Loaded !");
  
  button = createButton("Play");
  button.mousePressed(togglePlay);
  button.style('background-color', '#00adff');
  button.style('color', '#ffffff');
  button.style('font-size', '20px');
  button.position(button.width, height-button.height*3);
  
  var volText = createElement("h4", "Volume");
  volText.style('font', '20px arial, sans-serif');
  volText.style('font-weight', 'bold');
  volText.style('color', '#ffffff');
  volText.position(button.x+button.width*2.2, button.y-button.height);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position(volText.x+sliderVolume.width*0.8, volText.y+sliderVolume.height+5);
}

function loading() {
  if(!song.isLoaded()) {
    stroke(0);
    textSize(20);
    fill(255);
    text("Loading . . .", width/2-40, height/4);
  } else {
    song.setVolume(sliderVolume.value());
    sVol = sliderVolume.value();
  }
}

function draw() {
  background(50);
  loading();
  /*
  // Rain
  while (rain.length < maxRain) {
    rain.push(new Drop());
  }
  
  for (var i = 0 ; i < rain.length ; i++) {
    rain[i].update();
    rain[i].show();
    if (rain[i].pos.y > height) {
      rain.splice(rain.indexOf(rain[i]), 1);
    }
  }
  */
  var vol, size;  
  
  // Get Left and Right Volume levels
  volHistoryL.push(amp.stereoVol[0]);
  volHistoryR.push(amp.stereoVol[1]);
  //volHistory.push(vol);

  // Circle radius as the amplitude
  //var vol = amp.getLevel();
  //var size = map(vol, 0, sVol, 100, 200);
  //var alpha = map(size, 100, 200, 100, 255);
  
  //noStroke();
  //fill(255, 50, 92, alpha);
  //ellipse(width*0.5, height*0.4, size, size);
  //stroke(255);
  
  // Left Speaker Amplitude circle
  vol = amp.stereoVol[0];
  size = map(vol, 0, sVol, 100, 200);
  alpha = map(size, 100, 200, 100, 255);
  noStroke();
  fill(255, 50, 92, alpha);
  ellipse(width*0.5, height*0.4, size*1.3, size*1.3);
  // Right Speaker Amplitude circle  
  vol = amp.stereoVol[1];
  size = map(vol, 0, sVol, 100, 200);
  alpha = map(size, 100, 200, 100, 255);
  noStroke();
  fill(255, 100, 92, alpha);
  ellipse(width*0.5, height*0.4, size, size);
  
  // FFT Waveform
  noStroke();
  beginShape();
  fill(255, 0, 51, alpha);
  var waveform = fft.waveform();
  for (var i = 0 ; i < waveform.length ; i++) {
    var angle = map(i, 0, waveform.length, 0, TWO_PI);
    var rad = map(waveform[i], -1, 1, 50, width*0.3);
    var x = rad * cos(angle);
    var y = rad * sin(angle);
    //line(width/2, height/2, (width/2) + x, (height/2) + y);
    vertex(width*0.5 + x, height*0.4 + y);
  }
  endShape(CLOSE);
  
  // Amplitude graph Left
  fill(0, 250, 154, 50);
  noStroke();
  beginShape();
  vertex(0, height);
  for (var i = 0 ; i < volHistoryL.length; i++) {
    var len = map(volHistoryL[i], 0, 1, 20, height*0.4);
    //var angle = map(i, 0, volHistory.length, 0, TWO_PI);
    //x = rad * cos(angle);
    //y = rad * sin(angle);
    //line(width/2, height/2, (width/2) + x, (height/2) + y);
    x = map(i, 0, volHistoryL.length, 0, width);
    y = map(len, 20, height*0.4, height*0.9, height*0.4);
    vertex(x, y);
  }
  vertex(x, height);
  endShape();
  if (volHistoryL.length > width/2) {
    volHistoryL.splice(1, 1);
  }
  
  // Amplitude graph Right
  fill(100, 250, 154, 50);
  noStroke();
  beginShape();
  vertex(0, height);
  for (var i = 0 ; i < volHistoryR.length; i++) {
    var len = map(volHistoryR[i], 0, 1, 20, height*0.4);
    x = map(i, 0, volHistoryR.length, 0, width);
    y = map(len, 20, height*0.4, height*0.9, height*0.4);
    vertex(x, y);
  }
  vertex(x, height);
  endShape();
  if (volHistoryR.length > width/2) {
    volHistoryR.splice(1, 1);
  }
  
  noStroke();
  fill(247, 148, 51, 180);
  textSize(20);
  text("Satyajit Ghana", width*0.8, height*0.95);
  
  text(floor(frameRate()), width*0.8, height*0.99);
  //fft.smooth(1);
}
