let usuarios = [
    {
        nombre: 'Jose',
        edad : 22,
        estatura: 1.95
    },
    {
        nombre: 'Alberto',
        edad : 28,
        estatura: 1.80
    },
    {
        nombre: 'Juan',
        edad : 21,
        estatura: 1.50
    },
    {
        nombre: 'Jesus',
        edad : 19,
        estatura: 1.65
    }
];
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la edad mayor
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la edad menor
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la estatura mayor
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la estatura menor
let user_mayor = usuarios.reduce((res, obj) => { return obj.edad < res.edad ? obj: res; });
console.log("El usuario de menor edad es:" + user_mayor.nombre);
let user_menor = usuarios.reduce((res, obj) => { return obj.edad > res.edad ? obj: res; });
console.log("El usuario de mayor edad es:" + user_menor.nombre);
let user_alto = usuarios.reduce((res, obj) => { return obj.estatura < res.estatura ? obj: res; });
console.log("El usuario de menor estatura es:" + user_alto.nombre);
let user_bajo = usuarios.reduce((res, obj) => { return obj.estatura > res.estatura ? obj: res; });
console.log("El usuario mas alto es:" + user_bajo.nombre);