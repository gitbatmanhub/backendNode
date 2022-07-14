const Math ={};
function suma(x1, x2){
    return x1 + x2;
}
function resta(x1, x2){
    return x1-x2;
}
function mult(x1 , x2){
    return x1*x2;
}
function div(x1, x2){
    if (x2==0){
        console.log("No se puede dividir por 0")
    }else{
        return x1/x2;
    }
}
//Exportar una función
/*
exports.suma=suma;
exports.resta=resta;
exports.mult=mult;
exports.div=div;
 */

//Exportar el objeto con sus propiedades
Math.suma= suma;
Math.resta= resta;
Math.mult= mult;
Math.div= div;
module.exports = Math;







