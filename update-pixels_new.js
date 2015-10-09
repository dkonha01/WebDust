var img;
var radius=30;
var smoothAmount;
var canvasImg;

function preload() {

 img = loadImage("living_room.jpg");  // Load an image into the program
}

function setup() {
  createCanvas(800, 800);
  loadPixels();
}


function draw() {

  for (var y=0 ; y<height; y++) {
    for (var x=0; x<width; x++) {
      if (pow((x-random(800)), 2)+ pow((y-random(800)), 2)<pow(radius, 2))  {
        var c = img.get(x, y);
        set(x, y, c);
      //  pixels[4*(y*width+x)] = c[0];
      //  pixels[4*(y*width+x)+1] = c[1];
      //  pixels[4*(y*width+x)+2] = c[2];
      //  pixels[4*(y*width+x)+3] = c[3];
      }
    }
  }
  updatePixels();
}
