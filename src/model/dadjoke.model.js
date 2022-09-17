/**
 * La clase DadJoke es en realidad un servicio que conecta con la API externa y graba la respuesta en las propiedades de la clase cada vez que se llama a su metodo constructor
 */
export class DadJoke {

    constructor (id, joke, value, status){
        this.id = id;
        this.joke = joke;
        this.value = value;
        this.status = status;
    }

   

}