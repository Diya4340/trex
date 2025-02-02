var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,120,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50


  //creating a ground sprite
  ground=createSprite(200,199,400,20)
  ground.addImage(groundImage)

}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(ground.x)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  // to make ground go backwards
  ground.velocityX=-5

  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}