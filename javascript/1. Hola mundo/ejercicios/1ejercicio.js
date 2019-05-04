'use strict'
var bool = true
var num1 = prompt("Ingrese un numero")
var num2 = prompt("Ingrese otro numero")
var listNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


var listNumber1 = num1.split("")
listNumber1.forEach(element => {
    if (!listNumber.includes(element)) {
        bool = false
    }
});

var listNumber2 = num2.split("")
listNumber2.forEach(element => {
    if (!listNumber.includes(element)) {
        bool = false
    }
});


if(bool){
   if (num1 == num2) {
       alert(`Los numeros son iguales`)
   } else {
       if (num1 > num2)
           alert(`El numero ${num1} es mayor que ${num2}`)
       else
           alert(`El numero ${num2} es mayor que ${num1}`)
   }
       
}else{
    alert("Los numeros no pueden contener valores estra;os")
}

function ConverArray(num){
    var listNumber1 = num.split("")
    listNumber1.forEach(element => {
        if (!listNumber.includes(element)) {
            bool = false
        }
    });
    
}


