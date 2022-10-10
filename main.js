let frames = 0;
let x = 0;
let i = 0;
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
        end()
    }
};

//Lopeta animaatio//
function end() {  
    x = 0;
    gameFrame = 0
    gameFrame2 = 0
    gameFrame3 = 0
    gameFrame4 = 0
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

function lukitut(){
    if (x < 4){
        contex.clearRect(0, 0, canvasW, canvasH);
        requestAnimationFrame(lukitut)
        if (document.getElementById("lukittu1").value='true'){
            console.log('off')
            console.log(roller1frame)
            contex.drawImage(roller1, 0 * spriteW, roller1frame * spriteH, spriteW, spriteH, 100, 250, spriteW, spriteH);
            roller1frame;
        }
        if (document.getElementById("lukittu2").value='true'){
            console.log('off')
            console.log(roller2frame)
            contex.drawImage(roller1, 0 * spriteW, roller2frame * spriteH, spriteW, spriteH, 200, 250, spriteW, spriteH);
            roller2frame;
        }
        if (document.getElementById("lukittu3").value='true'){
            console.log('off')
            console.log(roller3frame)
            contex.drawImage(roller1, 0 * spriteW, roller3frame * spriteH, spriteW, spriteH, 300, 250, spriteW, spriteH);
            roller3frame;
        }
        if (document.getElementById("lukittu4").value='true'){
            console.log('off')
            console.log(roller4frame)
            contex.drawImage(roller1, 0 * spriteW, roller4frame * spriteH, spriteW, spriteH, 400, 250, spriteW, spriteH);
            roller4frame;
        }
        if (document.getElementById("lukittu1").value='false'){
            animateRoller1()
        }
        if (document.getElementById("lukittu2").value='false'){
            animateRoller2()
        }
        if (document.getElementById("lukittu3").value='false'){
            animateRoller3()
        }
        if (document.getElementById("lukittu4").value='false'){
            animateRoller4()
        }else{
            checkRollers()
            end()
        }
        
    }
}

function onoff(){
    currentvalue = document.getElementById('lukittu1').value;
    if(currentvalue == "false"){
        document.getElementById("lukittu1").value='true';
    }else{
        document.getElementById("lukittu1").value='false';
    }
}
function onoff2(){
    currentvalue = document.getElementById('lukittu2').value;
    if(currentvalue == "false"){
        document.getElementById("lukittu2").value='true';
    }else{
        document.getElementById("lukittu2").value='false';
    }
}
function onoff3(){
    currentvalue = document.getElementById('lukittu3').value;
    if(currentvalue == "false"){
        document.getElementById("lukittu3").value='true';
    }else{
        document.getElementById("lukittu3").value='false';
    }
}
function onoff4(){
    currentvalue = document.getElementById('lukittu4').value;
    if(currentvalue == "false"){
        document.getElementById("lukittu4").value='true';
    }else{
        document.getElementById("lukittu4").value='false';
    }
}
