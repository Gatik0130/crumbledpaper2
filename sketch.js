
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	dustbin1= new Dustbin(1000,590,200,20)
	dustbin2= new Dustbin(1110,600,20,100)
	dustbin3= new Dustbin(890,600,20,100)
	paper= new Paper(200,550,40)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  dustbin2.display()
  dustbin3.display()
  dustbin1.createImage()
  paper.display()
  rectMode(CENTER)
  fill("brown")
rect(ground.position.x,ground.position.y,width,10)
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-75})
}

