interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar?(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}`)
}

saudarComOla({ nome: 'Lucas', idade: 27 })

// usando classe
class Cliente implements Humano {
    private static instance: Cliente = new Cliente
    nome: string = 'Lucas'

    private constructor() {}

    public static getInstance(): Cliente {
        return Cliente.instance
    }

    public saudar(sobrenome: string): void {
        console.log(`Olá, ${this.nome} ${sobrenome}`)
    }
}

Cliente.getInstance().saudar('Nascimento')

// interface tipo função
interface FuncaoCalculo {
    (a: number, b: number): number
}

const potencia: FuncaoCalculo = function(base: number, exp: number): number {
    return Math.pow(base, exp)
}

console.log({ potencia: potencia(10, 2) })

// herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface AB extends A, B {
    ab(): void
}