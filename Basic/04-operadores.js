//operadores

//operadores aritmeticos
let suma = 10 + 20
let resta = 10 - 20
let multiplicacion = 10 * 20
let division = 10 / 20

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

let a = 10
let b = 20

console.log(a % b) //resto de la división
console.log(a ** b) //potencia

//operadores de asignación
let suma2 = a += b
console.log(suma2)

let resta2 = a -= b
console.log(resta2)

let multiplicacion2 = a *= b
console.log(multiplicacion2)

let division2 = a /= b
console.log(division2)

//operadores comparativos
let igual = 10 == 20
let distinto = 10 != 20
let mayor = 10 > 20
let menor = 10 < 20
let mayorIgual = 10 >= 20
let menorIgual = 10 <= 20

console.log(igual)
console.log(distinto)
console.log(mayor)
console.log(menor)
console.log(mayorIgual)
console.log(menorIgual)


console.log("--------------- opetrores lógicos ---------------")
//operadores lógicos
let y = true
let n = false

console.log(y && n) // and
console.log(y || n) //or
console.log(!y) //not
console.log(!n) //not

console.log("--------------- operadores lógicos ---------------")
console.log(0 =="") //comparación de igualdad
console.log(0 != "") //comparación de distinto
console.log(0 === "0") //comparación de igualdad y tipos
console.log(undefined == null) //comparación de igualdad

//valores verdaderos
// todos los numeros positivos y negativos, excepto 0, son verdaderos
// todos los strings, excepto "", son verdaderos
// todos los booleans, excepto false, son verdaderos
// todos los undefined, excepto undefined, son verdaderos
// todos los null, excepto null, son verdaderos

//operadores ternarios
let h = 10
let g = 20
let c = 30

console.log(g > h ? g : c) //if


                       