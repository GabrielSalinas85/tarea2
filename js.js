
function example(a, b, c){
    return a+b+c
}   

example = function(a, b, c){
    return a+b+c
} 
 divuno=document.querySelector("#cuadro1")
 divdos=document.querySelector("#cuadro2")
 divtres=document.querySelector("#cuadro3")
 divcuatro=document.querySelector("#cuadro4")

 divuno.addEventListener("click", function(){
    divuno.style.backgroundColor="black" 
 } )

 divdos.addEventListener("click", function(){
    divdos.style.backgroundColor="black"
} )

divtres.addEventListener("click", function(){
    divtres.style.backgroundColor="black"
} )

divcuatro.addEventListener("click", function(){
    divcuatro.style.backgroundColor="black"
} )