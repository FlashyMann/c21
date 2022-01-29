var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius=40; 
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;
	var ball_options= {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}



	//Create the Bodies Here.
ball=Bodies.circle(260,100,radius/2,ball_options);
World.add(world,ball)

ground=new Ground(width/2,670,width,20);
	left=new Ground(1100,600,20,120);
	right=new Ground(1350,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  Engine.run(engine);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  right.display();
  left.display();
  ground.display();
}

function keyPressed(){
	if(keyDown("up_arrow")){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

