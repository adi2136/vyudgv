var gr,block1,block2,block3,block4,block5,block6,block7,block8,block9;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine;
var bgImage;
function preload()
{
	bgImage=loadImage("images/GamingBackground.png")
}

function setup() {
	createCanvas(1500, 600);

  
	engine = Engine.create();
	world = engine.world;
	gr=new Ground (335,350,500,20)
   
   
    block1=new Blocks(300,327,30,30)
	block2=new Blocks(330,327,30,30)
	block3=new Blocks(360,327,30,30)
	block4=new Blocks(390,327,30,30)
	block5=new Blocks(300,307,30,30)
	block6=new Blocks(330,307,30,30)
	block7=new Blocks(360,307,30,30)
	block8=new Blocks(390,307,30,30)

	block10=new Blocks(330,307,30,30)
	block12=new Blocks(360,307,30,30)
	block13=new Blocks(300,307,30,30)
	block14=new Blocks(300,287,30,30)
	block15=new Blocks(330,287,30,30)
	
	block17=new Blocks(300,297,30,30)
	block18=new Blocks(330,297,30,30)
	block19=new Blocks(360,297,30,30)
	block20=new Blocks(390,297,30,30)
	block21=new Blocks(4390,297,30,30)

    b=new Ball(130,200,200,100)
    LA=new Monster(450,300,150,150)
    r=new Rope(b.body,{x:130, y:200});

	Engine.run(engine);
  
}


function draw() {
 
  background("lightBlue")
 
  gr.display();
  
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block10.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
LA.display()
 
  b.display();
 r.display();



 
 
}
function mouseDragged(){
	Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    r.fly();
}
function keyPressed(){
if(keyCode===32){
    r.attach(b.body)
}
}


