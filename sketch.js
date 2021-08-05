var path;
var runner;
var pathImg;
var runnerImg;
var leftboundary;
var rightboundary;

function preload() {
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  runner = createSprite(130, 320, 20, 20);
  runner.addAnimation("jakerunning", runnerImg);
  runner.scale = 0.08;
  leftboundary = createSprite(0, 0, 100, 800);
  rightboundary = createSprite(400, 0, 100, 800);
}
function draw() {
  background(0);
  edges = createEdgeSprites();
  runner.collide(leftboundary);
  runner.collide(rightboundary);
  runner.x = World.mouseX;
  path.velocityY = 4;
  if (path.y > 400) {
    path.y = height / 2;
  }
  drawSprites();
}
