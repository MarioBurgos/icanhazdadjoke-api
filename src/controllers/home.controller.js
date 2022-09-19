import { NavigationComponent } from "/src/components/layout-components/navigation/navigation.component.js";
import { MainComponent } from "/src/components/home/home.component.js";

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