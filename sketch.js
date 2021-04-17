var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
    movingRect=createSprite(400, 200, 50, 50);
    fixedRect=createSprite(600,200,50,80);
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
    fixedRect.debug=true;
    movingRect.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

  console.log(movingRect.x-fixedRect.x);

  drawSprites();
}