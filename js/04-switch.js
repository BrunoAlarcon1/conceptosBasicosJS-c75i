/* 1- consulñte el saldo 2- ingrese dinero 3- extraiga dinero */
/*opcion = opcion.toLowerCase(); transformo un string a minusculas */
/*opcion = opcion.toLowerCase(); transformo un string a mayuscula */
/* 
if(opcion ===1){
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
}else if (opcion ===1){
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
}else if (opcion ===1){
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
}else if (opcion ===1){
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
}else{
    alert(`Selecciono una opcion erronea`);
} */

let saldo = 0;
do {
  let opcion = prompt(
    `seleccione una opcion: 1- Consulte el saldo, 2- Ingrese dinero, 3- extraiga dionero`
  );

  console.log(opcion.toLowerCase());
  opcion = opcion.toLowerCase(); /* transformo un string a minusculas */
  switch (opcion) {
    case "saldo":
    case "consultar saldo":
    case "1":
      document.write(`<p>Su saldo actual es ${saldo}</p>`);
      console.log(`Su saldo actual es de ${saldo}`);
      break;
    case "2":
      let deposito = parseInt(prompt("Cuanto deseas depositar?: "));

      console.log(isNaN('hola'));/* Si no es un numero devuelve true */
      console.log(isNaN('100'));/* Si es un numero devuelve false */
      
      /* Si el deposito es un numero */
      if(!isNaN(deposito) && deposito >0){
      saldo += deposito;
      document.write(
        `<p>Se ingreso $${deposito}, su saldo actual es $${saldo}</p>`
      );
      console.log(`Ingrese dinero $${deposito} `);
      console.log(`Su saldo actual es de ${saldo}`);
      }else{
        alert("Ingreso un valor invalido");
      }
      break;
    case "3":
      document.write(`<p>Quiere extraer dinero</p>`);
      console.log("Extraer dinero");
      break;
    default:
      alert(`Selecciono una opcion erronea`);
      break;
  }
} while (confirm("Desea realizar otra operacion?"));
