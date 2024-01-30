// Funciones 

const saludar = (nombre) => {
return `Hola, mi nombre es ${nombre}`
}

console.log(saludar('Emma'))

const saludar2 = (nombre) => `Hola, mi nombre es ${nombre}`

console.log(saludar2('Emma'))


const getUser = () => {
    return {
        uid: 'ABC123',
        usarname: 'El_paisa1202',

    }
}

console.log(getUser())

 const getUsuarioActivo = (nombre) => 
   ( {
        uid: 'ABC567',
        username: nombre
    })
 

 const usuarioActivo = getUsuarioActivo('emmapava26')
 
 console.log(usuarioActivo)