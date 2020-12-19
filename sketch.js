
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime
var ground 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(700,350)  
  
monkey = createSprite (80,285,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1  

ground = createSprite(400,350,900,75)
ground.velocityX = -15
ground.x = ground.width/2
console.log (ground.x)
 
  
foodGroup = new Group ();
obstacleGroup = new Group ();
  
  
survivalTime = 0  
  
  
}


function draw() {
background("turquoise") 
  
  
if (keyDown("space") && monkey.y >= 100){
  monkey.velocityY = -12
  
} 
monkey.velocityY = monkey.velocityY + 0.8  
  
if (ground.x < 400) {
  ground.x = ground.width / 2;
  
}
  
monkey.collide(ground)

  
  
monkey.collide(ground);
console.log(frameCount);
stroke(0);
fill(0);
textSize(20);
survivaltime=Math.ceil(frameCount/frameRate());
text("survival time="+survivaltime,250,50);
spawnObstacles();
spawnBananas();
  

 drawSprites (); 
  
}


function spawnObstacles () {
  
  if (frameCount % 300 === 0){
    var obstacle = createSprite (600,295,30,30)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -8  
    
    obstacle.lifetime = 400
    
    obstacleGroup.add(obstacle)
  }
  
}

function spawnBananas () {
  if (frameCount % 80 === 0){
    var banana = createSprite (600,100,10,10)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -8  
    
    banana.lifetime = 400
    
    foodGroup.add(banana)
  }
}






