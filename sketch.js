/*
Composición, 1952. -José Pedro Costigliolo-
V3: Mantenga presionado el mouse para "Descomposición"
Natalia Argañaraz*/

function setup() {
    createCanvas(500, 700);
    //background(0);
    //console.log()
    frameRate(20);
  }
  
  function draw() {
    //declaro variables locales draw para color:
    let cele = color(100, 175, 250);
    let ama = color(255, 175, 0);
    let mar = color(128, 64, 50);
    let blan = color(255);
    let neg = color(0);
  
    noStroke();
    //inicio fondo celeste:
    fill(cele);
    if (mouseIsPressed) {
      fill(90);
    }
    rect(0, 0, 500, 700);
    //fin fondo celeste
  
    //inicio fondo amarillo:
    fill(ama);
    if (mouseIsPressed) {
      fill(175);
    }
    rect(0, 480, 170, 220);
    rect(60, 530, 290, 250);
    rect(350, 450, 40, 250);
    rect(390, 200, 500, 500);
    //fin fondo amarillo
  
    //inicio figuras de fondo
    //rect amarillo
    rect(200, 150, 150, 100);
    //rect marrón grande:
    fill(mar);
    if (mouseIsPressed) {
      fill(0);
    }
    rect(200, 250, 150, 200);
    //circulo blanco
    fill(blan);
    circle(150, 475, 220);
    //rect marrón pequeño:
    fill(mar);
    if (mouseIsPressed) {
      fill(0);
    }
    rect(100, 450, 100, 30);
    //cuadrado blanco:
    fill(blan);
    rect(50, 100, 150, 150);
    //rect blanco vertical
    rect(350, 200, 40, 250);
    //fin figuras de fondo*/
  
    //inicio figuras horizontales negras
    if (mouseIsPressed) {
      translate(0, -50, 0);
      rotate(frameCount / 0.2);
    }
    fill(neg);
    rect(125, 50, 280, 20);
    rect(50, 100, 150, 20);
    rect(170, 140, 180, 10);
    rect(125, 180, 380, 20);
    rect(50, 250, 400, 10);
    rect(100, 440, 290, 10);
    rect(0, 480, 200, 10);
    rect(170, 530, 180, 20);
    rect(100, 620, 360, 20);
    //fin figuras horizontales negras
  
    push();
    if (mouseIsPressed) {
      translate(0, 50, 0);
      rotate(frameCount / 0.1);
    }
    //inicio verticales horizontales negras
    fill(neg);
    rect(40, 100, 10, 160);
    rect(100, 440, 20, 200);
    rect(110, 50, 20, 150);
    rect(170, 150, 10, 390);
    rect(200, 100, 10, 390);
    rect(340, 140, 20, 410);
    rect(390, 50, 20, 400);
    rect(440, 250, 20, 390);
    //fin verticales horizontales negras
    pop();
  }
  