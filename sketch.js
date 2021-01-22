const Engine=Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, sling;
var score=0



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;
	block1 = new Block(300,275,30,40);
	  block2 = new Block(330,275,30,40);
	   block3 = new Block(360,275,30,40);
		block4 = new Block(390,275,30,40);
		 block5 = new Block(420,275,30,40); 
		 block6 = new Block(450,275,30,40);
		  block7 = new Block(480,275,30,40);
		   block8 = new Block(330,235,30,40);
			block9 = new Block(360,235,30,40);
			 block10 = new Block(390,235,30,40);
			  block11 = new Block(420,235,30,40);
			   block12 = new Block(450,235,30,40)
			   polygon= new Polygon(350,200,20)
			   sling = new SlingShot(polygon.body,{x:200, y:50});
			   ground1= new Ground(400,350,450,20)
}

function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine)
	text("SCORE:"+score,740,40)
	
	drawSprites();
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 polygon.display()
sling.display()
ground1.display()
block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()
block11.score()
block12.score()
  
  
  
  }
  function mouseDragged(){
  
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

    }
  
  function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
    }
}
async function getTime(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
console.log(response)
var responseJSON =await response.json();
console.log(responseJSON);
var datetime = responseJSON.datetime
console.log(datetime)
// 2020-01-25T19:01:34957349
var hour = datetime.slice(11,13)
console.log(hour)
if(hour>06&&hour<18){

    bg="DAY.jpg"
}
else{
    bg="NIGHT.jpg"
}
backgroundImg = loadImage(bg);
}