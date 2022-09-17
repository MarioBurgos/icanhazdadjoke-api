import { DadJoke } from "../model/dadjoke.model.js";
import { FetchService } from "../services/dadjoke.service.js";

import { CONSTANTS } from "../data/constants.js";


let joke = new DadJoke();
let _fs = new FetchService();
let response = _fs.fetchFromURL(CONSTANTS.URL_DADJOKE)
            .then(res => {
                let pepe = res;
                return pepe;
            });
console.log(response);