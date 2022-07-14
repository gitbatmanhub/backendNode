//Crear archivo con node

const fileSystem = require('fs');

fileSystem.writeFile('./texto.txt', 'Linea1', function (err){
    if(err){
        console.log(err)
    }else {
        console.log('Archivo creado')
    }
})
console.log('Ultima linea de código')

