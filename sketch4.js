let button;
function preload(){
bg4 = loadImage('assets/new receipt.png');
}
function setup() {
  createCanvas(414,896);
link=createA('index5.html', '');}


function draw(){

  background(bg4);

  input = createInput('Kevin Malone');
    input.position(38,193);
    input.size(338, 56);
    input.style('font size','18');

    input = createInput('kevinmalone@dundermifflin.com');
    input.position(38,270);
    input.size(338, 56);
    input.style('font size','18');

    input = createInput('+510 836 9392');
    input.position(38,347);
    input.size(338, 56);
    input.style('font size','18');

  addnewreceipt = createButton('Add a New Receipt');
 addnewreceipt.position(30, 823);
 addnewreceipt.size(354, 56);
 addnewreceipt.style('font size','18');
addnewreceipt.style('color','#ffffff');
 addnewreceipt.style('stroke','noStroke');
 addnewreceipt.style('background-color','#004B34');
 img2 = addnewreceipt.mousePressed().parent(link);


  // button = createButton('Save');
  // button.position(260, 130);
  // button.size(150,50);
  // img4 = button.mousePressed().parent(link);
  }
