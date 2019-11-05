function setup() {
  createCanvas(600,600);
  strokeWeight(4);
  
}
  function draw() {
    background("silver");      //bg
    noStroke(); //setup for face                 
    fill("beige");
    rect(200,175,200,250,35,35,25,25); //face
    //ellipse(300,300,200,250);
    rect(263,400,70,90); //neck
    stroke("black");
    fill("green");
    rect(150,450,300,300,40,40,0,0); //torso shirt
 
    noStroke(); //right eye
    fill("white");
    ellipse(350,290,50,50);
    fill("black"); //right pupil
    ellipse(350,285,10,10);
    stroke("black");
    noFill();
    arc(350,290,50,50,PI+QUARTER_PI,HALF_PI+QUARTER_PI); //eye lash
    
    noStroke(); //left eye
    fill("white");
    ellipse(250, 290, 50, 50);
    fill("black"); //left pupil
    ellipse(250,285,10,10);
    stroke("black");
    noFill();
    arc(250,290,50,50,0+QUARTER_PI,0-QUARTER_PI);
    
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
    rect(263,452,70,46,0,0,40,40); //inner shirt
    stroke("black");
    fill("green");
    triangle(263,452,253,500,300,500); //left collar
    triangle(333,452,343,500,300,500); //right collar
  
    stroke("black");
    noFill();
    arc(300,400,50,20,PI+1,PI+HALF_PI); //mouth
    
    stroke("black");
    noFill();
    line(300,320,300,340); //nose bridge
    arc(300,350,20,20,PI+HALF_PI,HALF_PI); //nose
  }
