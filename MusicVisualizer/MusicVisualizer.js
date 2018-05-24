var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;

function preload() {

}

function setup() {
  createCanvas(600, 600);
  song = loadSound("Tera-Ghata.mp3", loaded);
  button = createButton("Play");
  button.mousePressed(togglePlay);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 3, 1, 1);
  sliderPan = createSlider(-1, 1, 0, 0.01);
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
  /*song.play();
  song.jump(40);
  song.pause();*/
}

function draw() {
  background(0);
  if(!song.isLoaded()) {
    background(random(255));
  }
  song.setVolume(sliderVolume.value());
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
}
