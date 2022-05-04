class Divisao{
    #x
    #y
    constructor(x,y){
        this.#x = x
        this.#y = y
    }
    dividir(){
        try{this.#resultado = this.#x / this.#y  
    if(! isFinite(this.#esultado)){
        throw new Error("Erro ao dividir.")
    }else{
       return this.#resultado 
    }
}catch(e){
    return e.message
}
    }
    toString(){
        return "Divisao:" + this.#x +"/" + this.#y + "=" + this.#resultado}
}
let divisao = new Divisao(20,5)
divisao.dividir
console.log(divisao.toString());