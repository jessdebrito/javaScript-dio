/* 
3) Elabora uma algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utiliza os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de descondo;
- À vista no Dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros.
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 100;

const debito = preco - (preco * 0.1);
const pix = preco - (preco * 0.15);
const credito = preco;
const credito2 = preco + (preco * 0.1);

const formaPagamento = 4;


if (formaPagamento === 1) {
    console.log(debito);
} else if (formaPagamento === 2) {
    console.log(pix);
} else if (formaPagamento === 3) {
    console.log(credito);
} else {
    console.log(credito2);
}