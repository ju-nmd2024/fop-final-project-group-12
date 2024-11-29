let cloudY = 200;
let cloudX = 200;
let speed = 10;
let y = 500;
let x = 100;
let s = 0.3;
let c  = 0.3;
let b = 0.5;
const jump = 20;
const gravity = 1;
const groundY = 500;
let jumpheight= 2;
let velocityY = 2;
let brickX = 100;
let brickY = 100;
let dogY = 500;

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
  
  function barn(x,y) {
    

//barn 
fill(200,0,10);
rect(x* b + 700*b,y*b + 155* b,300*b,100*b);
rect(x*b + 748*b,y*b + 100*b,200*b,70*b);
triangle(x*b + 700*b,y*b + 158*b,x*b + 748*b,y*b + 100*b,x*b + 796*b,y*b+ 158*b);
fill(100,0,0);
rect(x*b + 730*b,y*b + 140*b,30*b,50*b,20*b);

push();
stroke(0,0,0);
strokeWeight(10*b);
line(x*b + 740*b,y*b + 100*b,x*b + 950*b,y*b + 100*b);
line(x*b + 750*b, y*b + 110*b,x*b + 960*b,y*b + 110*b);
line(x*b + 760*b,y*b + 120*b,x*b + 970*b,y*b + 120*b);
line(x*b + 770*b,y*b + 130*b,x*b + 980*b,y*b + 130*b);
line(x*b + 780*b,y*b + 140*b,x*b + 990*b,y*b + 140*b);
line(x*b + 790*b,y*b + 150*b,x* + 1000*b,y*b + 150*b);
line(x*b + 800*b,y*b + 160*b,x*b + 1010*b,y*b + 160*b);
line(x*b + 810*b,y*b + 170*b,x*b + 1020*b,y*b + 170*b);
 line(x*b + 740*b, y*b + 100*b, x*b + 690*b, y*b + 160*b);
 line(x*b + 740*b, y*b + 100*b, x*b + 807*b, y*b + 167*b);
 line(x*b + 950*b,y*b + 100*b,x*b + 1020*b,y*b + 170*b);

stroke(255);
line(x*b + 820*b,y*b + 180*b,x*b + 820*b,y*b + 250*b);
line(x*b + 820*b,y*b + 180*b,x*b + 995*b,y*b + 180*b);
line(x*b + 1000*b,y*b+ 180*b,x*b + 1000*b,y*b + 250*b);
line(x*b + 820*b,y*b + 180*b ,x*b + 1000*b ,y*b + 250*b);
fill(100,0,0);
rect(x*b + 730*b,y*b + 210*b,30*b,40*b);
pop();

  }

  function brick(x,y)  {
    fill(200,200,20);
    rect(x,y,100,20);
  }
  function cloud(x,y) {
    fill(255);
    
    ellipse(cloudX-80,cloudY-110,100,50);
    ellipse(cloudX-25,cloudY-130,100,60);
    ellipse(cloudX+30,cloudY-110,100,50);
    ellipse(cloudX-25,cloudY-100,100,30);
    
    ellipse(cloudX+400,cloudY-30,100,50);
    ellipse(cloudX+455,cloudY-50,100,60);
    ellipse(cloudX+510,cloudY-30,100,50);
    ellipse(cloudX+455,cloudY-20,100,30);
        
    }
    
function gameBackground() {
    background(190,190,255);
    fill(0, 255, 0);
  rect(0, 540, 900, 100);
  noStroke();
  //grass
  fill(150,255,60);
  rect(0,500,1500,100);
  //cloud
  cloud();
  
  }

  function buttons() {
    rect(250,200,250,50,10);
    rect(250,320,250,50,10);
    fill(0,0,0);
    textSize(20);
    text("START", 340,232);
    textSize(20);
    text("INSTRUCTIONS",302,352);
  }

  function buttonWin() {
    fill(255);
    rect(250,200,250,50,10);
    rect(250,320,250,50,10);
    fill(0,0,0);
    textSize(20);
    text("NEXT LEVEL", 340,232);
    textSize(20);
    text("LEVELS",302,352);
  }

  function buttonLose() {
    fill(255);
    rect(250,200,250,50,10);
    rect(250,320,250,50,10);
    fill(0,0,0);
    textSize(20);
    text("TRY AGAIN", 340,232);
    textSize(20);
    text("LEVELS",302,352);
  }

function startScreen() {
    gameBackground();
    buttons();
    }
    
    function instructionScreen() {
    gameBackground();
    fill(255);
    textSize(40);
    text("Instructions:", 250,200);
    textSize(20);
    text("Press space to jump and.. ",250,300);
    }
    
    function levelScreen() {
    background(255);
    }

    function gameScreen() {
       
            background(190, 190, 255);
            gameBackground();
            dog(x, y - 150);
            //code for gravity from Chat GPT
            if (x < 1500) { // as long as character is not there yet
           
             if (keyIsDown(39)) {
              x = x + speed;
            }
            if (keyIsDown(37)) {
              x = x - speed;
            }
          
            y += velocityY;
          
            if (y < groundY) { // If the character is in the air
              velocityY += gravity;   // Apply gravity
            } else {           // If the character is on the ground
              velocityY = 0;          // Stop vertical velocity
              y = groundY;     // Reset to ground level
            }
            } else { //call result screen when done
                state = "result";
            }
            
            if (dogY < 500) {
              velocityY = 0;
            }

            barn(2000,1000);
            brick(300,400);
            brick(500,350);
            sheep(1300,1500);
            sheep(1670,960);
            sheep(2300,1500);
  }


  function gameScreen2() {
    background(255,0,0);
  }

 function   gameScreen3() {
    background(0,255,0);
  }

    // Handle jumping from P5 website
function keyPressed() {
    if (keyCode === 32 && y === groundY) { // Space bar and on the ground
      velocityY = -jump; // Apply upward velocity
    }
}

    function resultScreen() {
gameBackground();
//om hunden har alla får:
buttonLose();
//else
buttonWin();
    }


    function draw() {
        if( state === "start") {
            startScreen();
        } else if ( state === "instruction") {
            instructionScreen();
        } else if ( state === "game") {
            gameScreen();
        } else if ( state === "result") {
            resultScreen();
        } else if ( state === "levels") {
            levelScreen();
        }
    }

    let state = "start";

function mouseClicked() {
   if (state === "instruction") {
       state = "start";
    } else if ( state === "result") {
        state = "start";
    } else if ( state === "game") //bara för redigeringen
        state = "start";

        if (state === "start" &&
            mouseX >= 250 && 
            mouseX <= 500 &&
            mouseY >= 200 && 
            mouseY <= 250
        ) {
            state = "game";
        }

        if (state === "start" &&
            mouseX >= 250 && 
            mouseX <= 500 &&
            mouseY >= 320 && 
            mouseY <= 370
        ) {
        state = "instruction";
         }
         
        if (state === "result" &&  //måste dock va olika för win / lose
            mouseX >= 250 && 
            mouseX <= 500 &&
            mouseY >= 200 && 
            mouseY <= 250
        ) {
            state = "game"; 
        }

        if (state === "result" &&
            mouseX >= 250 && 
            mouseX <= 500 &&
            mouseY >= 320 && 
            mouseY <= 370
        ) {
            state = "levels";
        }
      }

