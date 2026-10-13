// //Arrays 
let nomes = ["Ana Paula", "Ana", "Ricardo Vieira Santana", "Pedro", "Joana", "Evandro", "Ana Cássia","Ana"];


// // push, pop, unshift e shift



// let nomePesquisa = prompt("Digite o nome a pesquisar: ")
// let listaFiltrada = nomes.filter nome => nome.toLowerCase === nomePesquisa.toLowerCase().trim()
// );

// console.log(listaFiltrada);

// 1. Cria o array com os nomes
// const nomes = [
//   "Miguel Ângelo",
//   "Maria Eduarda", 
//   "João Pedro",
//   "Ana Clara",
//   "Pedro Henrique",
//   "Maria Alice",
//   "Luiz Felipe",
//   "Ana Júlia",
//   "João Miguel",
//   "Maria Cecíllia"
// ];

let nomePesquisa = prompt("Digite o nome a pesquisa:");

let listaFiltrada = nomes.filter(nome =>
    nome.toLowerCase().includes(nomePesquisa.toLowerCase())
);
console.log(listaFiltrada);
// // startwith()
// // endwith()
// // includes()

// atividade - aula13-10
// crie um array com números de 1 a 20;
// retorne um novo array somente com números pares.

const numeros = Array.from({ length: 20 }, (_, i) => i + 1);

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log("Array original:", numeros);
console.log("Array só com pares:", numerosPares);