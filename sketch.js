
function setup() {
  createCanvas(400,400);

  ball = createSprite(20,20,20,20)
}

function draw() 
{
  background(30);

  drawSprites()

  if (keyDown("left")) {
    ball.velocityX = -3 
    ball.velocityY = 0
  }
  if (keyDown("right")) {
    ball.velocityX = 3 
    ball.velocityY = 0
  }
  if (keyDown("up")) {
    ball.velocityY = -3 
    ball.velocityX = 0
  }
  if (keyDown("down")) {
    ball.velocityY = 3 
    ball.velocityX = 0 
  }


}



