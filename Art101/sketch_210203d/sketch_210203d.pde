void setup() {
  size(300, 150);
  background(0, 50, 100);
  smooth();
  Float a = 0.0;
  float inc = TWO_PI/10.0;
  println(" The inc = " + inc);
  stroke(255, 0, 0);
  
  for (int i=0; i<300; i+=4) {
    line(i, 50, i, 50+sin(a)*40.0);
    println(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;
  }
}
