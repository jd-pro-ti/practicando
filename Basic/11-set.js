//sets

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);   
console.log(mySet); // Imprime el set con los elementos 1, 2 y 3a

set = new Set([1, 2, 3, 4, 5]);
console.log(set); // Imprime el set con los elementos 1, 2, 3, 4 y 5
set.add("hola mundo")
console.log(set); // Imprime el set con los elementos 1, 2, 3, 4, 5 y "hola mundo"

set.delete("hola mundo")
console.log(set);

set.delete(1)
console.log(set);

if(set.delete(4,3)){
    console.log("se elimino el elemento 4 y 3")
}else{
    console.log("no se elimino el elemento 4 y 3")
}
console.log(set);

//has revisa si existe el elemento
set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(1)); // true 
console.log(set.has(6)); // false

//size
set = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
console.log(set.size); // 5

//convertir un set a array
seti = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
let array = Array.from(seti);
console.log(array); // [1, 2, 3, 4, 5]