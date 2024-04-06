/* 
function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Jéssica'); 

// --------------------------------------------------------
function quadrado(valor) {
   return valor * valor;
}

const quadradoDeDez = quadrado (10);

console.log(quadradoDeDez);

 */

// -------- exercicio de juros -----------

function adicionarJuros(valor, percenturalJuros) {
    const valorDeAcrecimo = (percenturalJuros / 100) * valor ;
    return valor + valorDeAcrecimo;
};
console.log(adicionarJuros(100,10));
console.log(adicionarJuros(100,15));
console.log(adicionarJuros(100,20));