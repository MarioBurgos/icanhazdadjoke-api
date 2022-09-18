import { DadJoke } from "/src/model/dadjoke.model.js";
import { FetchService } from "/src/services/fetch.service.js";
import { CONSTANTS } from "/src/data/constants.js";
export class JokeComponent {

  /**metodo de clase que va a cargar mediante jQuery el html (y el css en el head) allá donde se le llame*/
  render(selector) {
    // inyectar css
    $("head").append(
      '<link rel="stylesheet" href="/src/components/joke-component/joke.component.css" type="text/css" />'
    );
    //inyectar html
    $(function () {
      $(selector).load("/src/components/joke-component/joke.component.html");
    });
  }

  /** (Async) Este metodo hace fetch a la url de la api y devuelve una promesa*/
  fetchJoke() {
    let joke = new DadJoke();
    let _fs = new FetchService();
    let response = _fs.fetchFromURL(CONSTANTS.URL_DADJOKE).then((res) => {
      return res;
    });
    return response;
  }

  /** el metodo maneja la promesa del metodo fetchJocke de esta clase y cuando tiene respuesta, crea un elemento <p> y le appendChild al html del componente*/
  showJoke(){
    this.fetchJoke().then((res) => {
    let parent = document.querySelector('#joke-value');
    let p = document.createElement('P');
    p.appendChild(document.createTextNode(res.joke));
    //controlar el tamaño de letra
    if (res.joke.length > 125) p.classList.add('text-sm');
    if (res.joke.length < 125 && res.joke.length > 50) p.classList.add('text-md');
    if (res.joke.length < 50) p.classList.add('text-lg');
    parent.innerHTML = '';
    parent.appendChild(p);
  });
  }

  /**Añade listener al boton que hay en el html de este componente y que es el que pide y muestra nuevos chistes */
  addClickListener(){
    document.addEventListener('click', evt=>{
      if (evt.target.id == 'btn-new-joke'){
        this.showJoke();
      }
    })
  }
}
