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
/* CLASES HIJO(HERENCIA) */
class PokemonLegendario extends Pokemon{
    #rareza; /* declaro metodos privados */
    #ataqueEspecial;
    constructor(nombreParam,tipoParam,pesoParam,alturaParam,evolucionParam,ataqueParam,numPokedexParam,fuerzaParam,rareza,ataqueEspecial){
        super(nombreParam,tipoParam,pesoParam,alturaParam,evolucionParam,ataqueParam,numPokedexParam,fuerzaParam)
        this.#rareza=rareza;
        this.#ataqueEspecial=ataqueEspecial;
    }
    get rareza (){
        return this.#rareza;
    }
    set rareza(nuevaRareza){
        if(nuevaRareza,length>=3 && nuevaRareza,length<=10){
        this.#rareza=nuevaRareza;
        }else{
            alert('Ingresaste un valor erroneo');
        }
    }
    get ataqueEspecial (){
        return this.#ataqueEspecial;
    }
    set ataqueEspecial(nuevoAtaqueEspecial){
            this.#ataqueEspecial=nuevoAtaqueEspecial;
    }

    /* POLIMORFISMO CUANDO UN METODO YA CREADO UTILIZARLO PARA ALGO NUEVO */
    mostrarDatos(){
        document.write(`<h2>Pokemon ${this.nombre}</h2>
        <ul>
        <li>Num Pokemon: ${this.numPokedex}</li>
        <li>Tipo: ${this.tipo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Evolucion: ${this.evolucion}</li>
        <li>Rareza: ${this.rareza}</li>
        <li>Ataque Especial: ${this.ataqueEspecial}</li>


        </ul>`)/* en this.rareza y ataque especial utilizo el getter  */


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

const mewtwo = new PokemonLegendario("Mewtwo","psiquico",122,2,[],['placaje','confusion'],150,7,'infrecuente',['charge bram','electro ball']);

mewtwo.mostrarDatos();