/// <reference path="../app.ts" />

module wifindBarApp {

  export class Ubicacion {
    private latitud: number;
    private longitud: number;

    constructor(latitud: number, longitud: number) {
      this.latitud = latitud;
      this.longitud = longitud;
    }

    public getlatitud(): number {
      return this.latitud;
    }

    public getlongittud(): number {
      return this.longitud;
    }
  }
}
