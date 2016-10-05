export class Ubicacion {
  private latitud:number;
  private longitud:number;

  constructor(latitud:number, longitud:number) {
    this.latitud = latitud;
    this.longitud = longitud;
  }

  public getLatitud():number {
    return this.latitud;
  }

  public getLongittud():number {
    return this.longitud;
  }
}

