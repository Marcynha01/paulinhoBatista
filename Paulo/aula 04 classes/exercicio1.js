class Conta{
constructor(numeroAgencia,numeroConta,saldo){
    this.numeroAgencia = numeroAgencia
    this.numeroConta = numeroConta
    this.saldo = saldo
}
depositar(valor){
    this.saldo = this.saldo + valor
}
sacar(valor){
    this.saldo = this.saldo - valor
}
}
let contaMarcy = new Conta (455545, 987, 500)

contaMarcy.sacar(200)
contaMarcy.depositar(100)
console.log(contaMarcy);
