class Calzado {
  constructor(marca, talla, tipo){
    this.marca = marca
    this.talla = talla
    this.tipo = tipo
  }

  getTalla(){
    return this.talla
  }

  setTalla(newTalla){
    this.talla = newTalla
  }
}

const zapatoNike =  new Calzado('Nike', 39, 'Tenis')
const zapatoAdidas = new Calzado('Adidas', 38, 'Tenis')

console.log(zapatoNike)
console.log(zapatoAdidas)

// console.log(zapatoNike.getTalla())

// console.log(zapatoNike.setTalla(40))
// console.log(zapatoNike.getTalla())

