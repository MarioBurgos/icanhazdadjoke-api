import { JokeComponent } from "/src/components/joke-component/joke.component.js";
import { NavigationComponent } from "/src/components/layout-components/navigation/navigation.component.js";

/**viewport for mobile */
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

/**EVENT HANDLING */

//on load window:  cargar los componentes de la página
window.addEventListener("load", () => {
  //carga el header
  let navigationComp = new NavigationComponent();
  navigationComp.render("#app-header");
  //carga el componente Joke
  let jokeComp = new JokeComponent();
  jokeComp.render("#app-jokes");
  //enseñar el primer chiste
  jokeComp.showJoke();
  jokeComp.addClickListeners();
});

