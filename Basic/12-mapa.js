//map
const map = new Map();
map.set('name', 'Lucas');
map.set('age', 25);
map.set('country', 'Argentina');
console.log(map);

const map2 = new Map([
    ['name', 'Lucas'],
    ['age', 25],
    ['country', 'Argentina']
]);

const mapa= new Map([
    ['nombre','david'],
    ['edad', 18],
    ['pais', 'mexico']
])

//set para agregar un nuevo valor
mapa.set('ciudad', 'mexico');
mapa.set('apodo','chamoy')

//get para obtener el valor de una clave
console.log(mapa.get('nombre')); // 'david'
console.log(mapa);
edad = mapa.get('edad')
console.log(edad); // 18

//has para verificar si existe una clave
console.log(mapa.has('nombre')); // true
console.log(mapa.has('nombre1')); // false

//delete 
mapa.delete('apodo')
console.log(mapa)

//keys, values entries
console.log(mapa.keys())
console.log(mapa.values())
console.log(mapa.entries())

console.log("--------ejemplo------------")
// Ejercicio: Crea un Map para almacenar el nombre de estudiantes y su calificación final.
// Luego, recorre el Map e imprime solo los estudiantes que aprobaron (calificación >= 60).

const estudiantes = new Map([
    ['Ana', 85],
    ['Luis', 58],
    ['Carlos', 72],
    ['Marta', 49],
    ['Sofía', 91]
]);

for (const [nombre, calificacion] of estudiantes) {
    if (calificacion >= 60) {
        console.log(`${nombre} aprobó con ${calificacion}`);
    }
}