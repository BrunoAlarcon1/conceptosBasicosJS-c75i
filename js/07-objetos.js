/* NOTACION LITERAL */
const usuario = {
    /* PROPIEDADES  clave : valor*/
    nombre : "Juan",
    edad: 18,
    mail : "juan@gmail.com",
    apellido : "perez",
    password : "21234Efg$",
    nickname : "Juani" ,

    /* METODOS */

    login: function (){
        console.log(this);
        document.write(`<p>El usuario ${this.nombre} fue logeado</p>`);
    },

    logout: ()=>{
        document.write(`<p>El usuario fue deslogueado</p>`);

    }
};


console.log(usuario);
document.write(`<h2>Usuario ${usuario.nickname}</h2>`);
document.write(`<h2>Nombre Completo:  ${usuario.nombre} , ${usuario.apellido}</h2>`);
document.write(`<p>Edad: ${usuario[`edad`]}</p>`)/* OTRA ALTERNATICA APARA MOSTRAR PROPIEDAD */

/* MODIFICAR UNA PROPIEDAD DEL OBJETO */
    usuario.edad =25;
    document.write(`<p>Edad: ${usuario[`edad`]}</p>`)

    /* AGREGAR UNA PROPIEDAD NUEVA */
    usuario.fotoPerfil = "2dsa";
    console.log(usuario.fotoPerfil)

    /* BORRAR UNA PROPIEDAD DEL OBJETO */

    delete usuario.apellido;
    console.log(usuario);

    /* USAR METODOS DEL OBJETO */

    usuario.login();
    usuario.logout();