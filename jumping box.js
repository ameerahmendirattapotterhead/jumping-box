var canvas;
var music;
var yellowbox,tealbox,pinkbox,redbox,greenbox,purplebox;
var whitebox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    yellowbox=createSprite(730,580,120,30);
    yellowbox.shapeColor="yellow";

    tealbox=createSprite(600,580,120,30);
    tealbox.shapeColor="teal";

    pinkbox=createSprite(470,580,120,30);
    pinkbox.shapeColor="pink";
    
    redbox=createSprite(340,580,120,30);
    redbox.shapeColor="red";

    greenbox=createSprite(210,580,120,30);
    greenbox.shapeColor="green";

    purplebox=createSprite(80,580,120,30);
    purplebox.shapeColor="purple";

    //create box sprite and give velocity
    whitebox=createSprite(200,200,50,50);
    whitebox.shapeColor="white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    whitebox.velocityX=4;
    whitebox.velocityY=5;
    

    //add condition to check if box touching surface and make it box
    if(whitebox.isTouching(yellowbox)){
        whitebox.shapeColor="yellow";
      }
      if(whitebox.isTouching(tealbox)){
        whitebox.shapeColor="teal";
      }
      if(whitebox.isTouching(pinkbox)){
        whitebox.shapeColor="pink";
      }
      
     
     whitebox.bounceOff(yellowbox);
     whitebox.bounceOff(pinkbox);
     whitebox.bounceOff(redbox);
     whitebox.bounceOff(tealbox);
     whitebox.bounceOff(greenbox);
     whitebox.bounceOff(purplebox);

    drawSprites();
}
