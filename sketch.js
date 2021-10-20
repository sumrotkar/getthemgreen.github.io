let getstarted;
let welcome;
let loginbutton;
function preload(){
  welcome = loadImage('assets/Welcome.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index2.html', '');
link2=createA('index3.html','');
}

function draw(){
  background(welcome);
  noStroke();
  // input = createInput('Phillip');
  //   input.position(38,567);
  //   input = createInput('********');
  //   input.position(120,400);

  loginbutton = createButton('Login');
  loginbutton.position(38, 643);
  loginbutton.size(338,56);
  loginbutton.style('font size','18');
  loginbutton.style('color','#004B34');
  img = loginbutton.mousePressed().parent(link);


   getstarted = createButton('Get Started');
  getstarted.position(38, 567);
  getstarted.size(338, 56);
  getstarted.style('font size','18');
  getstarted.style('color','#ffffff');
  getstarted.style('stroke','noStroke');
  getstarted.style('background-color','#004B34');
  img2 = getstarted.mousePressed().parent(link);

  }
