var fs = require("fs");
var funcionarios = null;
fs.readFile("funcionarios.json", "utf-8", function (err, data) {    
    if (err) {
        console.log(err)
    } else{
        funcionarios = JSON.parse(data).funcionarios;

     
       var setor = [];
    for (var i = 0; i < funcionarios.length; i++) {
            setor.push(funcionarios[i].setor);
            var setorSemRepetição = [...new Set(setor)];
        }
        
        console.log(salarioMaior());
        console.log(salarioMenor());
        console.log(media());
        console.log(setorSemRepetição);

       
    
function salarioMaior(setor) {
    var max = null;
    for (var i = 1; i < funcionarios.length; i++) {
        if (setor && (funcionarios[i].setor !== setor)){
            continue;
        }
        if (max === null){
            max = funcionarios[i];
            continue;
        }
        if (funcionarios[i].salario > max.salario)
        max = funcionarios[i];
    }
    
    return max;
  
}

function salarioMenor(setor) {
    var min = null;
    for (var i = 1; i < funcionarios.length; i++) {
        if (setor && (funcionarios[i].setor !== setor)){
            continue;
        }
        if (min === null){
            min = funcionarios[i];
            continue;
        }
        if (funcionarios[i].salario <  min.salario)
            min = funcionarios[i];
            
    }
    return min;
}

function media(setor) {
    var somaDosSalarios = 0;
    var qtd = 0;
    for (var i = 0; i < funcionarios.length ; i++) {
        if (setor && (funcionarios[i].setor !== setor)){
            continue;}
        qtd++;
        somaDosSalarios += funcionarios[i].salario; 
}
var media = somaDosSalarios / qtd;
    return media;
}
function repetir() {
    setorSemRepetição.forEach(salarioMaior);
    
}

}
});