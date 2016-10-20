module wifindBarApp {
  export class MarcadorGoogleMaps {

    public id:string;
    public options;
    public latitude:number;
    public longitude:number;
    public title:string;
    public icon:string;
    private identificador:string;

    constructor(id:string, ubicacion:Ubicacion, iconUrl:string, identificador:string) {
      this.id = id;
      this.latitude = ubicacion.getLatitud();
      this.longitude = ubicacion.getLongittud();
      this.title = 'm' + id;
      this.icon = iconUrl;
      this.identificador = identificador;
    }

    public getIdentificador() {
      return this.identificador;
    }
  }
}
