export class NavigationComponent {
  /**metodo de clase que va a cargar mediante jQuery el html allá donde se le llame*/
  render(selector) {
    $(function () {
      $(selector).load(
        "src/components/layout-components/navigation/navigation.component.html"
      );
    });
  }
}
