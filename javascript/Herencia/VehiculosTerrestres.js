const Vehiculo = require('./Vehiculo')

class VehiculosTerrestres extends Vehiculo {
  constructor(color, marca, capacidad, llantas, motor){
    super(color, marca, capacidad)

    this.llantas = llantas
    this.motor = motor
  }
}

const Carro = new VehiculosTerrestres('Gris', 'Honda', 2, 4, 'V8')

console.log(Carro)