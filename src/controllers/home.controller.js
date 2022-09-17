import { DadJoke } from "../model/dadjoke.model.js";
import { FetchService } from "../services/fetch.service.js";

import { CONSTANTS } from "../data/constants.js";
import { NavigationComponent } from "../components/layout-components/navigation/navigation.component.js";
import { MainComponent } from "../components/home/home.component.js";


//prueba de fetch
let joke = new DadJoke();
let _fs = new FetchService();
let response = _fs.fetchFromURL(CONSTANTS.URL_DADJOKE)
            .then(res => {
                let data = res;
                return data;
            });
console.log(response);


/**EVENT HANDLING */

//on load window:  cargar los componentes de la página
window.addEventListener('load', evt =>{
    //carga el header
    let navigationComp = new NavigationComponent();
    navigationComp.render('#app-header');
    //carga el main
    let mainComp = new MainComponent();
    mainComp.render('#app-home');

});