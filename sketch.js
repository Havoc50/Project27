const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var force = 0;
var roof;
var c1, c2, c3, c4, c5;

function preload()
{
	
}

function setup() {

	createCanvas(1800, 900);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(700, 700, 100);
	bob2 = new Bob(800, 700, 100);
	bob3 = new Bob(900, 700, 100);
	bob4 = new Bob(1000, 700, 100);
	bob5 = new Bob(1100, 700, 100);

	roof = new Roof(900, 200, 500, 50);

	c1 = new Rope(bob1.body,{x:700,y:200});
	c2 = new Rope(bob2.body,{x:800,y:200});
	c3 = new Rope(bob3.body,{x:900,y:200});
	c4 = new Rope(bob4.body,{x:1000,y:200});
	c5 = new Rope(bob5.body,{x:1100,y:200});

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(255);
  

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	c1.display();
	c2.display();
	c3.display();
	c4.display();
	c5.display();

	keyPressed();

	drawSprites();
 
}

function keyPressed(){ 

	if(force === 0){

		if(keyCode === UP_ARROW){ 
			Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500, y:0}); 
			force = 1;
		} 
		
	}

} 