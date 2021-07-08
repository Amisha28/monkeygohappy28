
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var survivalTime=0;
var bananaGroup;
var obstacleGroup;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
}



function setup() {
  createCanvas(600,400);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

ground=createSprite(400,350,900,10);
ground.velocityx= -4 ;
 ground.x = ground.width /2;
 console.log(ground.x);
    


}


function draw() {
background("white");
  
     if(keyDown("space")&&monkey.y <= 350){
    monkey.velocityY=-10;
  }
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ground);
            
  
  
  
stroke("black");
textSize(20);
 fill("black");
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50);
  
if(World.frameCount%200===0){
    food();
 }
  
  if(World.frameCount%300===0){
    obstacles();
  }
 
if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
    score=score+1;
      }
    
    
 if(obstacleGroup.isTouching(monkey)){
         gameState = END;
  
       }
     
     
     drawSprites();
}

function food (){
  banana=createSprite(670,Math.round(random(120,200)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  bananaGroup.add(banana);


}
function obstacles (){
  obstacle=createSprite(670,320,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
}
