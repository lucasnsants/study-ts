"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Lucas ECHO'));
// usando generico
function echoMelhorado(objeto) {
    return objeto;
}
console.log('Lucas Echo Melhorado');
console.log(echoMelhorado(27));
// generics disponiveis na API
const avaliacoes = [10, 15, 15];
avaliacoes.push(8);
avaliacoes.push(7);
console.log({ avaliacoes });
// generics com array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir(['Ana', 'Lucas', 'Laura']);
imprimir([{ nome: 'Lucas', idade: 27 }]);
imprimir([{ nome: 'Lucas', idade: 27 }]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
const chamarEchoMelhorado = echoMelhorado;
console.log(chamarEcho('Alguma coisa melhorado!!'));
// generics classes
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom', 'DIA').executar())
// console.log(new OperacaoBinaria(7, 10).executar())
// console.log(new OperacaoBinaria({ bom: 'bom' }, { dia: 'dia' }).executar())
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class Mapa {
    constructor(data) {
        this.data = data;
    }
}
class MapaObjeto extends Mapa {
    obter(key) {
        return this.data[key];
    }
    colocar(item) {
        if (this.data[item.key])
            this.falhaAdicao(item.key);
        this.data = [item, ...this.data];
    }
    imprimir() {
        console.log({ data: this.data });
    }
    limpar() {
        this.data = [];
    }
    falhaAdicao(key) {
        throw new Error(`Key: ${key} already.`);
    }
}
const mapa = new MapaObjeto([{ key: 0, value: 'Pedro' }]);
mapa.colocar({ key: 1, value: 'Pedro' });
mapa.colocar({ key: 2, value: 'Rebeca' });
mapa.colocar({ key: 3, value: 'Maria' });
mapa.imprimir();
console.log(mapa.obter(2));
mapa.limpar();
mapa.imprimir();
mapa.colocar({ key: 1, value: 'Gustavo' });
mapa.imprimir();
//# sourceMappingURL=genericos.js.map