function echo(objeto: any) {
    return objeto
}

console.log(echo('Lucas ECHO'))

// usando generico
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log('Lucas Echo Melhorado')
console.log(echoMelhorado<number>(27))

// generics disponiveis na API
const avaliacoes: Array<number> = [10, 15, 15]
avaliacoes.push(8)
avaliacoes.push(7)

console.log({ avaliacoes })

// generics com array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

interface HumanosDois {
    nome: string
    idade?: number
}

imprimir([1,2,3])
imprimir<string>(['Ana', 'Lucas', 'Laura'])
imprimir<{ nome: string, idade: number }>([{ nome: 'Lucas', idade: 27 }])
imprimir<HumanosDois>([{ nome: 'Lucas', idade: 27 }])

// tipo generics
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

interface EchoMelhorado {
    <T>(data: T): T
}

const chamarEchoMelhorado: EchoMelhorado = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa melhorado!!'))

// generics classes
abstract class OperacaoBinaria<T extends number, R extends number> {
    constructor(public operando1: T, public operando2: T) {}

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom', 'DIA').executar())
// console.log(new OperacaoBinaria(7, 10).executar())
// console.log(new OperacaoBinaria({ bom: 'bom' }, { dia: 'dia' }).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3,4).executar())

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

interface MapaValues {
    key: number
    value: string
}

abstract class Mapa<T, R> {
    constructor(public data: Array<T>) {}

    abstract obter(key: number): T

    abstract colocar(item: T ): void | string

    abstract imprimir(): void

    abstract limpar(): void
}

class MapaObjeto extends Mapa<MapaValues, void | string> {
    public obter(key: number): MapaValues {
        return this.data[key]
    }

    public colocar(item: MapaValues): void | string {
        if (this.data[item.key]) this.falhaAdicao(item.key)
        this.data = [item, ...this.data]
    }

    public imprimir(): void {
        console.log({ data: this.data })
    }

    public limpar(): void {
        this.data = []
    }

    private falhaAdicao(key: number): never {
        throw new Error(`Key: ${key} already.`)
    }
}

const mapa = new MapaObjeto([{ key: 0, value: 'Pedro' }])
mapa.colocar({ key: 1, value: 'Pedro' })
mapa.colocar({ key: 2, value: 'Rebeca' })
mapa.colocar({ key: 3, value: 'Maria' })

mapa.imprimir()
console.log(mapa.obter(2))
mapa.limpar()
mapa.imprimir()
mapa.colocar({ key: 1, value: 'Gustavo' })
mapa.imprimir()