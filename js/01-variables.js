let anioActual = 2023;
const universe='https://universe.rollingcodeschool.com/';

/* Mostrar mensaje */
console.log(anioActual);
console.log("anioActual");
console.log("Año Actual: " + anioActual)
console.log(universe);

/* Modificar el contenido de una variable */
anioActual = 2024;
console.log(anioActual);

document.write('<p class="parrafoDestacado">Esto es una prueba de document.write</p>');

/* Ventanas emergentes */
alert('Hola Mundo');

/* SOLICITAR A UN USUARIO UN NOMBRE Y MOSTRAR UN SALUDO */
const nombreUsuario= prompt ('ingrese su nombre');
console.log(nombreUsuario);

document.write('<p class="parrafoDestacado">Bienvenido ' + nombreUsuario + '</p>');

/* SOLICITA A UN UUARIO UN PRECIO DE UN PRODUCTO EN DOLARES */

const precioSolicitado= parseFloat(prompt('Ingrese un valor en dolares'));
console.log(precioSolicitado);

/* parseInt('50') convertir a enteros*/
/* parseFloat(''50.4) convertir a decimal */


alert('El importe indicado corresponde a USD$' + (precioSolicitado + 2 ) );