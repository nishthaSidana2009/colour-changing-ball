function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  circle(200,200,50)
  if(mouseX>300){
    fill("red");
  } else if(mouseX>250){
    fill("pink");
  } else if(mouseX>200){
    fill(255);
  } else if(mouseX>150){
    fill("purple");
  }
}