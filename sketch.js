// Machine Learning Implemented Image Detector

// Video
let video;
let classifier;
let label = "waiting...";

// STEP 1: Load the model!
function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hEQ2oc6z7/');
  }

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyImage();
}

// STEP 2 classify!

function classifyImage(){
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill("red");
  text(label, width/2,height-16);
}


// STEP 3: Get the classification!
function gotResults(error, results){
  if(error){
    console.error(error);
  }
  else{
    label = results[0].label;
    classifyImage();
  }
}
