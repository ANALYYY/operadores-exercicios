/*
# Exercício 3

### Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false
```

### Parte 2

Na aula passada vocês começaram a implementar um sistema para o Rh de uma empresa. 

Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:**

**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

a) Auxílio creche por filho: R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d) Desconto do INSS 5% do salário

Calcule:

1) O salário fixo mais o auxílio creche

2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
*/

//PARTE 01

let a = 5 > 20 && 5 < 2;
console.log(a);

let b = 5 === 5 || 5 === "5";
console.log(b);

let c = !20 > 50;
console.log(c);

let d = !20 > 50 || 50 > 60;
console.log(d);


//PARTE 02

//CALCULE O SALÁRIO DE FULANO DA SILVA LEVANDO EM CONSIDERAÇÃO OS DADOS QUE SE SEGUEM:
let salarioFixo = 2000.00;
let auxilioCrechePorFilho = 45.50;
let comissaoSobreVendas = 0.10;

 let vendaJaneiro = 5784.50;
 let vendaFevereiro =  3418.41;
 let vendaMarco = 4124.10;
 let vendaAbril =  1874.00;
 let vendaMaio = 7000.00;
 let vendaJunho = 9450.00;
let descontoDoInss = 0.05;

//MÊS DE JANEIRO
let valorDoAuxilioCrecheJaneiro = auxilioCrechePorFilho * 2;

let comissaoVendaJaneiro = vendaJaneiro * comissaoSobreVendas;
console.log('Sua comissão de Janeiro é: ', comissaoVendaJaneiro);

let descontoInssJaneiro = (salarioFixo + comissaoVendaJaneiro) * 0.05;
console.log( 'O valor descontado do seu INSS do mês de Janeiro foi:',descontoInssJaneiro.toFixed(2));

let salarioLiquidoJaneiro = (salarioFixo + comissaoVendaJaneiro + valorDoAuxilioCrecheJaneiro) - descontoInssJaneiro;
console.log('O seu salário líquido de Janeiro foi:', salarioLiquidoJaneiro.toFixed(2));


//MÊS DE FEVEREIRO
let valorDoAuxilioCrecheFevereiro = auxilioCrechePorFilho * 2;

let comissaoVendaFevereiro = vendaFevereiro * comissaoSobreVendas;
console.log('Sua comissão de Fevereiro é: ', comissaoVendaFevereiro.toFixed(2));

let descontoInssFevereiro = (salarioFixo + comissaoVendaFevereiro) * 0.05;
console.log( 'O valor descontado do seu INSS do mês de Fevereiro foi:',descontoInssFevereiro.toFixed(2));

let salarioLiquidoFevereiro = (salarioFixo + comissaoVendaFevereiro + valorDoAuxilioCrecheFevereiro) - descontoInssFevereiro;
console.log('O seu salário líquido de Fevereiro foi:', salarioLiquidoFevereiro.toFixed(2));


//MÊS DE MARÇO
let valorDoAuxilioCrecheMarco = auxilioCrechePorFilho * 2;

let comissaoVendaMarco = vendaMarco * comissaoSobreVendas;
console.log('Sua comissão de Março é: ', comissaoVendaMarco.toFixed(2));

let descontoInssMarco = (salarioFixo + comissaoVendaMarco) * 0.05;
console.log( 'O valor descontado do seu INSS do mês de Março foi:',descontoInssMarco.toFixed(2));

let salarioLiquidoMarco = (salarioFixo + comissaoVendaMarco + valorDoAuxilioCrecheMarco) - descontoInssMarco;
console.log('O seu salário líquido de Março foi:', salarioLiquidoMarco.toFixed(2));


//MÊS DE ABRIL
let valorDoAuxilioCrecheAbril = auxilioCrechePorFilho * 2;

let comissaoVendaAbril = vendaAbril * comissaoSobreVendas;
console.log('Sua comissão de Abril é: ', comissaoVendaAbril.toFixed(2));

let descontoInssAbril = (salarioFixo + comissaoVendaAbril) * 0.05;
console.log( 'O valor descontado do seu INSS do mês de Abril foi:',descontoInssAbril.toFixed(2));

let salarioLiquidoAbril = (salarioFixo + comissaoVendaAbril + valorDoAuxilioCrecheAbril) - descontoInssAbril;
console.log('O seu salário líquido de Abril foi:', salarioLiquidoAbril.toFixed(2));

//MÊS DE MAIO
let valorDoAuxilioCrecheMaio = auxilioCrechePorFilho * 2;

let comissaoVendaMaio = vendaMaio * comissaoSobreVendas;
console.log('Sua comissão de Maio é: ', comissaoVendaMaio.toFixed(2));

let descontoInssMaio = (salarioFixo + comissaoVendaMaio) * 0.05;
console.log( 'O valor descontado do seu INSS do mês de Maio foi:',descontoInssMaio.toFixed(2));

let salarioLiquidoMaio = (salarioFixo + comissaoVendaMaio + valorDoAuxilioCrecheMaio) - descontoInssMaio;
console.log('O seu salário líquido de Maio foi:', salarioLiquidoMaio.toFixed(2));


//MÊS DE JUNHO
let valorDoAuxilioCrecheJunho = auxilioCrechePorFilho * 2;

let comissaoVendaJunho = vendaJunho * comissaoSobreVendas;
console.log('Sua comissão de Junho é: ', comissaoVendaJunho.toFixed(2));

let descontoInssJunho = (salarioFixo + comissaoVendaJunho) * 0.05;
console.log( 'O valor descontado do seu INSS do mês de Junho foi:',descontoInssJunho.toFixed(2));

let salarioLiquidoJunho = (salarioFixo + comissaoVendaJunho + valorDoAuxilioCrecheJunho) - descontoInssJunho;
console.log('O seu salário líquido de Junho foi:', salarioLiquidoJunho.toFixed(2));


let mediaSalarialEm6meses = (salarioLiquidoJaneiro + salarioLiquidoFevereiro + salarioLiquidoMarco + salarioLiquidoAbril + salarioLiquidoMaio + salarioLiquidoJunho) / 6;
console.log('A média salarial em 6 meses foi:', mediaSalarialEm6meses.toFixed(2))












