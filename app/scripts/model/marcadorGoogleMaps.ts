module wifindBarApp {
  export class MarcadorGoogleMaps {

    public id: string;
    public options;
    public latitude: number;
    public longitude: number;
    public icon: string;
    private identificador: string;

    constructor(id: string, ubicacion: Ubicacion, iconUrl: string, identificador: string, title:string) {
      this.id = id;
      this.latitude = ubicacion.getLatitud();
      this.longitude = ubicacion.getLongittud();
      this.icon = iconUrl;
      this.identificador = identificador;
      this.options = {title : title}
    }

    public getIdentificador() {
      return this.identificador;
    }
  }
}
