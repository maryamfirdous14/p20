var fr,mr;


function setup() 
{
  createCanvas(800,400);

  fr=createSprite(200, 200, 50, 80);
  mr=createSprite(400,200,80,30);

  fr.shapeColor="blue"
  mr.shapeColor="pink"

  

  mr.velocityX= -2
  fr.velocityX= 2;
 

}

function draw() {
  background(0);  


 // mr.x=World.mouseX;
 // mr.y=World.mouseY;



  console.log(fr.x + "    fr.x")
  console.log(mr.x + "    mr.x")
  console.log(mr.x-fr.x + "     mr-fr");
  console.log(fr.x-mr.x + "fr-mr");
  console.log(mr.width/2 + fr.width/2 + "    sum of half width")


 
   if(mr.x-fr.x < mr.width/2 + fr.width/2 &&
     fr.x-mr.x < mr.width/2 + fr.width/2 &&
    fr.y-mr.y < mr.height/2 + fr.height/2 &&
     mr.y-fr.y < mr.height/2 + fr.height/2 )
   {
   fr.shapeColor="red"
   mr.shapeColor="red"
   
 mr.velocityX= mr.velocityX*(-1);
 fr.velocityX= fr.velocityX*(-1);

 
   }
 else
  {
   fr.shapeColor="green"
  mr.shapeColor="blue"
  }
  
  var deformation=0.5*weight*speed*speed/22509;

  if(deformation>180)
  {
    car.shapeColor=color("blue");
  }

  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color("red");
  }

  if(deformation<100)
  {
    car.shapeColor=color("pink");
  }
  Text("deformation:"+ Math.round(deformation),500,50)
  Text("speed:"+ Math.round(speed),500,70)
  Text("weight:"+ Math.round(weight),500,90)
}


drawSprites();