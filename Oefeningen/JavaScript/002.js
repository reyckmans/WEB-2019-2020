var counter = 0

function oef2(){
    changeShape();
    changeMovement();
    count();
}

function changeShape(){
    console.log(document.getElementById("cirkel").clientWidth -2 + "px");
    document.getElementById("cirkel").style.width = document.getElementById("cirkel").clientWidth -5 + "px";
    document.getElementById("cirkel").style.height = document.getElementById("cirkel").clientHeight -5 + "px";
    alertMessage(document.getElementById("cirkel").style.width)
}

function changeMovement(){
    console.log('animation: ')
    console.log(window.getComputedStyle(window.document.getElementById("cirkel")).animationName);
    window.document.getElementById("cirkel").style.animationName = 'bewegen2';
    
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