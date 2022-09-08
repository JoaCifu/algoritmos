///1.	Obtén del 1 al 255:
//Escribe una función que devuelve un array con todos los números del 1 al numero indicado.

var enterosHasta = (x) => {
  var todosLosNumeros = [];
  for (var i = 1; i < x + 1; i++) {
    todosLosNumeros.push(i);
  }
  console.log(`los enteros desde el 1 hasta el ${x} son: `);
  console.log(todosLosNumeros);
};
enterosHasta(12);

var listaEnteros = (ultimo) => {
  let indicador = 1;
  todos = [];
  do {
    todos.push(indicador);
    indicador++;
  } while (indicador <= ultimo);
  console.log(`lista de todos los enteros desde el 1 hasta el ${ultimo} :`);
  console.log(todos);
};
listaEnteros(24);

/*2.	Consigue pares hasta 1000: Escribe una función que entregue
la suma de todos los números pares del 1 al 1000 -
Puedes usar un operador de módulo para este ejercicio. */

function sumaPares(x) {
  var sumaParcial = 0;
  for (var i = 0; i <= x; i += 2) {
    sumaParcial += i;
  }
  console.log(`suma de los numero pares hasta ${x}`);
  return sumaParcial;
}

console.log("Total : " + sumaPares(1000));

/*3.	Suma impares hasta 5000: Escribe una función que devuelva la suma 
de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/

function sumaImpares(x) {
  var sumaParcial = 0;
  for (var i = 0; i <= x; i += 1) {
    if (i % 2 == 1) {
      sumaParcial += i;
    }
  }
  console.log(`suma de numeros impares hasta el ${x}`);
  return sumaParcial;
}
console.log(sumaImpares(5000));

/*4.	Itera un array: Escribe una función que devuelva 
la suma de todos los valores dentro de un array 
(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). */

function sumaArr(x) {
  var suma = 0;
  for (var i = 0; i < x.length; i++) {
    suma += x[i];
  }
  console.log(`suma de todos los valores dentro del arreglo ${x}`);
  return suma;
}
y = sumaArr([5, 3, 4, 4, 4, -21]);
console.log(y);

/////ahora con reduce
const arreglo = [1, 2, 3, 4];
const suma = arreglo.reduce((previo, actual) => previo + actual, 0);
console.log("la suma de todos los valores del arreglo " + arreglo + " es :");
console.log(suma);

function cambiarNegativos(x) {
  console.log(`se buscarán los numeros negativos del arreglo ${x} :`);
  var newArray = [];
  for (var i = 0; i < x.length; i++) {
    if (x[i] >= 0) {
      newArray.push(x[i]);
    } else if (x[i] < 0) {
      newArray.push("negativo detectado");
    } else {
      newArray.push("no es un numero");
    }
  }
  return newArray;
}

prueba = [-3, 4, 4, -17, 9, "d"];
console.log(cambiarNegativos(prueba));

//un programa que liste las tablas de multiplicar desde el 1 hasta el numero ingresado
var tablasDeMultiplicar = (hasta) => {
  console.log(`todas las tablas de multiplicar desde el 1 hasta ${hasta}`);
  let i = 1;
  while (i <= hasta) {
    let f = 1;
    console.log(`===tabla del ${i}===`);
    while (f <= hasta) {
      console.log(` ${i} x ${f} = ${i * f}`);
      f++;
    }
    i++;
  }
};
tablasDeMultiplicar(12);
