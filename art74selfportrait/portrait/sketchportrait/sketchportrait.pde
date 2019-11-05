function setup() {
  createCanvas(600,600);
  strokeWeight(4);
  
}
  function draw() {
    background("cyan");      //bg
    noStroke();                //face  
    fill("beige");
    rect(200,175,200,250,35,35,50,50);
    //ellipse(300,300,200,250);
    rect(263,400,70,90); //neck
    fill("green");
    rect(150,450,300,300,40,40,0,0); //torso-shirt
 
    noStroke(); //right-eye
    fill("white");
    ellipse(350,290,50,50);
    fill("black"); //right-pupil
    ellipse(350,285,10,10);
    
    noStroke(); //left-eye
    fill("white");
    ellipse(250, 290, 50, 50);
    fill("black"); //left-pupil
    ellipse(250,285,10,10);
    
    noStroke(); //beanie
    fill("green");
    rect(200,175,200,100,35,35,0,0);
    fill("black");
    rect(200,275,200,5); //stripe
    rect(200,265,200,5); //stripe
    rect(200,255,200,5); //stripe
    rect(200,245,200,5); //stripe
    rect(200,235,200,5); //stripe
    rect(200,225,200,5); //stripe
    rect(200,215,200,5); //stripe
    rect(200,205,200,5); //stripe
    
    noStroke();
    fill("orange");
    rect(263,450,70,25,0,0,40,40); //neck
  
    stroke("black");
    noFill();
    arc(300,400,50,20,PI+1,PI+HALF_PI); //mouth
    
  }
