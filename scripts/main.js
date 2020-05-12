function drawTutorial(canvasElement, colorString) {
  let ctx = canvasElement.getContext('2d');
  ctx.fillStyle = colorString;
  ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

  return canvasElement.toDataURL('image/png', 1);
}

let canvas = document.getElementById('tutorial');
let dataURL;
let copy = document.getElementById('copy');
let canvasBase64 = document.getElementById('canvasBase64');
let widthInput = document.getElementById('width-input');
let heightInput = document.getElementById('height-input');
let colorInput = document.getElementById('color-input');
widthInput.value = canvas.width;
heightInput.value = canvas.height;
dataURL = drawTutorial(canvas, colorInput.value);
canvasBase64.value = dataURL;

copy.onclick = function() {
  canvasBase64.select();
  document.execCommand('copy');
};

widthInput.oninput = function() {
  canvas.width = widthInput.value;
  dataURL = drawTutorial(canvas, colorInput.value);
  canvasBase64.value = dataURL;
};

heightInput.oninput = function() {
  canvas.height = heightInput.value;
  dataURL = drawTutorial(canvas, colorInput.value);
  canvasBase64.value = dataURL;
};

colorInput.onchange = function() {
  dataURL = drawTutorial(canvas, colorInput.value);
  canvasBase64.value = dataURL;
}