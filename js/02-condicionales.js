/* 
if(condicion logica){
    todo el codigo ue quiero realizar si la condicion es verddera
}
*/

/* Solicite la edad al usuario e indique si debe votar */
/* 16  y menores de 18 es optativo, mayores de 70 */

const edad = parseInt(prompt('Ingrese su edad'));

if(edad>=18){
    document.write('Debe votar');
}else{
    document.write('No debe votar');
}
