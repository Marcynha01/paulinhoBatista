let calc ={
    $x:0,
    $y:0,
get valorX(){
    return this.$x
},
set valorX(newX){
    this.$x= newX
},
get valorY(){
    return this.$y
},
set valorY(newY){
    this.$Y = newY
},
    get soma(){return this.$resultado = this.$x + this.$y},
    get sub(){return this.$resultado = this.$x + this.$y},
    get mult(){return this.$resultado = this.$x + this.$y},
    get div(){return this.$resultado = this.$x + this.$y},
}
calc.valorX = Math.floor(Math.random()* 100)
calc.valorY = Math.floor(Math.random()* 100)
console.log(calc.soma, calc.sub, calc.mult, calc.div)

