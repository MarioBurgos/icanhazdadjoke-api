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

  renderJoke() {
    //prueba de fetch
    let joke = new DadJoke();
    let _fs = new FetchService();
    let response = _fs.fetchFromURL(CONSTANTS.URL_DADJOKE).then((res) => {
      let data = res;
      return data;
    });
    console.log(response);
  }
}
