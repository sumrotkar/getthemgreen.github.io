let button;
let bg2;
let loginbutton
function preload(){
bg2 = loadImage('assets/Sign In.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index3.html', '');}


function draw(){
  background(bg2);

  input = createInput('kevinmalone@dundermifflin.com');
    input.position(38,344);
    input.size(338, 56);
    input.style('font size','18');

    input = createInput('********');
    input.position(38,422);
    input.size(338, 56);
    input.style('font size','18');

  loginbutton = createButton('Login');
 loginbutton.position(38, 549);
 loginbutton.size(338, 56);
 loginbutton.style('font size','18');
 loginbutton.style('color','#ffffff');
 loginbutton.style('stroke','noStroke');
 loginbutton.style('background-color','#004B34');
 img2 = loginbutton.mousePressed().parent(link);


  // button = createButton('+ Add post');
  // button.position(260, 130);
  // button.size(150,50);
// img2 = loginbutton.mousePressed().parent(link);
  }
