//Leer archivo con node
const fileSystem = require('fs');

fileSystem.readFile('./texto.txt', function (err, data) {
    if (err){
        console.log(err);
    }else{
        console.log(data.toString())

    }

})