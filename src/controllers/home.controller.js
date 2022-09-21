import { NavigationComponent } from "/src/components/layout-components/navigation/navigation.component.js";
import { MainComponent } from "/src/components/home/home.component.js";

/**viewport for mobile */
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

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