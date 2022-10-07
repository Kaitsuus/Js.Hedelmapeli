let frames = 0;


//Canvas//
const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');
const canvasW = canvas.width = 600;
const canvasH = canvas.height = 600;

//Image control//
const rulla = new Image();
rulla.src = '../sprites/rulla.png';
const rulla2 = new Image();
rulla2.src = '../sprites/rulla.png';
const rulla3 = new Image();
rulla3.src = '../sprites/rulla.png';
const rulla4 = new Image();
rulla4.src = '../sprites/rulla.png';
const spriteW = 64;
const spriteH = 64;
let frame = 15;
let gameFrame = 0;
const staggerFrames = 10;

//Rulla animation//
function animate(){
    contex.clearRect(0, 0, canvasW, canvasH);
    animateRulla1()
    animateRulla2()
    animateRulla3()
    animateRulla4()
    requestAnimationFrame(animate);
};
function animateRulla1(){
    contex.drawImage(rulla, 0 * spriteW, frame * spriteH, spriteW, spriteH, 100, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0){
        if (frame < 14) frame++;
        else frame = 0;
    }
    gameFrame++;
}
function animateRulla2(){
    contex.drawImage(rulla2, 0 * spriteW, frame * spriteH, spriteW, spriteH, 200, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0){
        if (frame < 14) frame++;
        else frame = 0;
    }
    gameFrame++;
}
function animateRulla3(){
    contex.drawImage(rulla3, 0 * spriteW, frame * spriteH, spriteW, spriteH, 300, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0){
        if (frame < 14) frame++;
        else frame = 0;
    }
    gameFrame++;
}
function animateRulla4(){
    contex.drawImage(rulla4, 0 * spriteW, frame * spriteH, spriteW, spriteH, 400, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0){
        if (frame < 14) frame++;
        else frame = 0;
    }
    gameFrame++;
}
