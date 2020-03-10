var counter = 0
var animations = ['bewegen', 'bewegen2', 'bewegen3', 'bewegen4', 'bewegen5']

var timer = 0;
function oef2(){
    changeShape();
    var randomItem = animations[Math.floor(Math.random()*animations.length)];
    console.log(randomItem);
    changeMovement(randomItem);
    count();
}

function changeShape(){
    console.log(document.getElementById("cirkel").clientWidth -2 + "px");
    document.getElementById("cirkel").style.width = document.getElementById("cirkel").clientWidth -5 + "px";
    document.getElementById("cirkel").style.height = document.getElementById("cirkel").clientHeight -5 + "px";
    alertMessage(document.getElementById("cirkel").style.width)
}

function changeMovement(animation){
    console.log('animation: ')
    console.log(window.getComputedStyle(window.document.getElementById("cirkel")).animationName);
    window.document.getElementById("cirkel").style.animationName = animation; 
    
}


function count(){
    console.log('test')
    counter = counter + 1;
    document.getElementById("hoeveelheid").innerHTML = counter;
    
}

function alertMessage(width){
    console.log('controle width: '+ width);
    if(width == 0 + "px"){
        window.alert("Game Over");}
}

window.onload = setInterval(function(){
        timer = timer + 1;
        window.document.getElementById('timer').innerHTML = timer
    },1000)
