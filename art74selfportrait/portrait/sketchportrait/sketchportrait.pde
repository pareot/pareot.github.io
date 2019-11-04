function setup() {
  createCanvas(600,600);
  
}
  function draw() {
    background("orange");      //bg
    noStroke();                //face  
    fill("beige");
    rect(200,175,200,250,35,35,50,50);
    //ellipse(300,300,200,250);
    rect(263,400,70,90); //neck
    rect(150,450,300,300,40,40,0,0); //torso
 
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
    fill("brown");
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
    fill("red");
    rect(263,450,70,25,0,0,40,40); //neck
  
  }
