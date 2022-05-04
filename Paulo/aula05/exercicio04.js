class Conta {
    #agencia
    #conta 
    #saldo

    constructor(agencia, conta , saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo 

}
get agencia(){
    return this.#agencia
}
set agencia(agencia){
    this.#agencia = agencia
}
get conta(){
    return this.#conta
}
set conta(conta){
    this.#conta = conta
}
get saldo(){
    return this.#saldo
}
set saldo(saldo){
    this.#saldo = saldo 
}
depositar(valor){
    if(valor>0){
        this.#saldo =+ valor
    }
}
sacar(valor){
    if(valor > 0 && valor<= this.#saldo){
        this.#saldo -= valor
    }
}
toString(){
    return "agencia:" + this.agencia + ",conta:" + this.#conta + ",saldo:" + this.saldo}

}
let conta = new Conta ("245142-0", "215251458256225", "3.000")
conta.depositar(2000)
conta.sacar(500)
console.log(conta.toString());








