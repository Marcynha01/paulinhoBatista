class Livro {
    #titulo
    #autor
    #editora
    #ano
    constructor(titulo,autor,editora,ano){
        this.titulo = titulo 
        this.autor = autor 
        this.editora = editora
        this.ano = ano 
    }
    get titulo(){
        return this.#titulo
    }
    set titulo(titulo){
        this.#titulo = titulo
    }
    get autor(){
        return this.#autor
    }
    set autor(autor){
        this.#autor = autor
    }
    get editora(){
        return this.#editora
    }
    set editora(editora){
        this.#editora = editora 
    }
    get ano(){
        return this.#ano
    }
    set ano(ano){
        this.#ano = ano
    }
}toString(){
    return "titulo:" + this.titulo +",autor:"
     + this.autor +"editora:"  + this.editora + ",ano:" + this.ano}
      

     let livro = new Livro ("4 VIDAS DE UM CACHORRO", "americano W. Bruce Cameron", "Agir" , "2012")
     livro

