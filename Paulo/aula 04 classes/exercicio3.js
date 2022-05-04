class Aluno{
    constructor(nome,nota1,nota2,nota3){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    
    }
   
    calcularMedia(){
        //return(this.nota1 + this.nota2 + this.nota3)/3
        this.media = (this.nota1 + this.nota2 + this.nota3)/3
    }
}
    
    let mediaTotal = new Aluno("Pamela", 9 ,10, 10) 
    mediaTotal.calcularMedia()
    console.log(mediaTotal)
  

   