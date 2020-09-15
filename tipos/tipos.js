"use strict";
// string
let nome = 'Lucassss';
console.log(typeof nome);
// number
let minhaIdade = 27;
console.log(typeof minhaIdade);
// bool
let tenhoFilhos = false;
console.log(typeof tenhoFilhos);
// arrys
let hobbies = ['Cozinhar', 'Esportes', 'Leitura'];
console.log(typeof hobbies);
// tuplas
let endereco = ['Endereco', 99];
console.log(typeof endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let qualquerCoisa = 'Test';
console.log(qualquerCoisa);
qualquerCoisa = { test: 'test' };
console.log(qualquerCoisa);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
// tipos de função
let calculo;
function multiplicar(numA, numB) {
    return numA * numB;
}
calculo = multiplicar;
console.log(calculo(2, 5));
// objetos
let usuario = {
    name: 'Lucas',
    age: 27
};
console.log(usuario);
// desafio
let funcionario = {
    funNames: ['Lucas', 'Ana', 'Laura'],
    baterPonto(h) {
        if (h > 8)
            return 'Fora do Horario';
        return 'Horario normal';
    }
};
console.log(funcionario);
// never
function falha(msg) {
    throw new Error(msg);
}
const product = {
    name: 'Sabão',
    price: 10,
    validateProduct() {
        if (!this.name || this.name.trim().length === 0)
            falha('Need have a name');
        if (this.price <= 0)
            falha('Invalid Price!');
    }
};
console.log(product.validateProduct());
let contaBancaria = {
    saldo: 3594,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Lucas',
    contaBancaria: contaBancaria,
    contatos: [6854684684, 23548654634]
};
correntista.contaBancaria.depositar(3654);
console.log(correntista);
//# sourceMappingURL=tipos.js.map