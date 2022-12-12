//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

var n1,n2,n3,n4,n5, t, mayor;
n1= 10;
n2= 6;
n3= 5;
n4= 6;
n5= 2;

if(n1>n2){
    t=n1;
}else{
    t=n2;
}
if(t>n3){
    mayor=t;
}else{
    mayor=n3;
}
if(t>n4){
    mayor=t;
}else{
    mayor=n4;
}
if(t>n5){
    mayor=t;
}else{
    mayor=n5;
}
console.log(mayor)

//Ejercicio 2: María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
var n1,n2,n3,n4,n5,t,menor;
n1= 23;
n2= 6;
n3= 12;
n4= 9;
n5= 8;

if(n1<n2){
    t=n1;
}else{
    t=n2;
}
if(t<n3){
    menor=t;
}else{
    menor=n3;
}
if(t<n4){
    menor=t;
}else{
    menor=n4;
}
if(t<n5){
    menor=t;
}else{
    menor=n5;
}
console.log(menor)

//Escribir una función que permita saber si un número se repite dentro de un arreglo.
const array1 = [3, 1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 7, 3, 2, 6, 3, 6, 4, 7, 5, 8, 3, 6, 9, 3, 5];

const busqueda = (arreglo, callback) => {
    let variable = 0;
    let contador = 0;
    let cuenta = 0;
    arreglo.map(p => {
        cuenta = 0
        arreglo.map(x => {
            if (p == x) { cuenta++ }
        })
        if (cuenta > contador) {
            contador = cuenta;
            variable = p;
        }
    });
    callback(`valor mas repetido:${variable}, numero de veces contada: ${contador}`)

}

busqueda(array1, (respuesta) => {
    console.log(`respuesta: ${respuesta}`)
});


//Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado.
const array = [1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,];
SinOrden= array.sort(function(){return Math.random()-0.5})
document.write(SinOrden)
console.log(SinOrden)


//Implementación de los ejercicios con Javascript
//Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor
//Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
//Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
//Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
//Elabora un algoritmo para leer un número y determinar si es par o impar

