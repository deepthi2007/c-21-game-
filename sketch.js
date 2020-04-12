
var Rect1, Rect2;
var ball1,ball2;

function setup() {
  createCanvas(900,800);
  Rect1 = createSprite(100, 100, 50, 80);
  Rect1.shapeColor = "green";
  Rect2 = createSprite(150,150,80,30);
  Rect2.shapeColor = "green";

  ball1 = createSprite(400,150,50,80);
  ball1.shapeColor ="blue";
  ball2= createSprite(400,450,50,80);
  ball2.shapeColor = "blue";
  ball1.velocityY = 2;
  ball2.velocityY = -2;

}

function draw() {
  background(0,0,0);

  Rect1.x = World.mouseX;
  Rect1.y = World.mouseY; 

  console.log (isTouching(Rect2,Rect1));
  if(isTouching(Rect1,Rect2)){
    Rect2.shapeColor = "red";
    Rect1.shapeColor = "red";
  }
  else{
    Rect1.shapeColor = "green";
    Rect2.shapeColor= "green";
  }
  bounceoff(ball1,ball2);
  drawSprites();
}
function isTouching (object1,object2){
  if(object2.y-object1.y<object2.height/2+object1.height/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.x-object2.x<object2.width/2+object1.width/2)
    {
      return true;
    }
    else{
      return false;
    }  
}
function bounceoff(fixedRect,movingRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}