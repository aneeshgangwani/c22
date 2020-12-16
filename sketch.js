
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground,ball;

function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;
  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(500,350,400,20,groundOptions);
  World.add(myworld,ground);
  console.log(ground.position.x);
  
  ball=Bodies.circle(500,200,30,{restitution:1.0});
  World.add(myworld,ball);
}

function draw() {
  Engine.update(myengine);
  var pos=ground.position;
  var bpos=ball.position;
  background(0);  
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);
  ellipseMode(RADIUS);
  ellipse(bpos.x,bpos.y,50,50);
}