var bullet,wall;
var weight,speed,thickness;
var Deformation
function setup() {
createCanvas(1800,400);
thickness=random (90,150)
speed = random(223,321);
weight =random (30,52);
bullet = createSprite(50,200,50,50);
wall = createSprite(1200,200,thickness,height/2);
bullet.velocityX = speed;
}

function draw() {
background(0,0,0); 

if(wall.x-bullet.x<(wall.width+bullet.width)/2 ){
 bullet.velocityX = 0;
  Damage = 0.5*speed*weight*speed/thickness*thickness*thickness;
  if(Damage<20){
   bullet.shapeColor = "green";
  }
 
  if(Damage>20){
    bullet.shapeColor = "red";
  }
}
drawSprites();
}