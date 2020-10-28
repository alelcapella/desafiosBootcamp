var num = 1;
;
var resultado;

for (var i = 2; i < 10; i++) {
    if (num % i === 0 && num !== i && num !== 2) {
        resultado = " O número " + num + " não é primo.";
        break;
    } 

    if (num === 1) {
        resultado = " O número " + num + " não é primo.";
    } else {
        resultado = " O número " + num + " é primo.";
    }
     
    }
    
console.log(resultado);