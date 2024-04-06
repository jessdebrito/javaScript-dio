// R$/litro
const preco__Etanol = 5.79;
const preco__Gasolina = 6.66;
const kmPorLitro = 10;
const distanciaKM = 100;


const tipoCombustivel = 'Gasolina';


const litrosConsumidos = distanciaKM / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * preco__Etanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * preco__Gasolina;
    console.log(valorGasto.toFixed(2));
}
