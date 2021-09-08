img = "";
status = "";

function preload() {
    img = loadImage('Bedroom.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, gotResults) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bedroom", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}