let cloudY = 200;
let cloudX = 200;
let speed = 10;
let y = 500;
let x = 100;
let s = 0.3; //scale dog
let c = 0.3; //scale sheep
let b = 1; //scale barn
const jump = 20;
const gravity = 1;
const groundY = 500;
let jumpheight = 2;
let velocityY = 2;
let dogY = 500;
let dogX = x;

function setup() {
  createCanvas(900, 600);
}

function dog(x, y) {
  push();
  translate(x, y);
  scale(-1, 1);
  noStroke();

  //body
  fill(222, 184, 135);
  rect(x * s + 20 * s, y * s, 160 * s, 60 * s);
  rect(x * s + 80 * s, y * s - 20 * s, 100 * s, 20 * s);
  rect(x * s + 120 * s, y * s - 40 * s, 60 * s, 20 * s);

  rect(x * s + 80 * s, y * s + 60 * s, 100 * s, 20 * s);
  rect(x * s + 80 * s, y * s + 100 * s, 40 * s, 180 * s);
  rect(x * s + 80 * s, y * s + 100 * s, 320 * s, 100 * s);
  rect(x * s + 160 * s, y * s + 100 * s, 40 * s, 180 * s);
  rect(x * s + 360 * s, y * s + 100 * s, 40 * s, 180 * s);
  rect(x * s + 280 * s, y * s + 100 * s, 40 * s, 180 * s);

  // fläck
  fill(139, 69, 19);
  rect(x * s + 180 * s, y * s - 20 * s, 20 * s, 100 * s);
  rect(x * s + 200 * s, y * s + 60 * s, 20 * s, 20 * s);
  rect(x * s + 200 * s, y * s + 60 * s, 20 * s, 20 * s);
  rect(x * s + 380 * s, y * s + 40 * s, 40 * s, 60 * s);
  rect(x * s + 360 * s, y * s + 20 * s, 40 * s, 20 * s);
  rect(x * s + 340 * s, y * s + 40 * s, 20 * s, 20 * s);
  rect(x * s + 220 * s, y * s + 100 * s, 180 * s, 20 * s);
  rect(x * s + 260 * s, y * s + 120 * s, 140 * s, 20 * s);
  rect(x * s + 300 * s, y * s + 140 * s, 80 * s, 20 * s);
  //öron
  rect(x * s + 100 * s, y * s - 80 * s, 20 * s, 20 * s);
  rect(x * s + 160 * s, y * s - 60 * s, 40 * s, 40 * s);
  rect(x * s + 180 * s, y * s - 80 * s, 20 * s, 20 * s);
  rect(x * s + 100 * s, y * s - 60 * s, 40 * s, 40 * s);

  //darkest spots
  fill(80, 0, 0);
  rect(x * s, y * s, 40 * s, 40 * s);
  rect(x * s + 100 * s, y * s - 60 * s, 20 * s, 40 * s);
  rect(x * s + 180 * s, y * s - 60 * s, 20 * s, 40 * s);
  rect(x * s + 100 * s, y * s, 20 * s, 20 * s);
  rect(x * s + 140 * s, y * s, 20 * s, 20 * s);
  rect(x * s + 60 * s, y * s + 260 * s, 20 * s, 20 * s);
  rect(x * s + 140 * s, y * s + 260 * s, 20 * s, 20 * s);
  rect(x * s + 340 * s, y * s + 260 * s, 20 * s, 20 * s);
  rect(x * s + 260 * s, y * s + 260 * s, 20 * s, 20 * s);

  //halsband
  fill(250, 50, 50);
  rect(x * s + 80 * s, y * s + 80 * s, 140 * s, 40 * s);

  pop();
}

/*
function sheep(x, y) {
  noStroke();

  fill(190);
  rect(x * c + 220 * c, y * c + 180 * c, 40 * c, 40 * c);

  //body
  fill(220, 220, 220);
  rect(x * c, y * c + 40 * c, 160 * c, 80 * c);
  rect(x * c + 20 * c, y * c + 120 * c, 120 * c, 20 * c);

  //feet
  rect(x * c + 80 * c, y * c + 180 * c, 40 * c, 40 * c);
  rect(x * c + 140 * c, y * c + 180 * c, 40 * c, 40 * c);
  rect(x * c + 240 * c, y * c + 180 * c, 40 * c, 40 * c);

  //wool
  fill(169, 169, 169);
  rect(x * c, y * c, 180 * c, 40 * c);
  rect(x * c + 140 * c, y * c - 20 * c, 120 * c, 20 * c);
  rect(x * c + 180 * c, y * c, 120 * c, 40 * c);
  rect(x * c + 160 * c, y * c + 40 * c, 220 * c, 40 * c);
  rect(x * c + 160 * c, y * c + 80 * c, 180 * c, 40 * c);
  rect(x * c + 140 * c, y * c + 120 * c, 160 * c, 20 * c);
  rect(x * c + 80 * c, y * c + 140 * c, 200 * c, 20 * c);

  //wool outline
  fill(105, 105, 105);
  rect(x * c, y * c, 60 * c, 20 * c);
  rect(x * c + 40 * c, y * c + 20 * c, 20 * c, 20 * c);
  rect(x * c - 20 * c, y * c + 20 * c, 20 * c, 20 * c);
  rect(x * c, y * c + 40 * c, 20 * c, 20 * c);
  rect(x * c + 60 * c, y * c - 20 * c, 80 * c, 20 * c);
  rect(x * c + 120 * c, y * c, 20 * c, 40 * c);
  rect(x * c + 140 * c, y * c, 40 * c, 20 * c);
  rect(x * c + 180 * c, y * c + 20 * c, 20 * c, 20 * c);
  rect(x * c + 140 * c, y * c + 40 * c, 40 * c, 20 * c);
  rect(x * c + 140 * c, y * c - 40 * c, 140 * c, 20 * c);
  rect(x * c + 260 * c, y * c - 20 * c, 60 * c, 20 * c);
  rect(x * c + 300 * c, y * c, 20 * c, 40 * c);
  rect(x * c + 320 * c, y * c + 20 * c, 40 * c, 20 * c);
  rect(x * c + 360 * c, y * c + 40 * c, 20 * c, 40 * c);
  rect(x * c + 340 * c, y * c + 80 * c, 40 * c, 20 * c);
  rect(x * c + 320 * c, y * c + 20 * c, 20 * c, 100 * c);
  rect(x * c + 300 * c, y * c + 120 * c, 40 * c, 20 * c);
  rect(x * c + 280 * c, y * c + 140 * c, 40 * c, 20 * c);
  rect(x * c + 60 * c, y * c + 160 * c, 240 * c, 20 * c);
  rect(x * c + 60 * c, y * c + 140 * c, 20 * c, 20 * c);

  //eyes
  fill(0);
  rect(x * c + 20 * c, y * c + 60 * c, 20 * c, 20 * c);
  rect(x * c + 100 * c, y * c + 60 * c, 20 * c, 20 * c);
  //nose
  fill(255, 210, 230);
  rect(x * c + 40 * c, y * c + 80 * c, 60 * c, 20 * c);
  rect(x * c + 60 * c, y * c + 100 * c, 20 * c, 20 * c);
}
  */

class Sheep {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  collect() {
    console.log("collected!");
  }

  draw() {
    fill(255);
    ellipse(this.x, this.y, 50, 50);
  }
}

const sheep0 = new Sheep(550, 230); // instructiona
const sheep1 = new Sheep(550, 490); //lvl1
const sheep2 = new Sheep(360, 380); //lvl 1
const sheep3 = new Sheep(540, 330); //lvl 1

const sheep6 = new Sheep(350, 380); // lvl 3
const sheep7 = new Sheep(650, 380); // lvl 3
//sheep(1000,1110);
//sheep(2000,1110);

//sheep(1000, 1500);
//sheep(1670, 960);
//zsheep(2000, 1500);
class Wolf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x -= 2; //moves to the left
  }

  draw() {
    fill(0);
    ellipse(this.x, this.y, 50, 50);
  }
}

const wolf0 = new Wolf(500, 400);
const wolf1 = new Wolf(100, 500);
const wolf2 = new Wolf(500, 450);
const wolf3 = new Wolf(200, 450);

//wolf(700,1400);
//wolf(2400,1400);
//wolf(1500,1400);

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
  rect(position.x, position.y, 100, 20);
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

let bricks = [
  { x: 510, y: 443, width: 240, height: 20 }, //lvl 1
  { x: 780, y: 405, width: 240, height: 20 }, //lvl 1
  // { x: 360, y: 405, width: 240, height: 20 }, //lvl 2
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

function buttons() {
  rect(300, 200, 250, 50, 10);
  rect(300, 320, 250, 50, 10);
  fill(0, 0, 0);
  textSize(20);
  text("START", 390, 232);
  textSize(20);
  text("INSTRUCTIONS", 345, 352);
}

function resetlvl() {
  dogY = 500;
  dogX = 0;
  gamesState = true;
}

function startScreen() {
  gameBackground();
  buttons();
  fill(0);
  textSize(50);
  text("HERD HERO", 270, 100, 400, 100);
  brick(brick0);
  //sheep(2000, 1110);
  dog(300, 350);
  barn(90, 250);
}

function instructionScreen() {
  gameBackground();
  fill(0);
  textSize(60);
  text("Instructions", 250, 120);
  textSize(20);
  text("Collect all sheeps and return to the barn", 160, 200);

  text(
    "Use the arrow keys to move the character, use the spacebar to jump",
    160,
    250,
    300
  );
  text(
    "Watch out for the wolves! They will take all your sheeps!",
    160,
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

function gameScreen() {
  //background(190, 190, 255);
  gameBackground();
  barn(100, 250);
  dog(dogX, y - 150);
  //code for gravity from Chat GPT
  if (dogX < 1500) {
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
  } else {
    //call result screen when done
    state = "win";
  }

  if (dogY < 500) {
    velocityY = 0;
  }

  for (let brick of bricks) {
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

  brick(brick1);
  brick(brick2);
  barn(2000, 1000);
  sheep1.draw();
  sheep2.draw();
  sheep3.draw();

  if (dogX === sheep1.x && dogY === sheep1.y) {
    console.log("lol");
  }
}

function gameScreen2() {
  gameBackground();
  barn(100, 250);
  fill(190, 190, 255);
  rect(460, 500, 150, 100);
  dog(dogX, y - 150);
  //code for gravity from Chat GPT
  if (dogX < 1500) {
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
  } else {
    //call result screen when done
    state = "win";
  }

  if (dogY < 500) {
    velocityY = 0;
  }

  brick(brick3);
  for (let brick of bricks) {
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
}

function gameScreen3() {
  gameBackground();
  brick(brick0);
  brick(brick1);
  barn(100, 250);

  sheep6.draw();
  sheep7.draw();

  wolf2.draw();
  wolf3.draw();

  //sheep(1000,1110);
  //sheep(2000,1110);
}

// Handle jumping from P5 website
function keyPressed() {
  let onSurface = false;

  if (dogY === groundY) {
    //if dog on ground
    onSurface = true;
  }

  for (let brick of bricks) {
    if (
      dogX + 50 > brick.x &&
      dogX < brick.x + brick.width &&
      y + 50 > brick.y &&
      y + 50 <= brick.y + brick.height
    ) {
      onSurface = true;
    }
  }

  if (keyCode === 32 && onSurface) {
    // Space bar, on the ground and brick
    velocityY = -jump; // jump
    onSurface = false; // Disable further jumping until landing
  }
}

function loseScreen() {
  gameBackground();
  fill(255);
  rect(300, 200, 250, 50, 10);
  rect(300, 320, 250, 50, 10);
  fill(0, 0, 0);
  textSize(20);
  text("TRY AGAIN", 340, 232);
  textSize(20);
  text("LEVELS", 302, 352);
}

function winScreen() {
  gameBackground();
  fill(255);
  rect(300, 200, 250, 50, 10);
  rect(300, 320, 250, 50, 10);
  fill(0, 0, 0);
  textSize(20);
  text("NEXT LEVEL", 365, 232);
  textSize(20);
  text("LEVELS", 380, 352);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "instruction") {
    instructionScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "levels") {
    levelScreen();
  } else if (state === "game2") {
    gameScreen2();
  } else if (state === "game3") {
    gameScreen3();
  }
}

let state = "game3";

function mouseClicked() {
  if (state === "instruction") {
    state = "start";
  } else if (
    state === "win" &&
    mouseX >= 250 &&
    mouseX <= 500 &&
    mouseY >= 320 &&
    mouseY <= 370
  ) {
    state = "levels";
  } else if (state === "game")
    //bara för redigeringen
    state = "start";
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
  // instructions button
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
  }

  //next lvl button
  else if (
    state === "win" && //måste dock va olika för win / lose
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 200 &&
    mouseY <= 250
  ) {
    state = "game2";
  } else if (
    state === "win" &&
    state === "lose" &&
    mouseX >= 300 &&
    mouseX <= 550 &&
    mouseY >= 320 &&
    mouseY <= 370
  ) {
    state = "levels";
  } else if (state === "game2") {
    state = "start";
  } else if (state === "game3") {
    state = "start";
  } else if (state === "result") {
    resetlvl();
    state = "start";
  }
}
