
function refresh(){
var p1= Math.floor(Math.random()*6) +1;

var p2 = Math.floor(Math.random()*6) +1;

if (p1===1){
     document.querySelector(".dice img.img1").setAttribute("src" , "/images/dice1.png");
    }
else if(p1===2){
     document.querySelector(".dice img.img1").setAttribute("src" , "/images/dice2.png");
}
else if(p1===3){
     document.querySelector(".dice img.img1").setAttribute("src" , "/images/dice3.png");
}
else if(p1===4){
     document.querySelector(".dice img.img1").setAttribute("src" , "/images/dice4.png");
}
else if(p1===5){
     document.querySelector(".dice img.img1").setAttribute("src" , "/images/dice5.png");
}
else if(p1===6){
     document.querySelector(".dice img.img1").setAttribute("src" , "/images/dice6.png");
}


if (p2===1){
     document.querySelector(".dice img.img2").setAttribute("src" , "/images/dice1.png");
}
else if(p2===2){
     document.querySelector(".dice img.img2").setAttribute("src" , "/images/dice2.png");
}
else if(p2===3){
     document.querySelector(".dice img.img2").setAttribute("src" , "/images/dice3.png");
}
else if(p2===4){
     document.querySelector(".dice img.img2").setAttribute("src" , "/images/dice4.png");
}
else if(p2===5){
     document.querySelector(".dice img.img2").setAttribute("src" , "/images/dice5.png");
}
else if(p2===6){
     document.querySelector(".dice img.img2").setAttribute("src" , "/images/dice6.png");
}

if(p1>p2){
     document.querySelector("h1").innerHTML="Player1 wins";
}
else if (p1<p2){
     document.querySelector("h1").innerHTML="Player2 wins";
}
else{
     document.querySelector("h1").innerHTML="Draw";
}
}
refresh();
//shortWay of doing samething suggested by ANGELA-YU
// var p1= Math.floor(Math.random()*6) +1;
// var random-image = "/images/dice"+ p1+".png"
// var image1 = document.quesrySelectorAll("img")[0];
// image1.setAttributes("src", "random-image");