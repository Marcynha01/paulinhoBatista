class Clientes{
constructor(nome,email,whatsapp,twitter){
    this.nome = nome
    this.email = email
    this.whatsapp = whatsapp
    this.twitter = twitter
}

toStrig(){
    return "nome:" + this.nome + "email:" + this.email +",whatsapp:" + this.whatsapp + ";twitter:" + this.twitter

}
}
let cliente1 = new Clientes ("Kamlly", "milly@gmail.com", "48984709761" , "millyzinha1")
let cliente2 = new Clientes ("Rai", "rai@gmail.com", "48984756565" , "raizinho12")
let cliente3 = new Clientes ("Paulo", "paulito@gmail.com", "48984756565" , "paulinho1234")
let cliente4 = new Clientes ("maria", "mariazinha@gmail.com", "48984756565" , "mariazinha123")
let cliente5 = new Clientes ("tauani", "tauani@gmail.com", "48984756565" , "tauanizinha123")
let cliente6 = new Clientes ("andre", "andrei@gmail.com", "48984756565" , "andreizinho123")
let cliente7 = new Clientes ("flavia", "flavia@gmail.com", "48984756565" , "flaviazinha123")
let cliente8 = new Clientes ("gustavo", "gustavo@gmail.com", "48984756565" , "gustavinho123")
let cliente9 = new Clientes ("Pedro", "pedro@gmail.com", "48984756565" , "pedrito123")
let cliente10 = new Clientes ("catia", "cai@gmail.com", "48984756565" , "caitizinha123")

console.log(cliente1,cliente5,cliente8,cliente10)
console.log(cliente1.toStrig,cliente5.toStrig,cliente8.toStrig,cliente10.toStrig)


