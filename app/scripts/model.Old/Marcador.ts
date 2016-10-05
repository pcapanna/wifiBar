import {Ubicacion} from "./Ubicacion";

export class Marcador {
  private ubicacion:Ubicacion;
  private iconoUrl:string;
  private tipo:string;
  constructor(ubicacion:Ubicacion, iconoUrl:string, tipo:string) {
    this.ubicacion = ubicacion;
    this.iconoUrl = iconoUrl;
    this.tipo = tipo;
  }
}
