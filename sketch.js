var x = 100;
circles = [1,2,3,4,5,6]

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(100);
  display();
}

function display(){
  fill(0,255,0);
  rect(x,100,100,100);
  x = x + 3;
  
  if(x >600){
    x = 0;
  }
  
  for(var i = 0; i < 5; i++){
    rect((i+1)*100, 100, circles[i], circles[i])
  }

}