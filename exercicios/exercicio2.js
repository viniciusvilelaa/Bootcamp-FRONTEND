var prompt = require('prompt-sync')();

//declarando variaveis

var weight = prompt("Qual seu peso? ")
var leight = prompt("Qual sua altura? ")

function calcularImc(weight, leight){
    return weight / Math.pow(leight, 2).toFixed(2)

}

function classificarImc(IMC){
    if (IMC > 40) {
        console.log('Obesidade grave')
    }
    else if (IMC < 40 && IMC > 30) {
        console.log('Obeso')
    }
    else if (IMC < 30 && IMC > 25) {
        console.log('Acima do peso')
    }
    else if (IMC < 25 && IMC > 18.5) {
        console.log('Peso normal')
    }
    else {
        console.log('Abaixo do peso')
    }
}

const IMC = calcularImc(weight, leight);

classificarImc(IMC);
