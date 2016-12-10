module wifindBarApp {

  export class GuiaDeBares {

    // COLABORADORES INTERNOS
    private bares:Bar[];

    // CONSTRUCTOR
    constructor() {
    }

    // MENSAJES QUE RESPONDE
    public getBares():Bar[] {
      return this.bares;
    }

    public agregarUnBar(unBar:Bar):void {
      this.bares.push(unBar);
    }
  }
}
