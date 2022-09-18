import { JokeComponent } from "/src/components/joke-component/joke.component.js";
import { NavigationComponent } from "/src/components/layout-components/navigation/navigation.component.js";


/**EVENT HANDLING */

//on load window:  cargar los componentes de la página
window.addEventListener('load', evt =>{
    //carga el header
    let navigationComp = new NavigationComponent();
    navigationComp.render('#app-header');
    //carga el componente Joke
    let jokeComp = new JokeComponent();
    jokeComp.render();
});