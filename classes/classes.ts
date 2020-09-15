// lasses & atributos
class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(20, 9, 1992)
console.log(aniversario)

class DataEsperta {
    constructor(public dia: number, public mes: number, public ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const dataEsperta = new DataEsperta(20, 9, 1992)
console.log(dataEsperta)

// metodos
class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    public resumo(): string {
        return `Nome do Produto ${this.nome}, Preço do Produto R$ ${this.preco}, Desconto ${this.desconto * 100}% off`
    }

    public precoComDesconto(desconto: number = this.desconto): void {
        const desc = this.preco * ((desconto * 100) / 100)
        this.preco = this.preco - desc
        this.desconto = desconto
    }
}

console.log(new Produto('Laptop', 100, 0.5))
console.log(new Produto('TV', 150))

const ps4 = new Produto('PS4', 1000)
console.log(ps4.resumo())
ps4.precoComDesconto(0.3)
console.log(ps4.resumo())

// gets & sets
class Pessoa {
    private _idade: number = 18

    get idade(): number {
        return this._idade
    }

    set idade(v: number) {
        this._idade = v
    }
}

const pessoa = new Pessoa
console.log(pessoa.idade)
pessoa.idade = 27
console.log(pessoa.idade)

// singleton
class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    public agora(): Date {
        return new Date
    }
}

console.log(Unico.getInstance().agora())