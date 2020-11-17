var b, bImg;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score
var edges;
var PLAY=1;
var END=0;
var gameState=PLAY;
var a,b,c;
var score=0;

function preload(){
  bImg=loadImage("b2.jpg");
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");     
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  a=loadSound("Explosion sound effect HD.mp3");
 ad=loadSound("ttsMP3.com_VoiceText_2020-11-15_17_19_20.mp3");
  c=loadSound("Level Up Sound Effect.mp3");
}



function setup() {
  
  createCanvas(650, 400);
  b=createSprite(0,0,100,200);
  b.addImage(bImg);
  b.scale=1.7;
  edges=createEdgeSprites();
  
  monkey=createSprite(60,350,30,30);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.17;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
    monkey.debug=false;
  monkey.setCollider("rectangle",0,0,monkey.width-200, monkey.height);
  
}


function draw() {
  document.getElementById("scorea").innerHTML="Bananas Collected:"+score;
    monkey.collide(edges);
  if(gameState===PLAY){
          console.log(gameState);
  b.velocityX=-5;
  if(b.x<0 ){
    b.x=200;
  }
      if(keyDown("space")&&monkey.y>280){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY+0.5;
    
    
  createObs();
    createB();
  
  if(monkey.isTouching(obstacleGroup)){
     a.play();
    console.log("gameover");
    monkey.velocity=0;
    gameState=END;
    ad.play();
   
  }
    
    if(monkey.isTouching(FoodGroup))
{
  
  c.play();
  FoodGroup.destroyEach();
  score=score+1;
}  
    
  }
  else if(gameState===END){
    
    console.log(gameState);
  }




    

drawSprites();
  
}

function  createObs()
{
  if(frameCount%60===0){
    obstacle=createSprite(600,368);
    obstacle.addImage( obstaceImage);
    obstacle.scale=0.155;
    obstacle.velocityX=-6;
    obstacle.lifetime=200;
  obstacle.debug=false;
    obstacle.setCollider("rectangle",0,0,obstacle.width-200,obstacle.height-110)
    obstacleGroup.add(obstacle);
  }
}

function  createB()
{
  if(frameCount%120===0){
    banana=createSprite(600,240);
     banana.addImage( bananaImage);
     banana.scale=0.1;
     banana.velocityX=-6;
    banana.lifetime=200;

   
    FoodGroup.add(banana);
  }
}




