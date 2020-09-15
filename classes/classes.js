"use strict";
// lasses & atributos
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(20, 9, 1992);
console.log(aniversario);
class DataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const dataEsperta = new DataEsperta(20, 9, 1992);
console.log(dataEsperta);
// metodos
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `Nome do Produto ${this.nome}, Preço do Produto R$ ${this.preco}, Desconto ${this.desconto * 100}% off`;
    }
    precoComDesconto(desconto = this.desconto) {
        const desc = this.preco * ((desconto * 100) / 100);
        this.preco = this.preco - desc;
        this.desconto = desconto;
    }
}
console.log(new Produto('Laptop', 100, 0.5));
console.log(new Produto('TV', 150));
const ps4 = new Produto('PS4', 1000);
console.log(ps4.resumo());
ps4.precoComDesconto(0.3);
console.log(ps4.resumo());
// gets & sets
class Pessoa {
    constructor() {
        this._idade = 18;
    }
    get idade() {
        return this._idade;
    }
    set idade(v) {
        this._idade = v;
    }
}
const pessoa = new Pessoa;
console.log(pessoa.idade);
pessoa.idade = 27;
console.log(pessoa.idade);
// singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//# sourceMappingURL=classes.js.map