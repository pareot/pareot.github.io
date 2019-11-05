function setup() {
  createCanvas(600,600);
  strokeWeight(4);
  
}
  function draw() {
    background("silver");      //bg
    stroke("black"); //setup for face                 
    fill("beige");
    rect(200,175,200,250,35,35,25,25); //face
    //ellipse(300,300,200,250);
    rect(263,425,70,25); //neck
    stroke("black");
    fill("green");
    rect(150,450,300,300,40,40,0,0); //torso shirt
 
    noStroke(); //right eye
    fill("black");
    ellipse(350,290,50,50);
    fill("yellow"); //right pupil
    ellipse(350,285,20,20);
    fill("yellow"); //right iris
    ellipse(350,285,10,10);
    stroke("black"); //right eye lash
    noFill();
    arc(350,290,50,50,PI+QUARTER_PI,HALF_PI+QUARTER_PI); 
    
    noStroke(); //left eye
    fill("black");
    ellipse(250, 290, 50, 50);
    fill("yellow"); //left pupil
    ellipse(250,285,20,20);
    fill("black"); //left iris
    ellipse(250,285,10,10);
    stroke("black"); //left eye lash
    noFill();
    arc(250,290,50,50,0+QUARTER_PI,0-QUARTER_PI); 
    
    noStroke();
    fill("black");
    //arc(363,209,100,100,PI+QUARTER_PI,0+QUARTER_PI); //right bang
    triangle(333,175, 193,259, 195,170); //left bang 1
    triangle(333,175, 283,175, 255,259); //left bang 2
    
    triangle(333,175, 415,259, 393,155); //right bang 1
    
    
    //noStroke(); //beanie
    //fill("green");
    //rect(200,175,200,100,35,35,0,0);
    //fill("black");
    //rect(200,275,200,5); //stripe
    //rect(200,265,200,5); //stripe
    //rect(200,255,200,5); //stripe
    //rect(200,245,200,5); //stripe
    //rect(200,235,200,5); //stripe
    //rect(200,225,200,5); //stripe
    //rect(200,215,200,5); //stripe
    //rect(200,205,200,5); //stripe
    
    noStroke();
    fill("orange");
    rect(253,452,80,46,0,0,40,40); //inner shirt
    quad(288,490, 305,490, 305,600, 295,600); //inner shirt lower
    stroke("black");
    fill("green");
    triangle(253,453,253,500,288,500); //left collar
    triangle(333,452,343,500,300,500); //right collar
    line(285,500,295,600); //left button line
    line(305,500,305,600); //right button line
  
    stroke("black");
    noFill();
    arc(300,400,50,20,PI+1,PI+HALF_PI); //mouth
    
    stroke("black");
    noFill();
    line(300,320,300,340); //nose bridge
    arc(300,350,20,20,PI+HALF_PI,HALF_PI); //nose
  }
