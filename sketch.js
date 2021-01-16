const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,40,300,20);
    


    bird = new Bird(100,170,50,50);
    bird1 = new Bird(150,170,50,50);
    bird2 = new Bird(200,170,50,50);
    bird3 = new Bird(250,170,50,50);
    bird4 = new Bird(300,170,50,50);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:100, y:50});
    slingshot1 = new SlingShot(bird1.body,{x:150, y:50});
    slingshot2 = new SlingShot(bird2.body,{x:200, y:50});
    slingshot3 = new SlingShot(bird3.body,{x:250, y:50});
    slingshot4 = new SlingShot(bird4.body,{x:300, y:50});
}

function draw(){
    
        background('orange');
    
    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    
bird.display();
    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    //log6.display();
    slingshot.display(); 
    slingshot1.display()   
    slingshot2.display()  
    slingshot3.display()  
    slingshot4.display() 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}



