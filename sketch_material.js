var img1;
var medFont, regFont, semiFont;
var image1, image2, image3, image4;
var icon1;
var bar;
var logo;
function preload(){
  image1 = loadImage('assets/cups.png');
  image2 = loadImage('assets/papercup.png');
  image3 = loadImage('assets/styrofoam.png');
  image4 = loadImage('assets/metal.png');
  icon1 = loadImage('assets/menu.png');
  bar = loadImage('assets/status_bar.png');
  logo = loadImage('assets/e-recycle.png');
  medFont = loadFont('assets/Montserrat-Medium.ttf');
  regFont = loadFont('assets/Montserrat-Regular.ttf');
  semiFont = loadFont('assets/Montserrat-SemiBold.ttf');
}

function setup() {
  // put setup code here
  createCanvas(375, 812);
  link = createA('disassemble.html', '');
}

function draw() {
  // put drawing code here
  background(237,237,237);
  fill(0,163,153);
  noStroke();
  rect(0, 0, 375, 133);
  image(bar,0,0,375,45);
  image(logo,87,75,202,28);
  image(icon1,24,73,30,30);

  textSize(17)
  fill(128);
  textFont(medFont);
  textAlign(CENTER);
  text('Choose the type of cup:', 37, 184,315,22);

  fill(255);
  rect(30, 259, 147, 147,15);
  rect(198, 259, 147, 147,15);
  rect(30, 434, 147, 147,15);
  rect(198, 434, 147, 147,15);

  textSize(18)
  fill(128);
  textFont(medFont);
  text('PLASTIC', 65, 373,76,20);
  text('PAPER', 240, 373,63,20);
  text('STYROFOAM', 45, 546,116,20);
  text('METAL', 240, 546,63,20);

  image(image2,244,290,55,67);
  image(image3,81,475,44,53);
  image(image4,249,474,45,54);


  img = createImg('assets/cups.png').parent(link);
  img.position(81, 279);
  img.size(45,78);


}
