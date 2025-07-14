//$ ->document.querySelector as well as document.querySelectorAll 

//this will change the value
$("h1").css("color","red");

//IF WE ADD JQUERY IN HEAD SECTION THEN 
//$(document).ready(funcion(){
// $("h1").css("color","red");
//});

//this will give the value 
console.log($("h1").css("fontSize"));

$("h1").addClass("big-title class2 class3 ...");

console.log($("h1").hasClass("big-title"));

//HOW TO CHANGE TEXT

$("h1").text("Good bye");
//innerHTML-> .html
$("button").html("<em>hey</em>");

//HOW TO CHANE ATTRIBUTE

$("a").attr("href");//this will give the atttribute

$("a").attr("href","https://www.yahoo.com");//this will change the atttribute

//ADDING EVENTLISTENER

$("h1").click(function(){
 $("h1").css("color","purple");
});

//for adding in more then one 
$("button").click(function(){
    $("h1").css("color","black");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("click", function(){
   $("h1").css("color","green");
});


//ADDING ELEMENT

$("h1").before("<button>hello</button>"); //add element before h1

$("h1").after("<button>hello</button>"); //add element after h1

$("h1").prepend("<button>hello</button>"); //add element in after <h1>

$("h1").append("<button>hello</button>"); //add element in before </h1>

//to remove the element
$("input").remove();


//ADDING ANIMATION 
//predefine
$("button").on("click",function(){
   // $("h2").toggle();
   //$("h2").fadeToggle(); //fadein fadeout
   $("h2").slideToggle;

//custom
$("button").on("click",function(){
   $("h2").animate({opacity:0.5 /*cssrules only (make sure the second thing we are trying to animate is a no.) */ });
});

//more then one
$("button").on("click",function(){
   $("h2").slideUp().slideDown().animate({opacity:0.5 });
});

