"use strict"

function calcular(){

    let operando1 = document.querySelector("#operando1").value;

    let operaciones = document.querySelector("#operacion").value;

    let operando2 = document.querySelector("#operando2").value;  
    
    let resultado;

    switch(operaciones){

        case '+' :
           resultado= parseInt(operando1) +parseInt(operando2);
       
        break;

        
    }       




}


let boton= document.querySelector("#calcular");
boton.addEventListener("click", calcular);