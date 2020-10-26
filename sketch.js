//Create variables here
var dogi1,dogi2
var dog,foodS

function preload()
{
  //load images here
  dogi1=loadImage("images/dog1.png")
  dogi2=loadImage("images/dog2.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(dogi1)
  dog.scale=0.15;
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  textSize(20)
}


function draw() {  
background(rgb(255, 240, 40))
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogi2)
}
  drawSprites();
  fill("red")
  text("Remaining Food Stock; ",+foodS,170,200)
  text("Press up Arrow key to feed tommy milk",130,10,300,20)
  //add styles here

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  } else {
    x=x-1
  }
  database.ref('/').update({food:x})
}
