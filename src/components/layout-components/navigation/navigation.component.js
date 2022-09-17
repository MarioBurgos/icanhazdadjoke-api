export class NavigationComponent {
  /**metodo de clase que va a cargar mediante jQuery el html (y el css en el head) allá donde se le llame*/
  render(selector) {
    // inyectar css
    $("head").append(
        '<link rel="stylesheet" href="/src/components/layout-components/navigation/navigation.component.css" type="text/css" />'
      );
      //inyectar html
    $(function () {
      $(selector).load(
        "/src/components/layout-components/navigation/navigation.component.html"
      );
    });
  }
}
