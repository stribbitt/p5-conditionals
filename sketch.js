var x = 0;
var speed = 5;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(255,0,0);
    
    //i wrote this to make background pink 
    if(mouseIsPressed){
        background(2,0,200);
    }
     stroke(255);
     strokeWeight(6);
     noFill();
     if(mouseY<150){
         fill(6,0,200);
     }
     else{
         noFill();
     }
     
     //a circle
     ellipse(x,200,100,100);
   
     if(x>width || x<0 ){
         console.log("CIRCLE IS OFF THE SCREEN")
         speed = speed * -1;
     }
     
     x = x + speed;
     console.log(x);
}


     