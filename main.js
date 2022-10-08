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
const rulla = new Image();
rulla.src = '../sprites/rulla.png';
const rulla2 = new Image();
rulla2.src = '../sprites/rulla.png';
const spriteW = 64;
const spriteH = 64;
//let frame = 0;
let rulla1frame = 15;
let gameFrame = 0;
let rulla2frame = 15;
let game2Frame = 0;
const staggerFrames = 10;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'rulla', 
        frames: 15,
    }
];
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

let asd = document.getElementById('start').addEventListener('click',function (){
    animate();
});

//Rulla animation//
function animate(){
    contex.clearRect(0, 0, canvasW, canvasH);
    animateRulla2()
    animateRulla1()
    requestAnimationFrame(animate);
};
function animateRulla1(){
    let random = Math.floor(Math.random() * 230)
    contex.drawImage(rulla, 0 * spriteW, rulla1frame * spriteH, spriteW, spriteH, 100, 280, spriteW, spriteH);
    if (gameFrame % staggerFrames == 0 && gameFrame <150){
        if (rulla1frame < 15) rulla1frame++;
        else rulla1frame = 0;
    }
    gameFrame++
    if(gameFrame === 150){
    console.log(rulla1frame)
    tulos.push(rulla1frame)
    console.log(tulos)
        if (tulos.includes(rulla1frame)){
            console.log('hit')
        }
    }
    return;
};

    //uusi rulla//
function animateRulla2(){
    contex.drawImage(rulla2, 0 * spriteW, rulla2frame * spriteH, spriteW, spriteH, 200, 280, spriteW, spriteH);
    if (game2Frame % staggerFrames == 0 && game2Frame <540){
        if (rulla2frame < 15) rulla2frame++;
        else rulla2frame = 0;
    }
    game2Frame++
    if(game2Frame === 540){
    console.log(rulla2frame)
    tulos.push(rulla2frame)
    console.log(tulos)
        if (tulos.includes(rulla2frame)){
            console.log('hit')
        }
    }
    return;
};
