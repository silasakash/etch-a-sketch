const color = document.getElementById("colorpicker");
const rangeValue = document.getElementById("rangevalue");
const sizeOfCanvas = document.getElementById("sizeofcanvas");
const canvas = document.getElementById("canvas");
const size = sizeOfCanvas.value;

rangeValue.innerHTML = sizeOfCanvas.value;
sizeOfCanvas.oninput = function() {
    rangeValue.innerHTML = this.value;
}

for (i=1;i<=size*size;i++) {
    const internalPixel = document.createElement('div');
    internalPixel.style.width = canvas.offsetWidth/size;
    canvas.appendChild(internalPixel);
}