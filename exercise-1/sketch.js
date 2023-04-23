// let a = 0;
// let couch;

function preload() {
  couch = loadImage("images/trash-couch.jpg");
}

function showText() {
  // Get the element with the id "image-text"
  let imageText = document.getElementById("image-text");
  // Change the visibility of the element to "visible"
  imageText.style.visibility = "visible";
}

// Add an event listener to the window object to make sure the image element is loaded before attaching the click event
window.addEventListener("load", function() {
  let myImage = document.getElementById("myImage");
  myImage.addEventListener("click", showText);
});

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');
}

function draw() {
  background(255);

  // draw the couch image at the mouse position
  image(couch, mouseX, mouseY);

  // move the couch
  couch.position((200 + a), 500);
  a++;
}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function racoon() {
  let racoon = createImg("images/racoon.jpg");
  racoon.size(400, 400);
  racoon.position(800, 400);
}

function mousePressed() {
  // show the racoon image when the mouse is pressed
  racoon();
}
