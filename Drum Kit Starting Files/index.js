var noOfDrum= document.querySelectorAll(".drum").length;

for(i=0; i<noOfDrum; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
         var whichOne = this.innerHTML;

        buttonAnnimation(whichOne);

        switch(whichOne){
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
        default: console.log("wrong input");
        }
    });
}
 
    document.addEventListener("keypress",function (event){
       var key = event.key;
       buttonAnnimation(key);

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
        default: console.log("wrong input");
        }
        
    })


    function buttonAnnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        //document.querySelector(".drum").classList.add("pressed");
        //gives the remove 
        activeButton.classList,add("pressed");

        setTimeout(function(){
            //remove the effect 
          activeButton.classList,remove("pressed");  
        },100)
    }




