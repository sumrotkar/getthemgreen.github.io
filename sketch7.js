let addnewreceipt;

function preload(){
bg5 = loadImage('assets/receiptlist.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index4.html', '')
}


function draw(){
  background(bg5);


  addnewreceipt = createButton('Add a New Receipt');
 addnewreceipt.position(30, 823);
 addnewreceipt.size(354, 56);
 addnewreceipt.style('font size','18');
addnewreceipt.style('color','#ffffff');
 addnewreceipt.style('stroke','noStroke');
 addnewreceipt.style('background-color','#004B34');
 img2 = addnewreceipt.mousePressed().parent(link);


  }
