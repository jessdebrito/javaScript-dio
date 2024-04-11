/*
function whiteMyName(name){
    return  (`Meu nome é ` + name);
}
 whiteMyName('Jéssica');
*/

// ------------------------------------------

/*
function checkAge(age) {
    if (age >= 18){
        console.log(whiteMyName('Jéssica') + ' é maior de idade')
    } else {
        console.log(whiteMyName('Jéssica') + ' é menor de idade')
    };
}

checkAge(29); 
*/

// ------------------------------------------
/* 
3) Elabora uma algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utiliza os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros.
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/



function applyDiscount( valor, desconto ){
    return ( valor - (valor * ( desconto / 100 )) );
}

function applyInterest( valor, juros ){
    return ( valor + (valor * ( juros / 100 )) );
}

const preco = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(applyDiscount(preco, 10));
} else if (formaPagamento === 2) {
    console.log(applyDiscount(preco, 15));
} else if (formaPagamento === 3) {
    console.log(applyDiscount(preco, 0));
} else {
    console.log(applyInterest(preco, 10));
}