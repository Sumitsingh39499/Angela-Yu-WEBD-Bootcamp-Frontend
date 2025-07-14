document.addEventListener("keypress",function(event){
    clicked(event.key);

    buttonAnnimation(event.key);
})

var noOfDrum= document.querySelectorAll(".drum").length;
for(i=0;1<noOfDrum; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var whichButton = this.innerHTML;
    clicked(whichButton);
    buttonAnnimation(whichButton);
})
}

document.addEventListener("keypress",function(event){
    clicked(event.key);
})

function clicked(key){
        switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        
        case "s": 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        
        case "d": 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        
        case "j": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "k": 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "l": 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default: console.log("heellooo");
        }
        
    }

    function buttonAnnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        //document.querySelector(".drum").classList.add("pressed");
        //gives the remove 
        activeButton.classList.add("pressed");

        setTimeout(function(){
            //remove the effect 
          activeButton.classList.remove("pressed");  
        },100);
    }

    // giving and removing seems like animation