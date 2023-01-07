let color = "black";
let rangeValue = document.getElementById("rangevalue");
let sizeOfCanvas = document.getElementById("sizeofcanvas");
let canvas = document.getElementById("canvas");
let size = sizeOfCanvas.value;


rangeValue.innerHTML = sizeOfCanvas.value;
sizeOfCanvas.oninput = function() {
    rangeValue.innerHTML = this.value;
}

function canvasElements(size) {
    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (i=1;i<=size*size;i++) {

        let count = 0;  
        const internalPixel = document.createElement('div');
        canvas.insertAdjacentElement("beforeend",internalPixel);
        internalPixel.addEventListener("mouseover", pixelColor);
    }
}
function changeSize(input) {
    canvasElements(input);
}
function pixelColor() {
    if (color == 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }    
}

function changeColor(choice) {
    color = choice;
}

function resetCanvas() {
    let pixels = canvas.querySelectorAll("div");
    pixels.forEach((div) => div.style.backgroundColor = 'white');
}