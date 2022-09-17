import { DadJoke } from "../model/dadjoke.model.js";
import { FetchService } from "../services/fetch.service.js";

import { CONSTANTS } from "../data/constants.js";
import { NavigationComponent } from "../components/layout-components/navigation/navigation.component.js";


let joke = new DadJoke();
let _fs = new FetchService();
let response = _fs.fetchFromURL(CONSTANTS.URL_DADJOKE)
            .then(res => {
                let pepe = res;
                return pepe;
            });
console.log(response);


/**EVENT HANDLING */
window.addEventListener('load', evt =>{
    //crea el header
    let navigationComp = new NavigationComponent();
    divHeader = navigationComp.render('#app-header')

});