const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stopper;
var divisionHeight=300;
var particles = []
var plinkos = []
var divisions = []
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  stopper=new Ground(240,780,480,10);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  stopper.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(480/8,480/12),10,10))
  }
  for(var j=40;j<=480;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j=15;j<=470;j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j=5;j<=460;j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j=40;j<=450;j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }
  for(var k=0;k<=480;k=k+80){
    divisions.push(new Ground(k,divisionHeight/2,10,divisionHeight));
  }
  for(var j=0;j<particles.length;j++){
  particles[j].display();
  }
  for(var k=0;j<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  drawSprites()
}