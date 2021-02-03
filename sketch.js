const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage,platform,hero,rope,monster,monster2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;

function preload() {
//preload the images here
  backgroundImage = loadImage("GamingBackground.png");
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1300, 600);
  // create sprites here
  platform = new Plane();
  hero = new Hero();
  rope = new SupernaturalPower(hero.body,{x:250, y:170});
  monster = new Monster();
  monster2 = new Monster2();

  block1 = new Block(400,320);
  block2 = new Block(400,270);
  block3 = new Block(400,220);
  block4 = new Block(400,170);
  block5 = new Block(400,120);
  block6 = new Block(450,320);
  block7 = new Block(450,270);
  block8 = new Block(450,220);
  block9 = new Block(450,170);
  block10 = new Block(450,120);

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);

  background(backgroundImage);

  platform.display();
  hero.display();
  rope.display();
  monster.display();
  monster2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}
