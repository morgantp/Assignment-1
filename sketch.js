let circleArray = [];
let arraySize = 120;


function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width, height, random(-5, 5), random(-5, 5), random(10, 100));
  }
}

function draw() {
  //background(160);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

class Circle{

  constructor(x, y, speedX, speedY, size){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = random(size);

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
  }
  moveFunction(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  displayCircle(){
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    strokeWeight(1);
    //noStroke();
    fill(this.rd, mouseY, this.bl);
    line(this.x, this.y, this.size+594, this.size+841);
    line(this.y, this.x, this.size+594, this.size+841);
    rect(this.x, this.y, this.size, this.size);
    fill(this.rd, this.grn, mouseX)
    ellipse(this.y, this.x, this.size, this.size);
    /*fill(mouseY, mouseX, 150);
    triangle(this.y, this.x, this.y, this.x, this.y, this.x, this.size, this.size);*/
  }
}
