const gasolina = 10;
const alcool = 5;
const distancia = 100;
const rendimentoCombustivel = 10;

const tipoCombustivel = 'alcool';




if (tipoCombustivel === 'gasolina') {
    const gastoGasolina = distancia / rendimentoCombustivel;

    const valorTotal = gastoGasolina * gasolina;

    console.log(valorTotal);
}
else{
    const gastoAlcool = distancia / rendimentoCombustivel;

    const valorTotal = gastoAlcool * alcool;

    console.log(valorTotal);
}

