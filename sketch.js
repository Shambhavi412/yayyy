const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1,pig2;
var log1, log5, log3, log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    /*box1 = new Box2(170,150,70,50);
    box2 = new Box2(200,50,50,100);
    //box2 = new Box(240,100,50,100);
    ground = new Ground2(200,380,400,20)*/
    //ground.scale = 0.02;

   // ground.shapeColor = "blue";


   ground = new Ground2(600,height,1200,20)
      box1 = new Box2(700,320,70,70); 
      box2 = new Box2(920,320,70,70); 
      pig1 = new Pig(810, 350, 70, 50); 
      log1 = new Log(810,260,300, PI/2); 
      box3 = new Box2(700,240,70,70); 
      box4 = new Box2(920,240,70,70); 
      pig2 = new Pig(810, 220, 70, 50); 
      log3 = new Log(810,180,300, PI/2); 
      box5 = new Box2(810,160,70,70); 
      log4 = new Log(760,120,150, PI/7); 
      log5 = new Log(870,120,150, -PI/7);
      bird = new Bird(100,100);
      //box6 = new Box(100,100,20,20);

}

function draw(){
    background(0);
    Engine.update(engine);
   /* console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    //box2.display();
    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log3.display();
    log4.display();
    log5.display();

    bird.display();
    
}