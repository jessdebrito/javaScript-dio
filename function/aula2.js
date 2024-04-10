// node ./function/aula2.js


/* function calcularJuros(){

}


function main() {
    console.log('Programa principal');
    calcularJuros();
}

main(); */

// ------- IMC EXERCICIO -----------

/* 
function calcularImc(peso, altura) {
    return peso / ( altura * altura ); // peso / Math.pow(altura,2)
};


function classificarImc(imc) {

    if (imc < 18.5 ) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    }  else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
};

const altura = 1.60;
const peso =  55;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
 */

// ------- IMC EXERCICIO -----------
// criando uma function main:

function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
    // return peso / ( altura * altura ); // peso / Math.pow(altura,2)
};

function classificarImc(imc) {

    if (imc < 18.5 ) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    }  else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave'
    }
};


// cria e execura imediatamente a função
// Main
(function() {
    const altura = 1.60;
    const peso =  55;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
// --------------------------------------

/*
function main() {
    const altura = 1.60;
    const peso =  55;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
};

 main(); */