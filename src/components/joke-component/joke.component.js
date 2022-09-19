import { DadJoke } from "/src/model/dadjoke.model.js";
import { FetchService } from "/src/services/fetch.service.js";
import { CONSTANTS } from "/src/data/constants.js";
import { RankingService } from "../../services/ranking.service.js";
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

  /** (Async) Este metodo hace fetch a la url de la api mediante un servicio y devuelve una promesa*/
  fetchJoke() {
    let joke = new DadJoke();
    let _fs = new FetchService();
    let response = _fs.fetchFromURL(CONSTANTS.URL_DADJOKE).then((res) => {
      return res;
    });
    return response;
  }

  /**El metodo guarda los datos del chiste en un archivo json mediante servicio */
  getRank(){
    let _rs = new RankingService();
    let ranking = _rs.getRanking().then(res =>{ return res.json();});
    //console.log('getRank()',ranking);
    return ranking;
  }

  saveRank(joke){
    this.getRank().then(res=> {
      let rank = res;
      console.log('this.ra', rank, 'joke', joke);
    let _rs = new RankingService();
      _rs.saveRank(rank, joke);
    }); 
  }


  /** el metodo maneja la promesa del metodo fetchJocke de esta clase y cuando tiene respuesta, crea un elemento <p> y le appendChild al html del componente*/
  showJoke(){
    this.fetchJoke().then((res) => {
      console.log('showJoke()',res);
      this.joke = res; //grabar el chiste en la propiedad de la clase
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
  addClickListeners(){
    document.addEventListener('click', evt=>{
      if (evt.target.id == 'btn-new-joke'){
        this.showJoke();
      }
      if (evt.target.id == 'btn-like'){
        this.saveRank(this.joke);
      }
      
    });

  }
}
