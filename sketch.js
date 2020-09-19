
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	//Create the Bodies Here.
	paperSprite=createSprite(100,500,30,30);
	paperSprite.shapeColor=color("DARKORCHID");

	wall1=createSprite(500,620,20,100);
    wall1.shapeColor=color("HOTPINK");

    wall2=createSprite(700,620,20,100);
    wall2.shapeColor=color("HOTPINK");

    wall3=createSprite(600,660,200,20);
	wall3.shapeColor=color("HOTPINK");

	ground=createSprite(400,680,800,20);
	ground.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:true,
		restitution:0.3,
		friction:0.5,
		density:1.2
	};

	paper = Bodies.circle(100,650,10,paper_options);
	
	World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
background(0);

if(paperSprite.isTouching(wall3)){
	Matter.Body.setStatic(paper, true);
}

paperSprite.x=paper.position.x;
paperSprite.y=paper.position.y;
ellipseMode(RADIUS);

drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
	Matter.Body.setStatic(paper, false);
	Matter.Body.applyForce(paper,{x:paper.position.x,y:paper.position.y},{x:13,y:-13});
	}
	
	}


