
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, paper;
function preload() {
binImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20)

	line1 = new Dustbin(800, 355, 15, 150);
	line2 = new Dustbin(880, 382, 145, 15);
	line3 = new Dustbin(950, 355, 15, 150);

	paper = new Paper(100, 100, 50);

// please leave the mouse
	Engine.run(engine);

}

function draw() {
	console.log(paper.body.position)
	background(255);

	//keyPressed();

	//rectMode(CENTER);


	Engine.update(engine);

	ground.display();
	line1.display();
	line2.display();
	line3.display();
	paper.display();
    image(binImg,775,180,200,220);

	drawSprites();

}

function keyPressed(){
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:500,y:-450});
    }
  }