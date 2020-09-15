"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    constructor() {
        super();
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo;
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNone = 'Lucas';
    }
    get primeiroNome() {
        return this._primeiroNone;
    }
    set primeiroNome(n) {
        if (n.length <= 3)
            this.checaNome(n);
        this._primeiroNone = n;
    }
    checaNome(n) {
        throw new Error(`Nome: ${n} invalido!`);
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map