/* NOMBRE,TIPO,PESO,ALTURA,EVOLUCION,ATAQUES,POKEDEX */
class Pokemon {
    #tipo;/* PROPIEDAD PRIVADA */
    /* EL PRIMER METODO QUE SE EJECUTA AUTOMATICAMENTE AL CREAR UN OBJETO */
    constructor(nombreParam,tipoParam,pesoParam,alturaParam,evolucionParam,ataqueParam,numPokedexParam,fuerzaParam){
        this.nombre = nombreParam;
        this.#tipo = tipoParam;
        this.peso = pesoParam;
        this.altura = alturaParam;
        this.evolucion = evolucionParam;
        this.ataque = ataqueParam;
        this.numPokedex = numPokedexParam;
        this.fuerza = fuerzaParam;

    }
    /* PROPIEDADES COMPUTADAS GET Y SET  */
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }

    /* METODOS */
    mostrarDatos(){
        document.write(`<h2>Pokemon ${this.nombre}</h2>
        <ul>
        <li>Tipo: ${this.tipo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Evolucion: ${this.evolucion}</li>
        <li>Num Pokemon: ${this.numPokedex}</li>

        </ul>`)
    }

}

/* CREAR O INSTANCIAR UN OBJETO */

const charmander = new Pokemon ('Charmander','fuego',15,1.20,['charmeleon','charizard'],['blaze','ascuas','lanzallamas'],4,4);
const togepi= new Pokemon("Togepi","hada",1.5,0.3,["Togetic","Togekiss"],["gracias serena","dicha y estusiasmo","placaje"],175,15);

console.log(charmander)
document.write(`<h2>Pokemon : ${charmander.nombre}</h2>`);
document.write(`<h2>Tipo : ${charmander.tipo}</h2>`);
charmander.tipo = 'fuego 2';
document.write(`<h2>Tipo : ${charmander.tipo}</h2>`);

charmander.mostrarDatos();
togepi.mostrarDatos();
