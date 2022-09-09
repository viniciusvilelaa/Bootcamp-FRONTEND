var prompt = require('prompt-sync')();

var price = prompt("Qual o valor do produto? ")

console.log('======MENU======');
console.log(' 1- À vista Débito, recebe 10% de desconto');
console.log(' 2- À vista no Dinheiro ou PIX, recebe 15% de desconto')
console.log(' 3- Em duas vezes, preço normal de etiqueta sem juros')
console.log(' 4 -Acima de duas vezes, preço normal de etiqueta mais juros de 10%')

var choice = prompt("Qual a opcao de sua escolha? ")

if (choice == 1) {
    var desconto = price * 0.1;
    var total_price = price - desconto
    console.log(total_price)
}
else if (choice == 2){
    var desconto = price * 0.15;
    var total_price = price - desconto
    console.log(total_price)
}
else if(choice == 3){
    console.log(total_price)
}
else{
    var desconto = price * 0.1;
    var total_price = price + desconto
    console.log(total_price)
}

