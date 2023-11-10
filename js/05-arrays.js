const personajes = [];
const peliculas = [
  "interestellar",
  "matrix",
  "lotr",
  2023,
  true,
  "los juegos del hambre",
];

/* mostrar un array */
console.log(peliculas);
document.write(peliculas);

document.write(`<p>El primer elemento del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(
  `<p>El ultimo elemento del array es ${peliculas[peliculas.length - 1]}</p>`
);


document.write(`<h2>Lista de peliculas</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

/* AGREGAR ELEMENTOS AL ARRAY  */
peliculas.unshift('batman','Ironman 1');/* metodo para agregasr elemento s al principiodel array */
document.write(`<h2>Lista de peliculas,con dos pelis nuevas (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

peliculas.splice(3,0,'scream');/* METODO PARA AGREGAR EN UBIOCACION DESEADA(TAMBIEN SE USA PARA BORRAR) */
document.write(`<h2>Lista de peliculas, agrego peli scream (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);


peliculas.push('gran turismo');/* AGREGAR ELEMENTO/S AL FINAL DEL ARRAY */
document.write(`<h2>Lista de peliculas,agregamos peli gran turismo (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

/* MODIFICAR ELMENTOS DEL ARRAY */
peliculas[6] = 'inception';
document.write(`<h2>Lista de peliculas,modificamos el elemento de la posicion 6 del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

/* ELIMINAR ELEMENTOS DEL ARRAY  */

peliculas.shift(); /* ELIMINAR EL PRIMER ELEMENTO DEL ARRAY */
document.write(`<h2>Eliminamos el primer elemento del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

peliculas.splice(6,1)/* BORRAR ELEMENTOS DEL MEDIO DEL ARRAY */
/*peliculas.splice(6,2);  */
/* peliculas.splice(6); */
document.write(`<h2>Eliminamos un elemento del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

peliculas.pop()/* BORRAR EL ULTIMO ELEMENTO DEL ARRAY */
document.write(`<h2>Eliminamos el ultimo elemento del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

