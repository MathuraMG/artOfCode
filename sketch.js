let mandala1;
let gr1, gr2, gr3, gr4;
let w = 250,
  h = 250;
let rotateSpeed = 1;
let graphics = [];
let noGraphicsX = 8;
let noGraphicsY = 4;

function preload() {
  mandala1 = loadImage("mandala1.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  
  mandala = createGraphics(width, height);
  mandala.angleMode(DEGREES);
  
  for (let i = 0;i<noGraphicsX*noGraphicsY;i++) {
    graphics[i] = createGraphics(w, h);
    graphics[i].angleMode(DEGREES);
  }
  
}

function draw() {
  rotateSpeed = 90+90*sin(frameCount);
  background(50);
    
  for(let i =0;i<noGraphicsX;i++) {    
    for(let j =0;j<noGraphicsY;j++) {
      let parity = ((i+j)%2==0)?1:-1;
      let startAngle = (j%2==0? (i%2==0?0:90) :(i%2==0?-90:180));
      graphicModule(graphics[i + noGraphicsX*j],startAngle,parity,rotateSpeed);
    }
  }

 for(let i =0;i<noGraphicsX;i++) {    
    for(let j =0;j<noGraphicsY;j++) {
      image(graphics[i + noGraphicsX*j], i*w, j*h, w, h);
    }
  }

}

function circles(graphic, no, r, d, theta) {
  
  for (let i = 0; i < no; i++) {
    graphic.noStroke();
    graphic.strokeWeight(2);
    graphic.ellipse(
      (r + d) * cos((i * 360) / no),
      (r + d) * sin((i * 360) / no),
      2 * r * sin(theta)
    );
  }
}


function graphicModule(graphic, angle, rotateDir, rotateSpeed) {
  graphic.background(255);
  graphic.push();
  graphic.translate(w/2 , h/2 );
  graphic.rotate(angle);
  graphic.rotate(rotateDir*rotateSpeed);
  graphic.image(mandala1, -w/2, -h/2, w * 2, h * 2);
  graphic.pop();

}