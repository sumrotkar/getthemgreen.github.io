var img1;
var medFont, regFont, semiFont;
var image1, image2,image3;
var arrow1;
var icon1;
var bar;
var logo;
function preload() {
  image1 = loadImage('assets/body.png');
  image2 = loadImage('assets/top.png');
  image3 = loadImage('assets/straw.png');
  arrow1 = loadImage('assets/Arrow01.png');
  icon1 = loadImage('assets/menu.png');
  bar = loadImage('assets/status_bar.png');
  logo = loadImage('assets/e-recycle.png');
  medFont = loadFont('assets/Montserrat-Medium.ttf');
  regFont = loadFont('assets/Montserrat-Regular.ttf');
  semiFont = loadFont('assets/Montserrat-SemiBold.ttf');

}

function setup() {
  // put setup code here
  createCanvas(375, 887);
    link = createA('howtodo.html', '');
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

  textSize(37)
  fill(128);
  textFont(medFont);
  textAlign(CENTER);
  text('PLASTIC CUPS', 44, 174,288,38);

  textSize(17)
  fill(128);
  textFont(semiFont);
  textAlign(CENTER);
  text('Material of each component:', 38, 217,300,22);

  fill(255);

  rect(196, 279, 147, 147,15);
  rect(196, 452, 147, 147,15);
  rect(196, 625, 147, 147,15);
  ellipseMode(CORNER);
  ellipse(30,289,127,128);
  ellipse(30,462,127,128);
  ellipse(30,635,127,128);

  image(arrow1,157,347,51,20);
  image(arrow1,157,520,51,20);
  image(arrow1,157,692,51,20);

  image(image1,64,323,59,60);
  image(image2,60,514,68,24);
  image(image3,80,668,27,61);

  textSize(17)
  fill(128);
  textFont(medFont);
  textAlign(LEFT);
  text('PET (polyethylene terephthalate) :completely recyclable', 215, 299,123,137);
  text('PET (polyethylene terephthalate) :completely recyclable', 215, 472,123,137);
  text('PP (Polypro -pylene): completely recyclable', 215, 657,117,104);


  img = createImg('assets/nextstep.png').parent(link);
  img.position(86, 812);
  img.size(203,50);
}
