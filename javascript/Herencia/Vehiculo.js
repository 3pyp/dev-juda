class Vehiculo {
  constructor(color, marca, capacidad){
    this.color = color
    this.marca = marca
    this.capacidad = capacidad
  }

  arrancar(){
    return 'run run'
  }
}

module.exports = Vehiculo
