const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var Dustbin,Paper,Base,rect1,rect2,rect3;


function setup(){
    var canvas = createCanvas(1500,680);

   engine = Engine.create();
   world = engine.world;

    Dustbin = new dustbin(1200,630,200,230);
    Paper = new paper(150,640,80,80);
    Base = new BaseClass(500,650,2000,20);
   
  
}

function draw(){
    background("white");
   
    Engine.update(engine);

    Dustbin.display();
    Paper.display();
    Base.display();
     
    
}
function keyPressed(){
if(keyCode===UP_ARROW){

    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:0.35,y:-0.5});
} 
}
