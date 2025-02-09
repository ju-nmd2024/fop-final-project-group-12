let cloudY = 200;
let cloudX = 200;
let speed = 10;
let y = 500;
let x = 100;
let s = 1; //scale dog
let c = 1; //scale sheep
let b = 1; //scale barn
let w = 1;
const jump = 20;
const gravity = 1;
const groundY = 480;
let jumpheight = 2;
let velocityY = 0.5;
let dogY = 500;
let dogX = x;
let score = 0;

function setup() {
  createCanvas(900, 600);
}

function dog(x, y) {

  push();
  stroke(90,50,0);
  strokeWeight(5);
  fill(200,100,30);
  rect(x-50,y-40,100,70,10);
  rect(x+20,y-50,50,30);
  rect(x+20,y-70,20,20);
  rect(x-30,y+30,20,20);
  rect(x+10,y+30,20,20);
  noStroke();
  fill(0,0,0);
  rect(x+45,y-45,10);
  fill(255,255,255);
  rect(x+46,y-44,4);
  fill(255, 210, 230);
  rect(x+65,y-38,10,10);
  pop();
  
}

class Sheep {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    let x = this.x;
    let y = this.y;

    fill(190);
    rect(x + 220 * c * 0.3, y + 180 * c * 0.3, 40 * c * 0.3, 40 * c * 0.3);

    //body
    fill(220, 220, 220);
    rect(x, y + 40 * c * 0.3, 160 * c * 0.3, 80 * c * 0.3);
    rect(x + 20 * c * 0.3, y + 120 * c * 0.3, 120 * c * 0.3, 20 * c * 0.3);

    //feet
    rect(x + 80 * c * 0.3, y + 180 * c * 0.3, 40 * c * 0.3, 40 * c * 0.3);
    rect(x + 140 * c * 0.3, y + 180 * c * 0.3, 40 * c * 0.3, 40 * c * 0.3);
    rect(x + 240 * c * 0.3, y + 180 * c * 0.3, 40 * c * 0.3, 40 * c * 0.3);

    //wool
    fill(169, 169, 169);
    rect(x, y, 180 * c * 0.3, 40 * c * 0.3);
    rect(x + 140 * c * 0.3, y - 20 * c * 0.3, 120 * c * 0.3, 20 * c * 0.3);
    rect(x + 180 * c * 0.3, y, 120 * c * 0.3, 40 * c * 0.3);
    rect(x + 160 * c * 0.3, y + 40 * c * 0.3, 220 * c * 0.3, 40 * c * 0.3);
    rect(x + 160 * c * 0.3, y + 80 * c * 0.3, 180 * c * 0.3, 40 * c * 0.3);
    rect(x + 140 * c * 0.3, y + 120 * c * 0.3, 160 * c * 0.3, 20 * c * 0.3);
    rect(x + 80 * c * 0.3, y + 140 * c * 0.3, 200 * c * 0.3, 20 * c * 0.3);

    //wool outline
    fill(105, 105, 105);
    rect(x, y, 60 * c * 0.3, 20 * c * 0.3);
    rect(x + 40 * c * 0.3, y + 20 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);
    rect(x - 20 * c * 0.3, y + 20 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);
    rect(x, y + 40 * c * 0.3, 20 * 0.3, 20 * c * 0.3);
    rect(x + 60 * c * 0.3, y - 20 * c * 0.3, 80 * c * 0.3, 20 * c * 0.3);
    rect(x + 120 * c * 0.3, y, 20 * 0.3, 40 * c * 0.3);
    rect(x + 140 * c * 0.3, y, 40 * c * 0.3, 20 * c * 0.3);
    rect(x + 180 * c * 0.3, y + 20 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);
    rect(x + 140 * c * 0.3, y + 40 * c * 0.3, 40 * c * 0.3, 20 * c * 0.3);
    rect(x + 140 * c * 0.3, y - 40 * c * 0.3, 140 * c * 0.3, 20 * c * 0.3);
    rect(x + 260 * c * 0.3, y - 20 * c * 0.3, 60 * c * 0.3, 20 * c * 0.3);
    rect(x + 300 * c * 0.3, y, 20 * c * 0.3, 40 * c * 0.3);
    rect(x + 320 * c * 0.3, y + 20 * c * 0.3, 40 * c * 0.3, 20 * c * 0.3);
    rect(x + 360 * c * 0.3, y + 40 * c * 0.3, 20 * c * 0.3, 40 * c * 0.3);
    rect(x + 340 * c * 0.3, y + 80 * c * 0.3, 40 * c * 0.3, 20 * c * 0.3);
    rect(x + 320 * c * 0.3, y + 20 * c * 0.3, 20 * c * 0.3, 100 * c * 0.3);
    rect(x + 300 * c * 0.3, y + 120 * c * 0.3, 40 * c * 0.3, 20 * c * 0.3);
    rect(x + 280 * c * 0.3, y + 140 * c * 0.3, 40 * c * 0.3, 20 * c * 0.3);
    rect(x + 60 * c * 0.3, y + 160 * c * 0.3, 240 * c * 0.3, 20 * c * 0.3);
    rect(x + 60 * c * 0.3, y + 140 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);

    //eyes
    fill(0);
    rect(x + 20 * c * 0.3, y + 60 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);
    rect(x + 100 * c * 0.3, y + 60 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);
    //nose
    fill(255, 210, 230);
    rect(x + 40 * c * 0.3, y + 80 * c * 0.3, 60 * c * 0.3, 20 * c * 0.3);
    rect(x + 60 * c * 0.3, y + 100 * c * 0.3, 20 * c * 0.3, 20 * c * 0.3);
  }
}

const sheep0 = new Sheep(500, 220); // instructiona
const sheep4 = new Sheep(605, 335); // start
const sheep1 = new Sheep(600, 440); //lvl1
const sheep2 = new Sheep(270, 335); //lvl 1
const sheep3 = new Sheep(560, 440); //lvl 2
const sheep5 = new Sheep(160, 290); //lvl 2

const sheep6 = new Sheep(300, 335); // lvl 3
const sheep7 = new Sheep(600, 335); // lvl 3

let sheepslvl1 = [
  { x: 640, y: 440, width: 100, height: 60, collected: false },
  { x: 320, y: 335, width: 100, height: 60, collected: false },
];
let sheepslvl2 = [
  { x: 210, y: 285, width: 100, height: 60, collected: false },
  { x: 610, y: 440, width: 100, height: 60, collected: false },
];
let sheepslvl3 = [
  { x: 300, y: 335, width: 100, height: 60, collected: false },
  { x: 600, y: 335, width: 100, height: 60, collected: false },
];

class Wolf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    let x = this.x;
    let y = this.y;
    noStroke();

    //body

    fill(190, 190, 190);

    rect(x + 20 * w * 0.3, y, 160 * w * 0.3, 60 * w * 0.3);

    rect(x + 80 * w * 0.3, y - 20 * w * 0.3, 100 * w * 0.3, 20 * w * 0.3);

    rect(x + 120 * w * 0.3, y - 40 * w * 0.3, 60 * w * 0.3, 20 * w * 0.3);

    rect(x + 80 * w * 0.3, y + 60 * w * 0.3, 100 * w * 0.3, 20 * w * 0.3);

    rect(x + 80 * w * 0.3, y + 100 * w * 0.3, 40 * w * 0.3, 180 * w * 0.3);

    rect(x + 80 * w * 0.3, y + 100 * w * 0.3, 320 * w * 0.3, 90 * w * 0.3);

    rect(x + 160 * w * 0.3, y + 100 * w * 0.3, 40 * w * 0.3, 180 * w * 0.3);

    rect(x + 360 * w * 0.3, y + 100 * w * 0.3, 40 * w * 0.3, 180 * w * 0.3);

    rect(x + 280 * w * 0.3, y + 100 * w * 0.3, 40 * w * 0.3, 180 * w * 0.3);

    // flÃ¤ck

    fill(105, 105, 105);

    rect(x + 180 * w * 0.3, y - 20 * w * 0.3, 20 * w * 0.3, 100 * w * 0.3);

    rect(x + 200 * w * 0.3, y + 60 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 200 * w * 0.3, y + 60 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 380 * w * 0.3, y + 40 * w * 0.3, 40 * w * 0.3, 60 * w * 0.3);

    rect(x + 360 * w * 0.3, y + 20 * w * 0.3, 40 * w * 0.3, 20 * w * 0.3);

    rect(x + 340 * w * 0.3, y + 40 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 220 * w * 0.3, y + 100 * w * 0.3, 180 * w * 0.3, 20 * w * 0.3);

    rect(x + 260 * w * 0.3, y + 120 * w * 0.3, 140 * w * 0.3, 20 * w * 0.3);

    rect(x + 300 * w * 0.3, y + 140 * w * 0.3, 80 * w * 0.3, 20 * w * 0.3);

    //Ã¶ron

    rect(x + 100 * w * 0.3, y - 80 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 160 * w * 0.3, y - 60 * w * 0.3, 40 * w * 0.3, 40 * w * 0.3);

    rect(x + 180 * w * 0.3, y - 80 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 100 * w * 0.3, y - 60 * w * 0.3, 40 * w * 0.3, 40 * w * 0.3);

    //darkest spots

    fill(0, 0, 0);

    rect(x, y, 40 * w * 0.3, 40 * w * 0.3);

    rect(x + 100 * w * 0.3, y - 60 * w * 0.3, 20 * w * 0.3, 40 * w * 0.3);

    rect(x + 180 * w * 0.3, y - 60 * w * 0.3, 20 * w * 0.3, 40 * w * 0.3);

    rect(x + 100 * w * 0.3, y, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 140 * w * 0.3, y, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 60 * w * 0.3, y + 260 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 140 * w * 0.3, y + 260 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 340 * w * 0.3, y + 260 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    rect(x + 260 * w * 0.3, y + 260 * w * 0.3, 20 * w * 0.3, 20 * w * 0.3);

    //halsband

    fill(190, 190, 190);

    rect(x + 80 * w * 0.3, y + 80 * w * 0.3, 140 * w * 0.3, 40 * w * 0.3);
  }
}

const wolf0 = new Wolf(400, 420); // instruction
const wolf1 = new Wolf(360, 420); // 2
const wolf2 = new Wolf(490, 420); // 3
const wolf3 = new Wolf(160, 420); // 3

let wolfArray1 = [{ x: 410, y: 420, width: 100, height: 70 }];

let wolfArray2 = [
  { x: 560, y: 420, width: 100, height: 100 },
  { x: 210, y: 420, width: 100, height: 100 },
];

function barn(x, y) {
  //barn
  fill(200, 0, 10);
  rect(x * b + 700 * b, y * b + 155 * b, 300 * b, 100 * b);
  rect(x * b + 748 * b, y * b + 100 * b, 200 * b, 70 * b);
  triangle(
    x * b + 700 * b,
    y * b + 158 * b,
    x * b + 748 * b,
    y * b + 100 * b,
    x * b + 796 * b,
    y * b + 158 * b
  );
  fill(100, 0, 0);
  rect(x * b + 730 * b, y * b + 140 * b, 30 * b, 50 * b, 20 * b);

  push();
  stroke(0, 0, 0);
  strokeWeight(10 * b);
  line(x * b + 740 * b, y * b + 100 * b, x * b + 950 * b, y * b + 100 * b);
  line(x * b + 750 * b, y * b + 110 * b, x * b + 960 * b, y * b + 110 * b);
  line(x * b + 760 * b, y * b + 120 * b, x * b + 970 * b, y * b + 120 * b);
  line(x * b + 770 * b, y * b + 130 * b, x * b + 980 * b, y * b + 130 * b);
  line(x * b + 780 * b, y * b + 140 * b, x * b + 990 * b, y * b + 140 * b);
  line(x * b + 790 * b, y * b + 150 * b, x * +1000 * b, y * b + 150 * b);
  line(x * b + 800 * b, y * b + 160 * b, x * b + 1010 * b, y * b + 160 * b);
  line(x * b + 810 * b, y * b + 170 * b, x * b + 1020 * b, y * b + 170 * b);
  line(x * b + 740 * b, y * b + 100 * b, x * b + 690 * b, y * b + 160 * b);
  line(x * b + 740 * b, y * b + 100 * b, x * b + 807 * b, y * b + 167 * b);
  line(x * b + 950 * b, y * b + 100 * b, x * b + 1020 * b, y * b + 170 * b);

  stroke(255);
  line(x * b + 820 * b, y * b + 180 * b, x * b + 820 * b, y * b + 250 * b);
  line(x * b + 820 * b, y * b + 180 * b, x * b + 995 * b, y * b + 180 * b);
  line(x * b + 1000 * b, y * b + 180 * b, x * b + 1000 * b, y * b + 250 * b);
  line(x * b + 820 * b, y * b + 180 * b, x * b + 1000 * b, y * b + 250 * b);
  fill(100, 0, 0);
  rect(x * b + 730 * b, y * b + 210 * b, 30 * b, 40 * b);
  pop();
}

function brick(position) {
  fill(100, 20, 20);
  rect(position.x, position.y, 120, 40);
}

//start bricks
let brick0 = {
  x: 600,
  y: 400,
};
//bricks lvl 1
let brick1 = {
  x: 300,
  y: 400,
};
let brick2 = {
  x: 500,
  y: 350,
};

//bricks lvl 2
let brick3 = {
  x: 200,
  y: 350,
};

let bricks1 = [
  { x: 500, y: 350, width: 140, height: 20 }, //lvl 1,3
  { x: 300, y: 400, width: 140, height: 20 }, //lvl 1
];

let bricks2 = [
  { x: 200, y: 350, width: 200, height: 20 }, //lvl 2
];

let bricks3 = [
  { x: 300, y: 400, width: 240, height: 20 }, //lvl 1,3
  { x: 600, y: 400, width: 240, height: 20 }, // lvl 3
];

let bricksarray = [
  { x: 500, y: 350, width: 240, height: 20 },
  { x: 300, y: 400, width: 240, height: 20 },
  { x: 200, y: 350, width: 200, height: 20 }, //lvl 2
  { x: 300, y: 400, width: 240, height: 20 }, // lvl 3
  { x: 600, y: 400, width: 240, height: 20 }, // lvl 3
];

function cloud(x, y) {
  fill(255);

  ellipse(cloudX - 80, cloudY - 110, 100, 50);
  ellipse(cloudX - 25, cloudY - 130, 100, 60);
  ellipse(cloudX + 30, cloudY - 110, 100, 50);
  ellipse(cloudX - 25, cloudY - 100, 100, 30);

  ellipse(cloudX + 400, cloudY - 30, 100, 50);
  ellipse(cloudX + 455, cloudY - 50, 100, 60);
  ellipse(cloudX + 510, cloudY - 30, 100, 50);
  ellipse(cloudX + 455, cloudY - 20, 100, 30);
}

function gameBackground() {
  background(190, 190, 255);
  fill(0, 255, 0);
  rect(0, 540, 900, 100);
  noStroke();
  //grass
  fill(150, 255, 60);
  rect(0, 500, 1500, 100);
  //cloud
  cloud();
}

function resetlvl(level) {
  dogY = 500;
  dogX = 100;
  gamesState = true;
  for (let sheep of sheepslvl1) {
    sheep.collected = false;
    score = 0;
  }
  for (let sheep of sheepslvl2) {
    sheep.collected = false;
    score = 0;
  }
  for (let sheep of sheepslvl3) {
    sheep.collected = false;
    score = 0;
  }
}

function startScreen() {
  gameBackground();

  fill(0);
  textSize(50);
  text("HERD HERO", 270, 100, 400, 100);
  brick(brick0);
  dog(270, 450);
  barn(90, 250);

  sheep4.draw();
  fill(255);
  rect(300, 200, 250, 50, 10);
  rect(300, 320, 250, 50, 10);
  fill(0, 0, 0);
  textSize(20);
  text("START", 390, 232);
  textSize(20);
  text("INSTRUCTIONS", 345, 352);
}

function instructionScreen() {
  gameBackground();
  fill(0);
  textSize(60);
  text("Instructions", 250, 120);
  textSize(20);
  text("Collect all sheeps and return to the barn!", 120, 200);

  text(
    "Use the arrow keys to move the character, use the spacebar to jump.",
    120,
    250,
    300
  );
  text(
    "Watch out for the wolves! They will kill you!",
    120,
    370,
    300
  );

  text("click anywhere to go back", 300, 550);
  //game keys
  fill(255);
  rect(450, 300, 50, 50, 10); // right
  rect(390, 300, 50, 50, 10); //left
  rect(550, 300, 150, 50, 10); //space

  push();
  stroke(0, 0, 0);
  strokeWeight(5);
  //left
  line(400, 327, 415, 315);
  line(400, 327, 415, 340);
  line(430, 327, 400, 327);
  //right
  line(460, 327, 490, 327);
  line(490, 327, 475, 340);
  line(490, 327, 475, 315);
  // other right
  line(670, 245, 640, 245);
  line(670, 245, 655, 230);
  line(670, 245, 655, 260);
  pop();

  barn(10, 30);
  sheep0.draw();
  wolf0.draw();
}

function levelScreen() {
  gameBackground();
  rect(300, 180, 250, 50, 10);
  rect(300, 320, 250, 50, 10);
  rect(300, 250, 250, 50, 10);
  rect(300, 390, 250, 50, 10);

  fill(0, 0, 0);
  textSize(20);
  text("1", 420, 200, 50, 50);
  text("2", 420, 270, 50, 50);
  text("3", 420, 340, 50, 50);
  text("back to start", 370, 405, 200, 50);
}
function winScreen() {
  gameBackground();
  rect(300, 350, 250, 50, 10);
  fill(0);
  textSize(30);
  text("Next level", 360, 390);
  fill(0);
  textSize(50);
  text("You completed the level", 200, 200);
}

function loseScreen() {
  gameBackground();
  fill(0);
  textSize(50);
  text("YOU LOST", 300, 220);
  fill(255);
  rect(300, 350, 250, 50, 10);
  fill(0);
  textSize(30);
  text("Next level", 360, 390);
}

function gameScreen() {
  gameBackground();
  barn(100, 250);
  dog(dogX, y);
  //code for gravity from Chat GPT
  if (dogX < 1000) {
    // as long as character is not there yet
    
    if (keyIsDown(39)) {
      dogX = dogX + speed;
    }
    if (keyIsDown(37)) {
      dogX = dogX - speed;
    }

    y += velocityY;

    if (y < groundY) {
      // If the character is in the air
      velocityY += gravity; // Apply gravity
    } else {
      // If the character is on the ground
      velocityY = 0; // Stop vertical velocity
      y = groundY; // Reset to ground level
    }
  } //call win or lose screen when done:
   else if(score === 2){
  state = "win";
}
else {
   state= "lose";
  }

  if (dogY < 500) {
    velocityY = 0;
  }

  brick(brick1);
  brick(brick2);

  for (let brick of bricks1) {
    if (
      dogX + 50 > brick.x &&
      dogX < brick.x + brick.width &&
      y + 50 > brick.y &&
      y + 50 <= brick.y + brick.height
    ) {
      velocityY = 0;
      y = brick.y - 50;
    }
  }

  //chat gpt, make sheep dissapear when collected
  sheepslvl1.forEach((sheep, index) => {
    if (!sheep.collected) {
      fill(190);
      rect(
        sheep.x + 220 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );

      //body
      fill(220, 220, 220);
      rect(sheep.x, sheep.y + 40 * c * 0.3, 160 * c * 0.3, 80 * c * 0.3);
      rect(
        sheep.x + 20 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        120 * c * 0.3,
        20 * c * 0.3
      );

      //feet
      rect(
        sheep.x + 80 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 240 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );

      //wool
      fill(169, 169, 169);
      rect(sheep.x, sheep.y, 180 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        120 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 180 * c * 0.3, sheep.y, 120 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 160 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        220 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 160 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        180 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        160 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 80 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        200 * c * 0.3,
        20 * c * 0.3
      );

      //wool outline
      fill(105, 105, 105);
      rect(sheep.x, sheep.y, 60 * c * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 40 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x - 20 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x, sheep.y + 40 * c * 0.3, 20 * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        80 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 120 * c * 0.3, sheep.y, 20 * 0.3, 40 * c * 0.3);
      rect(sheep.x + 140 * c * 0.3, sheep.y, 40 * c * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 180 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y - 40 * c * 0.3,
        140 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 260 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        60 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 300 * c * 0.3, sheep.y, 20 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 320 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 360 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        20 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 340 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 320 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        100 * c * 0.3
      );
      rect(
        sheep.x + 300 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 280 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 160 * c * 0.3,
        240 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );

      //eyes
      fill(0);
      rect(
        sheep.x + 20 * c * 0.3,
        sheep.y + 60 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 100 * c * 0.3,
        sheep.y + 60 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      //nose
      fill(255, 210, 230);
      rect(
        sheep.x + 40 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        60 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 100 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
    }
  });

  for (let sheep of sheepslvl1) {
  
    if (dist(dogX, y, sheep.x, sheep.y) < 50 + 50) {
      if(!sheep.collected) {
      sheep.collected = true;
      score++;
      console.log("sheep collected" + score);
      console.log(score);
      }
    }
  }
}

function gameScreen2() {
  gameBackground();
  barn(100, 250);
  dog(dogX, y);
  //code for gravity from Chat GPT
  if (dogX < 1000) {
    // as long as character is not there yet

    if (keyIsDown(39)) {
      dogX = dogX + speed;
    }
    if (keyIsDown(37)) {
      dogX = dogX - speed;
    }

    y += velocityY;

    if (y < groundY) {
      // If the character is in the air
      velocityY += gravity; // Apply gravity
    } else {
      // If the character is on the ground
      velocityY = 0; // Stop vertical velocity
      y = groundY; // Reset to ground level
    }
  } //call result screen when done
   else if(score === 2){
  state = "win";
}
else {
   state= "lose";
  }

  if (dogY < 500) {
    velocityY = 0;
  }

  brick(brick3);

  for (let brick of bricks2) {
    if (
      dogX + 50 > brick.x &&
      dogX < brick.x + brick.width &&
      y + 50 > brick.y &&
      y + 50 <= brick.y + brick.height
    ) {
      velocityY = 0;
      y = brick.y - 50;
    }
  }
 
  wolf1.draw();

  //chat gpt, make sheep dissapear when collected
  sheepslvl2.forEach((sheep, index) => {
    if (!sheep.collected) {
      fill(190);
      rect(
        sheep.x + 220 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );

      //body
      fill(220, 220, 220);
      rect(sheep.x, sheep.y + 40 * c * 0.3, 160 * c * 0.3, 80 * c * 0.3);
      rect(
        sheep.x + 20 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        120 * c * 0.3,
        20 * c * 0.3
      );

      //feet
      rect(
        sheep.x + 80 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 240 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );

      //wool
      fill(169, 169, 169);
      rect(sheep.x, sheep.y, 180 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        120 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 180 * c * 0.3, sheep.y, 120 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 160 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        220 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 160 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        180 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        160 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 80 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        200 * c * 0.3,
        20 * c * 0.3
      );

      //wool outline
      fill(105, 105, 105);
      rect(sheep.x, sheep.y, 60 * c * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 40 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x - 20 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x, sheep.y + 40 * c * 0.3, 20 * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        80 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 120 * c * 0.3, sheep.y, 20 * 0.3, 40 * c * 0.3);
      rect(sheep.x + 140 * c * 0.3, sheep.y, 40 * c * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 180 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y - 40 * c * 0.3,
        140 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 260 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        60 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 300 * c * 0.3, sheep.y, 20 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 320 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 360 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        20 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 340 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 320 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        100 * c * 0.3
      );
      rect(
        sheep.x + 300 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 280 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 160 * c * 0.3,
        240 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );

      //eyes
      fill(0);
      rect(
        sheep.x + 20 * c * 0.3,
        sheep.y + 60 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 100 * c * 0.3,
        sheep.y + 60 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      //nose
      fill(255, 210, 230);
      rect(
        sheep.x + 40 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        60 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 100 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
    }
  });

  for (let sheep of sheepslvl2) {
    //this is not detected by the dog
    if (dist(dogX, y, sheep.x, sheep.y) < 50 + 50) {
      if(!sheep.collected) {
        sheep.collected = true;
        score++;
        console.log("sheep collected" + score);
        console.log(score);
        }
    }
  }

  for (let wolf of wolfArray1) {
    // this is detected by the dog
    if (dist(dogX, y, wolf.x, wolf.y) < 50 + 50) {
      gamesState = false;
      state = "lose";
    }
  }
}

function gameScreen3() {
  gameBackground();
  barn(100, 250);
  dog(dogX, y);
  //code for gravity from Chat GPT
  if (dogX < 1000) {
    // as long as character is not there yet

    if (keyIsDown(39)) {
      dogX = dogX + speed;
    }
    if (keyIsDown(37)) {
      dogX = dogX - speed;
    }

    y += velocityY;

    if (y < groundY) {
      // If the character is in the air
      velocityY += gravity; // Apply gravity
    } else {
      // If the character is on the ground
      velocityY = 0; // Stop vertical velocity
      y = groundY; // Reset to ground level
    }
  }//call result screen when done
   else if(score === 2){
  state = "win";
}
else {
   state= "lose";
  }
 
  if (dogY < 500) {
    velocityY = 0;
  }

  brick(brick1);
  brick(brick0);

  for (let brick of bricks3) {
    if (
      dogX + 50 > brick.x &&
      dogX < brick.x + brick.width &&
      y + 50 > brick.y &&
      y + 50 <= brick.y + brick.height
    ) {
      velocityY = 0;
      y = brick.y - 50;
    }
  }
 
  wolf2.draw();
  wolf3.draw();

  //chat gpt, make sheep dissapear when collected
  sheepslvl3.forEach((sheep, index) => {
    if (!sheep.collected) {
      fill(190);
      rect(
        sheep.x + 220 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );

      //body
      fill(220, 220, 220);
      rect(sheep.x, sheep.y + 40 * c * 0.3, 160 * c * 0.3, 80 * c * 0.3);
      rect(
        sheep.x + 20 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        120 * c * 0.3,
        20 * c * 0.3
      );

      //feet
      rect(
        sheep.x + 80 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 240 * c * 0.3,
        sheep.y + 180 * c * 0.3,
        40 * c * 0.3,
        40 * c * 0.3
      );

      //wool
      fill(169, 169, 169);
      rect(sheep.x, sheep.y, 180 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        120 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 180 * c * 0.3, sheep.y, 120 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 160 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        220 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 160 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        180 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        160 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 80 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        200 * c * 0.3,
        20 * c * 0.3
      );

      //wool outline
      fill(105, 105, 105);
      rect(sheep.x, sheep.y, 60 * c * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 40 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x - 20 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x, sheep.y + 40 * c * 0.3, 20 * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        80 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 120 * c * 0.3, sheep.y, 20 * 0.3, 40 * c * 0.3);
      rect(sheep.x + 140 * c * 0.3, sheep.y, 40 * c * 0.3, 20 * c * 0.3);
      rect(
        sheep.x + 180 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 140 * c * 0.3,
        sheep.y - 40 * c * 0.3,
        140 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 260 * c * 0.3,
        sheep.y - 20 * c * 0.3,
        60 * c * 0.3,
        20 * c * 0.3
      );
      rect(sheep.x + 300 * c * 0.3, sheep.y, 20 * c * 0.3, 40 * c * 0.3);
      rect(
        sheep.x + 320 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 360 * c * 0.3,
        sheep.y + 40 * c * 0.3,
        20 * c * 0.3,
        40 * c * 0.3
      );
      rect(
        sheep.x + 340 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 320 * c * 0.3,
        sheep.y + 20 * c * 0.3,
        20 * c * 0.3,
        100 * c * 0.3
      );
      rect(
        sheep.x + 300 * c * 0.3,
        sheep.y + 120 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 280 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        40 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 160 * c * 0.3,
        240 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 140 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );

      //eyes
      fill(0);
      rect(
        sheep.x + 20 * c * 0.3,
        sheep.y + 60 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 100 * c * 0.3,
        sheep.y + 60 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
      //nose
      fill(255, 210, 230);
      rect(
        sheep.x + 40 * c * 0.3,
        sheep.y + 80 * c * 0.3,
        60 * c * 0.3,
        20 * c * 0.3
      );
      rect(
        sheep.x + 60 * c * 0.3,
        sheep.y + 100 * c * 0.3,
        20 * c * 0.3,
        20 * c * 0.3
      );
    }
  });

  for (let sheep of sheepslvl3) {
    //this is not detected by the dog
    if (dist(dogX, y, sheep.x, sheep.y) < 50 + 50) {
      if(!sheep.collected) {
        sheep.collected = true;
        score++;
        console.log("sheep collected" + score);
        console.log(score);
        }
    }
  }

  for (let wolf of wolfArray2) {
    // this is detected by the dog
    if (dist(dogX, y, wolf.x, wolf.y) < 50 + 50) {
      gamesState = false;
      state = "lose";
    }
  }
}

// Handle jumping from P5 website
function keyPressed() {
  let onSurface = false;

  if (y === groundY) {
    //if dog on ground
    onSurface = true;
  }

  for (let brick of bricksarray) {
    if (
      dogX + 50 > brick.x &&
      dogX < brick.x + brick.width &&
      y + 50 >= brick.y &&
      y + 50 <= brick.y + brick.height
    ) {
      onSurface = true;
    }
  }

  if (keyCode === 32 && onSurface === true) {
    // Space bar, on the ground and brick
    velocityY = -jump; // jump
    onSurface = false; // Disable further jumping until landing
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "instruction") {
    instructionScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "levels") {
    levelScreen();
  } else if (state === "game2") {
    gameScreen2();
  } else if (state === "game3") {
    gameScreen3();
  } else if (state === "levels") {
    levelScreen();
  } else if (state === "win") {
    winScreen();
    resetlvl();
  } else if (state === "lose") {
    loseScreen();
    resetlvl();
  }
}

let state = "start";

function mouseClicked() {
  if (state === "instruction") {
    state = "start";
  } 
  //startscreen
   else if (
    //start button
    state === "start" &&
    mouseX >= 250 &&
    mouseX <= 500 &&
    mouseY >= 200 &&
    mouseY <= 250
  ) {
    state = "levels";
  }
  // instruction button
  else if (
    state === "start" &&
    mouseX >= 250 &&
    mouseX <= 500 &&
    mouseY >= 320 &&
    mouseY <= 370
  ) {
    state = "instruction";
  }

  //levels screen
  //lvl 1
  else if (
    state === "levels" &&
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 180 &&
    mouseY <= 230
  ) {
    state = "game";
  }
  //lvl 2
  else if (
    state === "levels" &&
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 250 &&
    mouseY <= 300
  ) {
    state = "game2";
  }
  // lvl3
  else if (
    state === "levels" &&
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 320 &&
    mouseY <= 370
  ) {
    state = "game3";
  }
  // back to start
  else if (
    state === "levels" &&
    mouseX >= 300 &&
    mouseX <= 500 &&
    mouseY >= 390 &&
    mouseY <= 440
  ) {
    state = "start";
  } else if (
    //next level
    state === "win" &&
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 320 &&
    mouseY <= 370
  ) {
    state = "levels";
  } else if (
    //next level
    state === "lose" &&
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 320 &&
    mouseY <= 370
  ) {
    state = "levels";
  } else if (
    // back to start
    state === "levels" &&
    mouseX >= 250 &&
    mouseX <= 500 &&
    mouseY >= 390 &&
    mouseY <= 440
  ) {
    state = "start";
  } else if (state === "win") {
    resetlvl();
    state = "levels";
  } else if (state === "lose") {
    resetlvl();
    state = "levels";
  }
}

// jumping functions https://editor.p5js.org/tnishida/sketches/Wv_-BBBaA
// gravity chatgpt https://chatgpt.com/share/6751ba57-6c54-8001-becb-779bb58e3210
// make the sheep dissapear https://chatgpt.com/share/6756d2d7-dd94-8001-966b-7c651c1ae346
