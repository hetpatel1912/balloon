var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  ballo0n1=createSprite(250,450,150,150);
  balloon1.addAnimation("hotAirBalloon",balloonImage1);
  balloon1.scale=0.8;

  textSize(20);
  abc = database.ref("position")
  abc.on("value",readPosition) 
}

// function to display UI
function draw() {
  background(bg);


  if(keyDown(LEFT_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    writePosition(-1,0)
  }
 if(keyDown(RIGHT_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    writePosition(1,0)
  }
   if(keyDown(UP_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    writePosition(0,-1)
    balloon1.scale = balloon1.scale-0.001
    // if(balloon1.y>350){
    // balloon1.scale = 0.7
    // }
    // if(balloon1.y>250){
    //   balloon1.scale = 0.6
    //   }
    //   if(balloon1.y>150){
    //     balloon1.scale = 0.5
    //     }
    //     if(balloon1.y>50){
    //       balloon1.scale = 0.4
    //       }
  }
   if(keyDown(DOWN_ARROW)){
    balloon1.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    writePosition(0,1)
  }
  
  

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function writePosition(x,y){
  database.ref('position').set({
    'x': balloon1.x + x ,
    'y': balloon1.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  balloon1.x = position.x;
  balloon1.y = position.y;
}