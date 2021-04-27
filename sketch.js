var background , backgroundImg
var cat , catImg
var mouse , mouseImg

function preload() {
    //load the images here
    backgroundImg=loadImage("garden.png")
    cat1Img=loadImage("cat1.png")
    mouse1Img=loadImage("mouse1.png")
    mouse2Img=loadImage("mouse2.png")
    mouse3Img=loadAnimation("mouse3.png")
    mouse4Img=loadImage("mouse4.png")
    cat2Img=loadImage("cat2.png")
    cat3Img=loadAnimation("cat3.png")
    cat4Img=loadImage("cat4.png")
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
background=createSprite(800,800,0,0)
background.addImage(backgroundImg)

cat=createSprite(200,200,20,30)

mouse=createSprite(200,300,20,30)

}

function draw() {

    background(backgroundImg);



    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x <cat.width/2+mouse.width/2
        && cat.x-mouse.x<cat.width/2+mouse.width/2
        && mouse.y-cat.y<cat.height/2+mouse.height/2
        && mouse.y-cat.y<cat.height/2+mouse.height/2){

            cat.addImage(cat4Img)
            mouse.addImage(mouse4Img)
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation(mouse3img)
}
if(keyCode === RIGHT_ARROW){
cat.addAnimation(cat3Img)
}

}
