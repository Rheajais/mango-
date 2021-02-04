
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stoneObj,mango1, mango2, mango3, mango4,mango5,mango6,mango7,mango8,mango9,mango10,tree,ground,boy,slingshot;

function preload()
{
	//boyImg=loadImage('image/boy.png');
}

function setup() {
	createCanvas(1200, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//ground=new Ground(200,300,20,20);
	stoneObj=new Stone(60,450,40,40);
	//stoneObj.shapeColor="white";
	tree=new Tree(750,390,750,750);
	//boy=new Boy(100,10,0,0);
	mango1=new Mango(600,400,50,60); 
	boy=new Boy(50,350,150,500);
	mango2=new Mango(700,150,50,50);
	mango3=new Mango(750,200,50,50);
	mango4=new Mango(850,300,50,50);
	mango5=new Mango(900,275,50,50);
	mango6=new Mango(550,375,50,50);
	mango7=new Mango(1000,250,50,50);
	mango8=new Mango(650,100,50,50);
	mango9=new Mango(1000,300,50,50);
	mango10=new Mango(500,300,50,50);
	//mango7.shapeColor="blue";
	
	slingshot = new Sling(boy.body,{x:75, y:30});



	//tree.shapeColor="white";
	//mango1=


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");

stoneObj.depth=boy.depth;
stoneObj.depth=stoneObj.depth+1;


  stoneObj.display();
 tree.display();
 mango1.display();
 boy.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango6.display();
 mango7.display();
 slingshot.display();    

 function mouseDragged(){
    Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


  
  drawSprites();
 
}



