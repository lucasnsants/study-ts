"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @logarClasse
// @LogarObjeto
let Eletrrodomestico = class Eletrrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrrodomestico = __decorate([
    imprimivel
], Eletrrodomestico);
function logarClasse(constructor) {
    console.log(constructor);
}
function LogarObjeto(construtor) {
    console.log('Carregando...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrrodomestico();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
// const user: UsuarioLogado = {
//     nome: 'Guilherme Filho',
//     email: 'guigui@gmail.com',
//     admin: false
// }
const user = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
function loggedIn(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!user || !user.admin)
                throw new Error('usuário invalido.');
        }
    };
}
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    loggedIn
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
//# sourceMappingURL=decorators.js.map