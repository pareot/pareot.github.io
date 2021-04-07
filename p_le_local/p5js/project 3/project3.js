let f;
let k;
let h;
let r;
let counter;
let rev1;
let rev2;
let rev3;

function setup () {
  createCanvas(700, 700);
  //background(255);
  smooth();
  frameRate(12);

  f;
  k = 70;
  h = 25;
  r = 4.7;
  counter = 0;
  rev1 = PI;
  rev2 = PI/4*5;
  rev3 = PI;


  noStroke();
  fill(255);

  //draw mode
  ellipseMode(CENTER);
  //rectMode(CENTER);
}

function draw () {
  plClock();

  ////img for vid
  //if (frameCount < 201) {
  //  saveFrame("images/proj3-######.png");
  //} else {
  //  exit();
  //}

}

function plClock() {
  let wt = color(255, 255, 255);
  let br = color(139, 69, 19);
  let yl = color(255, 255, 0);
  let bl = color(0, 0, 255);
  let lm = color(255, 250, 205);
  let rd = color (255, 0, 0);


  let hr = hour();
  let mi = minute();
  let se = second();


  //draw a square as bg
  if ( h >= 19  ||  h <= 6 ) {
  plRect(width/2, height/2, width, height, yl, 255);
  } else {
    plRect(width/2, height/2, width, height, bl, 255);
  }


  //draw clock's body
  plRect(width/2, height/2 +k, width/2, height/2, br, 255);

  //draw clock's roof
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/2, height/4 +k,    br, 255);

  //draw deco - space between plank
  push();
  translate(width/2, height/2);
  plRect(0, -k*3, width/3, 3, 0, 255);
  plRect(0, -k*2, width/2, 3, 0, 255);
  plRect(0, -k, width/2, 3, 0, 255);
  plRect(0, 0, width/2, 3, 0, 255);
  plRect(0, +k, width/2, 3, 0, 255);
  plRect(0, +k*2, width/2, 3, 0, 255);
  plRect(0, +k*3, width/2, 3, 0, 255);
  pop();

  //draw face
  plCir(width/2, height/2 +k, width/2 -h*2, height/2 -h*2, wt, 255);
  plCir(width/2, height/2 +k, width/2 -k, height/2 -k, 0, 200);

  //scaling
  push();
  translate(width/2, height/4);
  scale(1, 0.5);
  plCir(0, 0, -k, -k, 0, 255);
  plCir(0, 0, -k-10, -k -10, lm, 200);
  pop();

  //draw rotating arms
  //minute arm
  push();
  translate(width/2, height/2 +k);
  plArms(0, 0, 50 +k/2, 50 +k/2, 5, rev1);
  rev1++;
  pop();

  //hour arm
  push();
  translate(width/2, height/2 +k);
  plArms(0, 0, 50 +k/7, 50 +k/7, 7, mi);
  //draw blue circle
  translate(50 +k/7 -10, 50 +k/7 -10);
  plCir(0, 0, width/2 -k*r -3, height/2 -k*r -3, bl, 255);

  //draw smaller, white circle
  rotate(se);
  //plArms(0, 0,   0, +20,   3, rev3);
  plCir(0, +20, width/2 -k*r -10, height/2 -k*r -10, wt, 255);
  rev3--;

  //mechanic for hour arm
  for (let i = 0; i <= 200; i++) {
    if ( (counter % 60) == 0) {
      rev2--;
      counter = 0;
    } else {
      counter++;
      rev2+=0;
    }
  }
  pop();

  //draw deco - sun
  //change sun accordingly to moon
  if ( h >= 19  ||  h <= 6 ) {
  plCir(width/2, height/2 +k, width/2 -k*r +k/2, height/2 -k*r +k/2, yl, 200);
  plCir(width/2, height/2 +k, width/2 -k*r, height/2 -k*r, rd, 255);
  } else {
    plCir(width/2, height/2 +k, width/2 -k*r +k/2, height/2 -k*r +k/2, bl, 200);
  plCir(width/2, height/2 +k, width/2 -k*r, height/2 -k*r, wt, 255);
  }



  //draw roof's cast shadow
  //plQd(width/4 -k, height/4 +k,    width/2, +k,    width/4*3, height/4 +k,   width/4*3, height/4 +k*3,   0, 80);
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/2, height/4 +k,    0, 80);
  plQd(width/4, height/4 +k,    width/2, height/2,    width/4*3, height/4 +k*4,    width/4*3, height/4+k,    0, 80);


  //draw left beam
  plQd(width/4 -k, height/4 +k,    width/2, 0,    width/2, +k,    width/4, height/4 +k,    br, 255);


  //draw right beam
  //plQd(width/2, +k,    width/2, 0,    width/4*3 +k, height/4 +k,    width/4*3, height/4 +k,    br, 255);
  push();
  translate(width/2, 0);
  rotate(PI/4);
  plQd(0, 0,    350, 0,    300, 50,   0, 50,    br, 255);
  pop();
}

  //*****************
 //custom functions
//****************

//draw a triangle roof
function plRoof ( topX,  topY,  leftX,  leftY,  rightX,  rightY,  rf) {
  fill(rf);
  triangle(0 +topX, 0 +topY, 0 +leftX, 0 +leftY, 0 +rightX, 0 +rightY);
}

//draw a rectangle body shape
function plRect ( xpos,  ypos,  wAdj,  hAdj,  rec,  opa) {
  rectMode(CENTER);
  fill(rec, opa);
  rect(0 +xpos, 0 +ypos, 0 +wAdj, 0 +hAdj);
}

//draw a circle face
function plCir ( xpos,  ypos,  wAdj,  hAdj,  f,  opa) {
  noStroke();
  fill(f, opa);
  ellipse(0 +xpos, 0 +ypos, 0 +wAdj, 0 +hAdj);
}

//draw a quad
function plQd( xpos1,  ypos1,  xpos2,  ypos2,  xpos3,  ypos3,  xpos4,  ypos4,  b,  opa) {
  fill(b, opa);
  noStroke();
  quad(xpos1, ypos1, xpos2, ypos2, xpos3, ypos3, xpos4, ypos4);
}

//set numbers for display funct
function plNums(s,  locx,  locy,  n) {
  fill(n);
  text(s, locx, locy);
}

function plArms ( xpos1,  ypos1,  xpos2,  ypos2,  stWei,  theta) {
  rotate(0 +theta);
  // strokeWeight(stWei);
  // stroke(255);
  noStroke();
  line(0 +xpos1, 0 +ypos1, 0 +xpos2, 0 +ypos2);
}
