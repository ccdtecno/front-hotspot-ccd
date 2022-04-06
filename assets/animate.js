let widthSketch = window.innerWidth;
let heightSketch = window.innerHeight*.85;
let backgroundColor, strokeColor;

let index = 0;
let direction = 1;  // 1 o -1 hacia delante o atras
let maxSteps = 120;
let stepResolution = 2*3.14159 / maxSteps; //Intervalo del incremento;

let widthBolita = 50;
let heightBolita = 50;
// console.log(canvasDiv)



function setup() {
    colorMode(RGB)
    createCanvas(widthSketch, heightSketch).parent(canvasContainer);
    backgroundColor = color (0)
    strokeColor = color(0,100,150)
}

setInterval(()=>{
    index += (stepResolution * direction);
    // console.log(index);
},20);

function draw() {
    background(backgroundColor);
    if(index < maxSteps) {
        noFill();
        stroke(strokeColor);
        strokeWeight(2)
        // for(let i = 0; i < 10; i++) {
            let actualWB = widthBolita + (sin (index)*30);
            let actualHB = heightBolita + (sin(index)*30);
            ellipse(mouseX,mouseY,actualWB, actualHB)    
        // }
    } else
        index = 0;
    
}

