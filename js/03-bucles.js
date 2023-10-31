/* 
while(condicion logica){
    todo el codigo que quiero ejecutar varias veces
    agregar algo para que la condicion logica no se cumpla
}

*/

let renglon=100;
/* document.write("<p>Este es el renglon número " + renglon +"</p>") */

while(renglon<=10){
    document.write(`<p>Este es el renglon número ${renglon} </p>`)
    renglon+=1;
}

/* 
si os i se ejecuta una vez lo que esta en do y despues evalua la condicion logica
do{
    todo el codigo que quiero ejecutar varias veces 
    agregar algo para que la condicion logica no se cumpla

}while{(condicion logica)

}
*/

let contador = 100;

do {
    document.write(`<p>Este es el renglon número ${contador} </p>`)
    contador+=1;
    
} while (contador<=10);