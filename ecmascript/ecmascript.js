"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '000000000000';
// cpf = '65653656464'
console.log(cpf);
// arrow function
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(1, 2));
// this
function normalComThis() {
    console.log(this);
}
const normalComThisEspecial = normalComThis.bind('test');
normalComThisEspecial();
// parametro padrão
function contagemRegressiva(inicio = 2) {
    console.log(inicio);
}
contagemRegressiva();
// spread & rest
const numbers = [654, 41694, 5454, 5454];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Lucas', 'Ana'];
const turmaB = ['Lucas', 'Neia', 'Edneia'];
console.log(['Renato', ...turmaA, ...turmaB]);
function retornaArray(...args) {
    return args;
}
console.log(retornaArray(656, 655, 6531, 665));
console.log(retornaArray(...numbers));
// destructuring (array)
const caracteristica = ['Test', 63546];
const [ano, motor] = caracteristica;
console.log({ ano, motor });
// destructuring (object)
const infos = { name: 'Lucas', age: 27 };
const { name: outroNome, age } = infos;
console.log({ outroNome, age });
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = function (nome = 'Lucas') {
    if (nome === undefined) {
        nome = "Pessoa";
    }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(...nums);
// Exercicio 4
const array = [55, 20];
console.log(...array, ...nums);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log({ notas1, notas2, notas3 });
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome: pn, experiencia: exp } = cientista;
console.log({ pn, exp });
// promise
function experar3sPromise() {
    return new Promise((resolve) => {
        setInterval(() => {
            resolve('3 segundos depois promise');
        }, 3000);
    });
}
experar3sPromise()
    .then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagens => personagens.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme));
//# sourceMappingURL=ecmascript.js.map