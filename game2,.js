let cloudY = 200;
let cloudX = 200;
let speed = 10;
let y = 500;
let x = 100;
let s = 0.3; //scale dog
let c = 0.3; //scale sheep
let b = 1; //scale barn
let w = 0.3;
const jump = 20;
const gravity = 1;
const groundY = 500;
let jumpheight = 2;
let velocityY = 2;
let brickX = 100;
let brickY = 100;
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
x: 400,
y: 400,
};

let bricks = [
{ x: 510, y: 443, width: 240, height: 20 }, //lvl 1
{ x: 780, y: 405, width: 240, height: 20 }, //lvl 1
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

function wolf(x, y) {
    noStroke();
    //body
    fill(190, 190, 190);
    rect(x * w + 20 * w, y * w, 160 * w, 60 * w);
    rect(x * w + 80 * w, y * w - 20 * w, 100 * w, 20 * w);
    rect(x * w + 120 * w, y * w - 40 * w, 60 * w, 20 * w);
  
    rect(x * w + 80 * w, y * w + 60 * w, 100 * w, 20 * w);
    rect(x * w + 80 * w, y * w + 100 * w, 40 * w, 180 * w);
    rect(x * w + 80 * w, y * w + 100 * w, 320 * w, 90 * w);
    rect(x * w + 160 * w, y * w + 100 * w, 40 * w, 180 * w);
    rect(x * w + 360 * w, y * w + 100 * w, 40 * w, 180 * w);
    rect(x * w + 280 * w, y * w + 100 * w, 40 * w, 180 * w);
  
    // fläck
    fill(105, 105, 105);
    rect(x * w + 180 * w, y * w - 20 * w, 20 * w, 100 * w);
    rect(x * w + 200 * w, y * w + 60 * w, 20 * w, 20 * w);
    rect(x * w + 200 * w, y * w + 60 * w, 20 * w, 20 * w);
    rect(x * w + 380 * w, y * w + 40 * w, 40 * w, 60 * w);
    rect(x * w + 360 * w, y * w + 20 * w, 40 * w, 20 * w);
    rect(x * w + 340 * w, y * w + 40 * w, 20 * w, 20 * w);
    rect(x * w + 220 * w, y * w + 100 * w, 180 * w, 20 * w);
    rect(x * w + 260 * w, y * w + 120 * w, 140 * w, 20 * w);
    rect(x * w + 300 * w, y * w + 140 * w, 80 * w, 20 * w);
    //öron
    rect(x * w + 100 * w, y * w - 80 * w, 20 * w, 20 * w);
    rect(x * w + 160 * w, y * w - 60 * w, 40 * w, 40 * w);
    rect(x * w + 180 * w, y * w - 80 * w, 20 * w, 20 * w);
    rect(x * w + 100 * w, y * w - 60 * w, 40 * w, 40 * w);
  
    //darkest spots
    fill(0, 0, 0);
    rect(x * w, y * w, 40 * w, 40 * w);
    rect(x * w + 100 * w, y * w - 60 * w, 20 * w, 40 * w);
    rect(x * w + 180 * w, y * w - 60 * w, 20 * w, 40 * w);
    rect(x * w + 100 * w, y * w, 20 * w, 20 * w);
    rect(x * w + 140 * w, y * w, 20 * w, 20 * w);
    rect(x * w + 60 * w, y * w + 260 * w, 20 * w, 20 * w);
    rect(x * w + 140 * w, y * w + 260 * w, 20 * w, 20 * w);
    rect(x * w + 340 * w, y * w + 260 * w, 20 * w, 20 * w);
    rect(x * w + 260 * w, y * w + 260 * w, 20 * w, 20 * w);
    //halsband
    fill(190, 190, 190);
    rect(x * w + 80 * w, y * w + 80 * w, 140 * w, 40 * w);
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


class Button {
    constructor(x,y, width, height, text) {
        this.x = x; 
        this.y = y; 
        this.width = width;
        this.height = height;
        this.text = text;
    }
    draw() {
push();
translate(this.x, this.y);
fill(255);
rect(0,0,this.width, this.height / 2);
//text
noStroke();
fill(0,0,0);
textSize(this.height / 2);
textAlign(CENTER);
text(this.text, 0, this.height / 4, this.width);
pop();
    }

    hitTest(x,y) {
        return (
            x > this.x && 
            x < this.x + this.width && 
            y > this.y && 
            y < this.y + this.height
        );
    }
}

const buttonStart = new Button (300,200, 250,50, "START");
const buttonInstructions = new Button (300,320,250,50, "INSTRUCTIONS");
const buttonNextLevel = new Button (300,200,250,50, "NEXT LEVEL");
const buttonLevels = new Button (300,320,250,50, "LEVELS");
const buttonTryAgain = new Button (300,200,250,50, "TRY AGAIN");
const buttonLevel1 = new Button (300, 180, 250, 50, "1");
const buttonLevel2 = new Button (300, 320, 250, 50, "2");
const buttonLevel3 = new Button (300, 250, 250, 50, "3");



// function buttons() {
// rect(300, 200, 250, 50, 10);
// rect(300, 320, 250, 50, 10);
// fill(0, 0, 0);
// textSize(20);
// text("START", 390, 232);
// textSize(20);
// text("INSTRUCTIONS", 345, 352);
// }

// function buttonWin() {
// fill(255);
// rect(300, 200, 250, 50, 10);
// rect(300, 320, 250, 50, 10);
// fill(0, 0, 0);
// textSize(20);
// text("NEXT LEVEL", 365, 232);
// textSize(20);
// text("LEVELS", 380, 352);
// }

// function buttonLose() {
// fill(255);
// rect(300, 200, 250, 50, 10);
// rect(300, 320, 250, 50, 10);
// fill(0, 0, 0);
// textSize(20);
// text("TRY AGAIN", 340, 232);
// textSize(20);
// text("LEVELS", 302, 352);
// }

function resetlvl() {
dogY = 500;
dogX = 0;
gamesState = true;
}

function startScreen() {
gameBackground();
buttonStart.draw();
buttonInstructions.draw();
brick(brick0);
sheep(2000, 1110);
dog(300, 350);
}

function instructionScreen() {
gameBackground();
fill(255);
textSize(40);
text("Instructions:", 250, 200);
textSize(20);
text("Press space to jump and.. ", 250, 300);
text("click anywhere to go back", 300, 400);
// while (!mouseClicked) {

//  }
}

function levelScreen() {
gameBackground();
buttonLevel1.draw();
buttonLevel2.draw();
buttonLevel3.draw();
}

function gameScreen() {
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
state = "result";
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
sheep(1000, 1500);
sheep(1670, 960);
sheep(2000, 1500);
}

function gameScreen2() {
gameBackground();
brick(brick1);
barn(2000,1000);
wolf(1500,1400);
sheep(2000,1500);
sheep(1000,1110);

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
state = "result";
}

if (dogY < 500) {
velocityY = 0;
}
}

function gameScreen3() {
gameBackground();
brick(brick0);
brick(brick1);
barn(2000,1000);
sheep(1000,1110);
sheep(2000,1110);
wolf(700,1400);
wolf(2400,1400);
wolf(1500,1400);

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
state = "result";
}

if (dogY < 500) {
velocityY = 0;
}
}

// Handle jumping from P5 website
function keyPressed() {
if (keyCode === 32 && y === groundY) {
// Space bar and on the ground
velocityY = -jump; // Apply upward velocity
}
}

function loseScreen() {
gameBackground();
buttonTryAgain.draw();
}

function winScreen() {
gameBackground();
buttonNextLevel.draw();
buttonLevels.draw();
}

function draw() {
if (state === "start") {
startScreen();
} else if (state === "instruction") {
instructionScreen();
} else if (state === "game") {
gameScreen();
} else if (state === "result") {
loseScreen();
//winScreen();
} else if (state === "levels") {
levelScreen();
} else if (state === "game2") {
gameScreen2();
} else if (state === "game3") {
gameScreen3();
} 

if (mouseIsPressed) {
        
    if (buttonStart.hitTest(mouseX, mouseY)) {
        state = "game";
    } else if (buttonInstructions.hitTest(mouseX, mouseY)){
     state = "instruction";
   } else if (buttonLevels.hitTest(mouseX, mouseY)) {
      state = "levels";
   } else if (buttonLevel1.hitTest(mouseX,mouseY)) {
      state = "game";
   } else if (buttonLevel2.hitTest(mouseX,mouseY)) {
      state = "game2";
   } else if (buttonLevel3.hitTest(mouseX,mouseY)) {
      state = "game3";
   } else if (state === "game" && buttonNextLevel.hitTest(mouseX,mouseY)) {
      state = "game2";
   } else if (state === "game2" && buttonNextLevel.hitTest(mouseX,mouseY)) {
      state = "game3";
}    else if (buttonTryAgain.hitTest(mouseX, mouseY)) {
    state = "game";
}  
    }
}


let state = "game3";

function mouseClicked() {
if (state === "instruction") {
state = "start";
 

 
 }
// state === "result" &&
// mouseX >= 250 &&
// mouseX <= 500 &&
// mouseY >= 320 &&
// mouseY <= 370
 //) {
// state = "levels";
// } else if (state === "game")
// //bara för redigeringen
// state = "start";
// //startscreen
// else if (
// //start button
// state === "start" &&
// mouseX >= 250 &&
// mouseX <= 500 &&
// mouseY >= 200 &&
// mouseY <= 250
// ) {
// state = "levels";
// }
// // instructions button
// else if (
// state === "start" &&
// mouseX >= 250 &&
// mouseX <= 500 &&
// mouseY >= 320 &&
// mouseY <= 370
// ) {
// state = "instruction";
// }

// //levels screen
// //lvl 1
// else if (
// state === "levels" &&
// mouseX >= 300 &&
// mouseX <= 550 &&
// mouseY >= 180 &&
// mouseY <= 230
// ) {
// state = "game";
// }
// //lvl 2
// else if (
// state === "levels" &&
// mouseX >= 300 &&
// mouseX <= 550 &&
// mouseY >= 250 &&
// mouseY <= 300
// ) {
// state = "game2";
// }
// // lvl3
// else if (
// state === "levels" &&
// mouseX >= 300 &&
// mouseX <= 550 &&
// mouseY >= 320 &&
// mouseY <= 370
// ) {
// state = "game3";
// }

// //next lvl button
// else if (
// state === "result" && //måste dock va olika för win / lose
// mouseX >= 300 &&
// mouseX <= 550 &&
// mouseY >= 200 &&
// mouseY <= 250
// ) {
// state = "game2";
// } else if (
// state === "result" &&
// mouseX >= 300 &&
// mouseX <= 550 &&
// mouseY >= 320 &&
// mouseY <= 370
// ) {
if (state === "game2") {
state = "start";
} else if (state === "game3") {
state = "start";
} else if (state === "result") {
resetlvl();
state = "start";
}
}
 
