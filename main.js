let frames = 0;
//hedelmat//
let seiska = [0];
let omena = [1, 5];
let meloni = [2, 6, 9];
let paaryna = [3, 7, 10, 12];
let kirsikka = [4, 8, 11, 13, 14];
let tulos = []



//Canvas//
const canvas = document.getElementById('canvas');
const contex = canvas.getContext('2d');
const canvasW = canvas.width = 600;
const canvasH = canvas.height = 600;

//Image control//
const roller1 = new Image();
roller1.src = '../sprites/rulla2.png';
const spriteW = 96;
const spriteH = 96;
let roller1frame = 15;
let gameFrame = 0;
const staggerFrames = 10;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'roller', 
        frames: 15,
    }
];
// frame locations//
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j *spriteW;
        let positionY = index * spriteH;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

//start//
let btn = document.getElementById('start').addEventListener('click',function (){
    animate();
});

//Rulla animation//
function animate(){
    contex.clearRect(0, 0, canvasW, canvasH);
    animateRoller1()
    requestAnimationFrame(animate);
};
//Lopeta animaatio//
function end() {
    cancelAnimationFrame(gameFrame);
    console.log(roller1frame);
    tulos.push(roller1frame);
}

function animateRoller1(){
    let random = Math.floor(Math.random() * 230)
    contex.drawImage(roller1, 0 * spriteW, roller1frame * spriteH, spriteW, spriteH, 100, 280, spriteW, spriteH);
   if (gameFrame % staggerFrames == 0){
        if (roller1frame < 15) roller1frame++;
        else roller1frame = 0;
    }
    gameFrame++;
}
