let cancel;
let generateQRCode;

function preload(){
bg5 = loadImage('assets/the receipt.png');
}
function setup() {
  createCanvas(414, 896);
link=createA('index6.html', '');
}


function draw(){
  background(bg5);


  cancel = createButton('Cancel');
cancel.position(30, 813);
  cancel.size(114,56);
// cancel.style('font size','18');
  // img = cancel.mousePressed().parent(link);


  generateQRCode = createButton('Generate QR Code');
 generateQRCode.position(160, 813);
 generateQRCode.size(224, 56);
 generateQRCode.style('font size','18');
generateQRCode.style('color','#ffffff');
generateQRCode.style('stroke','noStroke');
generateQRCode.style('background-color','#004B34');
 img2 = generateQRCode.mousePressed().parent(link);

//   cancel = createButton('Cancel');
// cancel.position(38, 643);
//   cancel.size(338,56);
// cancel.style('font size','18');
//   img = cancel.mousePressed().parent(link);


//    generateQRCode = createButton('Generate QR Code');
//   generateQRCode.position(160, 813);
//   generateQRCode.size(338, 56);
//   generateQRCode.style('font size','18');
// generateQRCode.style('color','#ffffff');
// generateQRCode.style('stroke','noStroke');
// generateQRCode.style('background-color','#004B34');
//   img2 = generateQRCode.mousePressed().parent(link);


  }
