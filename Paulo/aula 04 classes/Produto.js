class Produto {
    constructor(nome,quantidade,preco){
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
   
    }
    calcularTotal(){
        this.total = (this.quantidade * this.preco).toFixed(2)
    }

toString(){
    return "nome:"  + this.nome + "quantidade:" + this.quantidade + ", preco" + this.preco +", total:" + this.total
}
}
let produto = new Produto ("Samsung s22", 3, 5400.14)
let produto2 = new Produto ("iphone 13", 6, 5414.05)

produto.calcularTotal()
produto2.calcularTotal()
console.log(produto,produto2)
console.log(produto.toString(),produto2.toString())
