module wifindBarApp {
  export class Nombre {

    // COLABORADORES INTERNOS
    private descripcion:string;

    // CONSTRUCTOR
    constructor(unaDescripcion:string) {
      this.descripcion = unaDescripcion;
    }

    // MENSAJES QUE RESPONDE
    public getDescripcion():string {
      return this.descripcion;
    }

  }

}
