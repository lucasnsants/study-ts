// string
let nome: string = 'Lucassss'
console.log(typeof nome)

// number
let minhaIdade: number = 27
console.log(typeof minhaIdade)

// bool
let tenhoFilhos: boolean = false
console.log(typeof tenhoFilhos)

// arrys
let hobbies: string[] = ['Cozinhar', 'Esportes', 'Leitura']
console.log(typeof hobbies)

// tuplas
let endereco: [string, number] = ['Endereco', 99]
console.log(typeof endereco)

// enums
enum Cor {
    Cinza,
    Verde,
    Azul
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor)

// any
let qualquerCoisa: any = 'Test'
console.log(qualquerCoisa)
qualquerCoisa = { test: 'test' }
console.log(qualquerCoisa)

// funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

// tipos de função
let calculo: (numA: number, numB: number) => number

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

calculo = multiplicar
console.log(calculo(2, 5))

// objetos
let usuario: { name: string, age: number } = {
    name: 'Lucas',
    age: 27
}

console.log(usuario)

// desafio
let funcionario: Funcionario = {
    funNames: ['Lucas', 'Ana', 'Laura'],
    baterPonto(h: number): string {
        if (h > 8) return 'Fora do Horario'
        return 'Horario normal'
    }
}

console.log(funcionario)

// Alias
type Funcionario = {
    funNames: string[] | number[], // union types
    baterPonto: (h: number) => string
}

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const product = {
    name: 'Sabão',
    price: 10,
    validateProduct() {
        if (!this.name || this.name.trim().length === 0) falha('Need have a name')
        if (this.price <= 0) falha('Invalid Price!')
    }
}

console.log(product.validateProduct())

// desafio
type ContaBancaria = {
    saldo: number,
    depositar: (v: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3594,
    depositar(valor: number): void {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: number[]
}

let correntista: Correntista = {
    nome: 'Lucas',
    contaBancaria: contaBancaria,
    contatos: [6854684684, 23548654634]
}

correntista.contaBancaria.depositar(3654)
console.log(correntista)