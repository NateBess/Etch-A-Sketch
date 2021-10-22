const slider = document.querySelector('#size-slider');
const sliderValue = document.querySelector('#slider-value');

// These are the Website Defaults
let paintColor = '#000000'
slider.value = 4;
let factorValue = 16;
sliderValue.textContent = slider.value;

let newSliderValue = slider.value*factorValue;
createSquares(newSliderValue);


// Function to udpate Size Slider Value
slider.oninput = function() {
    sliderValue.textContent = this.value;
    let newSliderValue = slider.value*factorValue;
    createSquares(newSliderValue);
}

// Helper function
function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

// Creates the correct number of squares for canvas
function createSquares(newSliderValue) {
    const canvas = document.querySelector('.canvas');
    canvas.textContent = '';
    let pixelID = 0;
    for (let i = 1; i <= newSliderValue; i++) {
        const pixelLayerDiv = document.createElement('div');
        pixelLayerDiv.setAttribute('class', 'pixel-layer');
        canvas.appendChild(pixelLayerDiv);
        const layerList = document.querySelectorAll('.pixel-layer');
        for (let n = 1; n <= newSliderValue; n++) {
            pixelID += 1;
            const pixel = document.createElement('div');
            setAttributes(pixel, {"class":"pixel","id":`pixel-${i}-${n}`});
            pixel.addEventListener("mouseover",function() {pixel.style.backgroundColor = paintColor;});
            pixelLayerDiv.append(pixel);

        }
    }
}

function red() {
    paintColor = '#FF0000';
}
function blue() {
    paintColor = '#0000FF';
}
function green() {
    paintColor = '#00FF00';
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        createSquares(newSliderValue);
    }
}


// Unused Code
let drawEnabled = false;
document.body.onmousedown = function() { 
  drawEnabled = true;
  //console.log(drawEnabled);
}
document.body.onmouseup = function() {
  drawEnabled = false;
  //console.log(drawEnabled);
}
















