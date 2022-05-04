class Loja {
    #nome
    #cnpj
    #localizacao

    constructor(nome, cnpj) {
        this.#nome = nome
        this.#cnpj = cnpj
    }

    get nome() {
        return this.#nome
    }
    set nome(nome) {
        this.#nome = nome
    }

    get cnpj() {
        return this.#cnpj
    }

    set cnpj(cnpj) {
        this.#cnpj = cnpj
    }

    get localizacao() { return this.#localizacao }
    set localizacao(localizacao) { this.#localizacao = localizacao }
}

let loja = new Loja("Americanas", "3251251582514452", "sevidao aquifero guarani")
console.log(loja)

loja.nome = " Casas Bahia"
loja.cnpj = "10635132096123"
loja.localizacao = "rua do trinta reis"
console.log(loja.nome, loja.cnpj, loja.localizacao)