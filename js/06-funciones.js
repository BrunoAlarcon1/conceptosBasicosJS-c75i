/* FUNCIONES DECLARATIVAS */
function saludar() {
  /* todo el codigo que sabe hcaer mi funcion */
  document.write("<p>Hola mundo</p>");
}
function saludoNuevo(nombreSolicitado, apellidoSolicitado) {
  document.write(`<p>Hola ${nombreSolicitado} ${apellidoSolicitado}</p> `);
}

function multiplicar(numero1,numero2){
    const resultado = numero1*numero2;
    console.log(resultado);
    return (resultado);

}

saludar();
saludar();

const nombre = prompt("Ingrese un nombre: ");
const apellido = prompt("Ingrese un apellido: ");
saludoNuevo(nombre, apellido);
saludoNuevo(`Jocker`);
saludoNuevo(`Harry`,`Potter`);

const resultadoNuevo= multiplicar(30,3);
document.write(`<p>El resultado de la multiplicacion fue: ${resultadoNuevo}</p>`);
document.write(`<p>El resultado de la multiplicacion fue: ${multiplicar(45,3)}</p>`);



