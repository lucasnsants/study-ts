"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
saudarComOla({ nome: 'Lucas', idade: 27 });
// usando classe
class Cliente {
    constructor() {
        this.nome = 'Lucas';
    }
    static getInstance() {
        return Cliente.instance;
    }
    saudar(sobrenome) {
        console.log(`Olá, ${this.nome} ${sobrenome}`);
    }
}
Cliente.instance = new Cliente;
Cliente.getInstance().saudar('Nascimento');
const potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log({ potencia: potencia(10, 2) });
//# sourceMappingURL=interfaces.js.map