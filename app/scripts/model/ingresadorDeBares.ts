module wifindBarApp {

  export class IngresadorDeBares {

    // COLABORADORES INTERNOS
    private guiaDeBares: GuiaDeBares;
    private relacionadorBarDetalles: RelacionadorBarDetalles;

    // CONSTRUCTOR
    constructor(unaGuiaDeBares: GuiaDeBares, unRelacionadorBarDetalles: RelacionadorBarDetalles) {
      this.guiaDeBares = unaGuiaDeBares;
      this.relacionadorBarDetalles = unRelacionadorBarDetalles;
    }

    // MENSAJES
    public ingresarBar(unNombre:Nombre, unaUbicacion:Ubicacion): void {
      var unBar:Bar = new Bar(unNombre, unaUbicacion);
      var unDetalle:DetalleDeBar = new DetalleDeBar(unBar);

      this.guiaDeBares.agregarUnBar(unBar);
      this.relacionadorBarDetalles.agregarEntrada(unBar, unDetalle);
    }

  }
}
