// TIPOS DE VARIABLE Y TIPOS DE DATOS

var nombre = 'Felipe'; // String o texto (espaniol)

var edad = 20; // Number o numerico (espaniol)
var estaCasado = true; // Boolean o Boleano (espaniol) (solo existen dos: true o false)
var suCarro = undefined; // Significa que es una variable que no tiene valor
var hijos = null; // Tiene un valor nulo

nombre = 'Juda';
edad = 28;

let apellido = 'Gutierrez';

apellido = 'Navarro';

const cedula = 1234245332;

//  EL DOM (Document object module) documento

// console.log(document)
// console.log(window)

/// OBJETOS

let carro = {
  color: 'Rojo',
  motor: {
    pistones: 6,
    marca: 'Mercedez',
  },
  puertas: 4,
  hasSoat: false,
  andar: function () {
    console.log('Estoy andando');
  },

  encender() {
    console.log('Estoy encendido');
  },
};

// console.log(carro['hasSoat'])
// console.log(carro.hasSoat)

// console.log(apellido.length)

function comer() {
  console.log('Esta funcion se activo');
}

// comer()

// carro.andar()
// carro.encender()

const misDatos = ['Cristian', 23, true, 'Felipe', 878]; // Array o arreglo (espaniol)

const edades = [18, 22, 30, 51, 31];

const perro = {
  color: 'Cafe',
  patas: 4,
};

perro.color = 'Rojo';

// console.log(perro)

const input = document.getElementById('entrada');
const botonComprar = document.getElementById('btn');
const respuesta = document.getElementById('respuesta');

botonComprar.addEventListener('click', function () {
  maquinaCocacola(input.value);
});

function maquinaCocacola(plata) {
  if (plata >= 2000) {
    if (plata > 2000) {
      const sobrante = plata - 2000;
      respuesta.innerText = 'Aqui esta tu devuelta ' + sobrante;
    }

    respuesta.innerText = 'Toma tu cocacola';
  } else {
    const faltante = 2000 - plata;

    respuesta.innerText =
      'La Cocacola cuesta 2000 pesos, te faltan ' + faltante + ' Pesos';
  }
}

const numbers = [12, 34, 56, 93, 2, 8];

function mostrarNumeros(array) {
  for (let vuelta = 0; vuelta < array.length; vuelta++) {
    console.log(array[vuelta]);
  }
}

// mostrarNumeros(numbers);

// Array methods

const users = [
  {
    name: 'Juda',
    age: 26,
  },
  {
    name: 'Cristian',
    age: 27,
  },
  {
    name: 'Pepito',
    age: 20,
  },
  {
    name: 'Carlos',
    age: 50,
  },
];

function organizarPorEdades(array) {
  const newUsers = [];
  let anterior = 26;

  for (let i = 1; i < array.length; i++) {
    if (array[i].age > anterior) {
      newUsers.unshift(array[i]);
      anterior = array[i].age;
    }
  }
}

organizarPorEdades(users);

// users.push({name: 'Pepito', age: 30}) // agrega un elemento al arreglo en la ultima posicion
// users.unshift({name: 'Pepito', age: 30}) // agrega un elemento al arreglo en la primera posicion
// const ultimo = users.pop() // elimina y devuelve(si lo queremos guardar en variable) el ultimo elemento del arreglo
// const primero = users.shift() // elimina y devuelve(si lo queremos guardar en variable) el primer elemento del arreglo
// users.reverse() // Ivierte la posicion de los elementos del arreglo
// users.sort() // Organiza los elementos ya sea de mayor a menor o en orden alfabetico, dependiendo de los datos

// console.log(users)
// console.log(primero)

// Ejercicio
const numbers2 = [12, 34, 56, 93, 2, 8];

const btnCalcular = document.getElementById('Calcular');
const respuestaCalcular = document.getElementById('respuestaCalcular');

function sacarPromedio(calificaciones) {
  let suma = 0;

  for (let index = 1; index < calificaciones.length; index++) {
    suma = suma + calificaciones[index]; // 0 + numero
  }

  const result = suma / calificaciones.length;

  return result;
}

function mostrarResultadoCalcular() {
  const promedio = sacarPromedio(numbers2);
  respuestaCalcular.innerText = promedio;
}

// btnCalcular.addEventListener('click', mostrarResultadoCalcular);

const zapatos = [
  {
    name: 'Juda style',
    talla: 39
  },
  {
    name: 'Jordan',
    talla: 39
  },
  {
    name: 'Dev style',
    talla: 39
  },
];

const carro = {
  color: 'cafe',
};
