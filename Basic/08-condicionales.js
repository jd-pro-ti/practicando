// si no

let edad = 18

if(edad>=18){
    console.log("es mayor de edad")
}else{
    console.log("no es mayor")
}
console.log("hola")

//operador ternario

const mensaje = edad==19 ? "la edad es 19":" la edad no es 19"

console.log(mensaje)

//switch
let dia=8
let diaName

switch(dia){
    case 0:
        diaName="lunes"
        break
        case 1:
            diaName="martes"
            break
        case 2:
            diaName="miercoles"
            break
        case 3:   
            diaName="jueves"
            break
        case 4:   
            diaName="jueves"
            break
        default:
           diaName="dia no valido"
    
}

console.log(diaName) 


let contraseña = 12345
let usuario = "david"

let nuevaContraseña = 12345
let nuevoUsuario = "david"

if(nuevoUsuario==usuario){
    if(nuevaContraseña==contraseña){
        console.log("el usuario y la contraseña son correctos")
    }else{
        console.log("la contraseña es incorrecta")
    }

}else{
    console.log("el usuario es incorrecto")
}