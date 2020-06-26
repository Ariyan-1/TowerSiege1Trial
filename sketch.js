const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block9,block8,block10,block11,block12,block13,block14,block15,block16;
var sling,circle;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  //level two
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);

  //level three
  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);

  //top
  block16=new Block(390,155,30,40);

  sling = new SlingShot(circle.body,{x:400,y:200})

  circle=new Circle(sling,{x:400,y:200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  strokeWeight(4);
  //ground.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  sling.display();
  circle.display();
}

function mouseDragged() {
  Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
} 

function mouseReleased() {
  sling.fly();
}