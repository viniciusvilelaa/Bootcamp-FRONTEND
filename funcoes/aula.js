var prompt = require('prompt-sync')();

var age = prompt("Qual a sua idade? ");

function classificarIdade(age){
    if (age >= 18){
        return 'Maior de idade'
    }
    else{
        return 'Menor de idade'
    }
}

console.log(classificarIdade(age))