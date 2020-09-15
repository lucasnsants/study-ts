// @logarClasse
// @LogarObjeto
@imprimivel
class Eletrrodomestico {
    constructor() {
        console.log('novo...')
    }
}

function logarClasse(constructor: Function) {
    console.log(constructor)
}

type Construtor = { new(...args: any[]): {} }

function LogarObjeto(construtor: Construtor) {
    console.log('Carregando...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

// new Eletrrodomestico()
// new Eletrrodomestico()
// new Eletrrodomestico()

interface Eletrrodomestico {
    imprimir?(): void
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

const eletro = new Eletrrodomestico()
eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin
// const user: UsuarioLogado = {
//     nome: 'Guilherme Filho',
//     email: 'guigui@gmail.com',
//     admin: false
// }

const user: UsuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

interface UsuarioLogado {
    nome: string
    email: string
    admin: boolean
}

function loggedIn<T extends Construtor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)
            if (!user || !user.admin) throw new Error('usuário invalido.')
        }
    }
}

@loggedIn
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
    
new MudancaAdministrativa().critico()