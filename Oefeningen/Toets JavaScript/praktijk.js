window.onload= function(){
    
    setInterval(
    function changebackground(){
        var color =["red", "blue", "green", "yellow"];
        var randomColor = color[Math.floor(Math.random()*color.length)];
        
        console.log(randomColor);
        
        changeColor(randomColor);
        },1000);
};

function changeColor(color){
    window.document.getElementById("vierkant").style.backgroundColor = color; }

var counter = 0
function count(){
    console.log('test')
    counter = counter + 1;
    document.getElementById("hoeveelheid").innerHTML = counter;
}
