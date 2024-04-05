// R$/litro
const preco__Etanol = 5.79;
const preco__Gasolina = 6.66;

//  Gasto médio de combustível do carro por KM;
const kmPorLitro__Ethanol = 10;
const kmPorLitro__Gasolina = 15;

const distanciaKM = 100;

const litrosConsumidos__Etanol = distanciaKM / kmPorLitro__Ethanol;
const litrosConsumidos__Gasolina = distanciaKM / kmPorLitro__Gasolina;

const gastoViagem__Etanol = (distanciaKM * preco__Etanol);
const gastoViagem__Gasolina = (distanciaKM * preco__Gasolina);


/* 
if (etanol) {
    console.log(gastoViagem__Etanol);
} else {
    console.log(gastoViagem__Gasolina);
} */

console.log(gastoViagem__Etanol.toFixed(2));
