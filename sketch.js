
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var boy,tree,House,mangoes,chain,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   boy=new Boy(150,700,-100,-100);
   tree=new Tree(800,400,100,100);
   House=new HOUSE(400,400,10,10) ;
   mangoes=new MANGO(600,450,30,30)
   Stone=new STONE (80,660,-30,-30);
   chain=new Chain(boy.body,{x:150,y:700});
   ground=new Ground(400,700,800,20)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 boy.display();
 tree.display();
 House.display();
 mangoes.display();
 Stone.display();
 chain.display();
 ground.display();
 
}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   chain.fly();
}





