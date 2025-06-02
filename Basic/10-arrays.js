const frutas = ['manzana', 'banana', 'naranja', 'uva'];

console.log(frutas); // Imprime el array completo
for (let i = 0; i < frutas.length; i++) {
    console.log("fruta en la posicion "+i+" "+frutas[i]); // Imprime cada fruta
}

const numeros = [ -1, -3, 0, 4, 5];

const numeros2 = []
const numeros3 = []
let numero= 0

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]
    if(numero>=0){
        numeros2.push(numero)
    }else{
        numeros3.push(numero)
    }
}
console.log(numeros2, numeros3); // Imprime el array de números positivos

let aleatorio

myArray = new Array(10)
for (let i = 0; i < myArray.length; i++) {
    myArray[i] = Math.random(1)*10
    console.log(myArray[i]); // Imprime cada número aleatorio
}

console.log("--------par e impar en cada arreglo-----------")
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2 = [];
array3 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        array2.push(array[i]);
    } else {
        array3.push(array[i]);
        
        
    }
}
console.log("array original "+ array)
console.log("pares "+ array2)
console.log("impares "+ array3)


//unshift y shift
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista.shift()); // Elimina el primer elemento y lo imprime
console.log(lista); // Imprime el array después de eliminar el primer elemento  
console.log(lista.unshift(0)); // Agrega un nuevo elemento al inicio del array y lo imprime
console.log(lista); // Imprime el array después de agregar el nuevo elemento
//pop y push        
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista.pop()); // Elimina el último elemento y lo imprime
console.log(lista); // Imprime el array después de eliminar el último elemento
console.log(lista.push(11)); // Agrega un nuevo elemento al final del array y lo imprime
console.log(lista); // Imprime el array después de agregar el nuevo elemento
//splice
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lista.splice(2, 3)); // Elimina 3 elementos a partir del índice 2 y los imprime
console.log(lista); // Imprime el array después de eliminar los elementos

lis=["a", "b", "c", "d", "e",1,2,3,4,5,true,false]
console.log(lis.length) // Imprime la longitud del array
console.log(lis[0]) // Imprime el primer elemento del array     
console.log(lis)