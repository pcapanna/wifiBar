module wifindBarApp {

  export class GuiaDeBares {

    private static _instance:GuiaDeBares = new GuiaDeBares([]);
    // COLABORADORES INTERNOS
    private bares:Bar[];

    // CONSTRUCTOR
    constructor(bares:Bar[]) {
      this.bares = bares;
    }

    public static getInstance() {
      return this._instance;
    }

    // MENSAJES QUE RESPONDE
    public getBares():Bar[] {
      return this.bares;
    }

    public addBar(unBar:Bar):void {
      (this.bares).push(unBar);
    }
  }
}
