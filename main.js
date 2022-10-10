let frames = 0;
let x = 0;
//Fruit frames//
let seiska = [0];
let aple = [1, 5];
let melon = [2, 6, 9];
let pear = [3, 7, 10, 12];
let cherry = [4, 8, 11, 13, 14];
let rollerFrames = [0, 0, 0, 0]

//Random number generators//
let random = Math.floor(Math.random(16) * 250)
let random2 = Math.floor(Math.random(20) * 250)
let random3 = Math.floor(Math.random(30) * 250)
let random4 = Math.floor(Math.random(25) * 250)

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
let roller2frame = 15;
let gameFrame2 = 0;
let roller3frame = 15;
let gameFrame3 = 0;
let roller4frame = 15;
let gameFrame4 = 0;
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
    if (x < 4){
    contex.clearRect(0, 0, canvasW, canvasH);
    animateRoller1()
    animateRoller2()
    animateRoller3()
    animateRoller4()
    requestAnimationFrame(animate);
    }else{
        checkRollers()
    }
};
//Lopeta animaatio//
function end() {
    cancelAnimationFrame(gameFrame);
    console.log(roller1frame);
}

function animateRoller1(){
    contex.drawImage(roller1, 0 * spriteW, roller1frame * spriteH, spriteW, spriteH, 100, 250, spriteW, spriteH);
    if(gameFrame < random){
        if (gameFrame % staggerFrames == 0){
            if (roller1frame < 14) roller1frame++;
            else roller1frame = 0;
        }
        gameFrame++;
        if (gameFrame === random){
            cancelAnimationFrame(gameFrame);
            console.log(roller1frame);
            rollerFrames.push(roller1frame)
            x++;
        }
    }
}
function animateRoller2(){
    contex.drawImage(roller1, 0 * spriteW, roller2frame * spriteH, spriteW, spriteH, 200, 250, spriteW, spriteH);
    if(gameFrame2 < random2){
        if (gameFrame2 % staggerFrames == 0){
            if (roller2frame < 14) roller2frame++;
            else roller2frame = 0;
        }
        gameFrame2++;
        if (gameFrame2 === random2){
            cancelAnimationFrame(gameFrame2);
            console.log(roller2frame);
            rollerFrames.push(roller2frame)
            x++;
        }
    }
}
function animateRoller3(){
    contex.drawImage(roller1, 0 * spriteW, roller3frame * spriteH, spriteW, spriteH, 400, 250, spriteW, spriteH);
    if(gameFrame3 < random3){
        if (gameFrame3 % staggerFrames == 0){
            if (roller3frame < 14) roller3frame++;
            else roller3frame = 0;
        }
        gameFrame3++;
        if (gameFrame3 === random3){
            cancelAnimationFrame(gameFrame3);
            console.log(roller3frame);
            rollerFrames.push(roller3frame)
            x++;
        }
    }
}
function animateRoller4(){
    contex.drawImage(roller1, 0 * spriteW, roller4frame * spriteH, spriteW, spriteH, 300, 250, spriteW, spriteH);
    if(gameFrame4 < random4){
        if (gameFrame4 % staggerFrames == 0){
            if (roller4frame < 14) roller4frame++;
            else roller4frame = 0;
        }
        gameFrame4++;
        if (gameFrame4 === random4){
            cancelAnimationFrame(gameFrame4);
            console.log(roller4frame);
            rollerFrames.push(roller4frame)
            x++;
        }
    }
}

function checkRollers(){
    console.log('checking..')
    if(cherry.includes(rollerFrames) && cherry.includes(rollerFrames) && cherry.includes(rollerFrames)){
        console.log('kirsikka')
    }
    if(pear.includes(roller1frame) && pear.includes(roller2frame) && pear.includes(roller3frame)){
        console.log('päärynä')
    }
}