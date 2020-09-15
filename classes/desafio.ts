// Exercício 1 - Classe
class Moto {
    constructor(public nome: string, public velocidade: number = 0) {
        this.nome = nome
        this.velocidade = velocidade
    }

    public buzinar(): void {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number): number {
        return this.velocidade = this.velocidade + delta
    }
}
    
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
    
// Exercício 2 - Herança
abstract class Objeto2D {
    public base: number = 0
    public altura: number = 0

    abstract area(): number
}

class Retangulo extends Objeto2D {
    constructor() {
        super();
    }

    public area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())
    
// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNone: string = 'Lucas'

    get primeiroNome(): string {
        return this._primeiroNone
    }

    set primeiroNome(n: string) {
        if (n.length <= 3) this.checaNome(n)
        this._primeiroNone = n
    }

    private checaNome(n: string): never {
        throw new Error(`Nome: ${n} invalido!`)
    }
}
    
const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)