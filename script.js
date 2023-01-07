const color = document.getElementById("colorpicker");
const rangeValue = document.getElementById("rangevalue");
const sizeOfCanvas = document.getElementById("sizeofcanvas");
const canvas = document.getElementById("canvas");
const size = sizeOfCanvas.value;


rangeValue.innerHTML = sizeOfCanvas.value;
sizeOfCanvas.oninput = function() {
    rangeValue.innerHTML = this.value;
}

function canvasElements(size) {
    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (i=1;i<=size*size;i++) {
        const internalPixel = document.createElement('div');
        canvas.insertAdjacentElement("beforeend",internalPixel);
    }
}

function changeSize(input) {
    canvasElements(input);
}