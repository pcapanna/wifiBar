import {Mapa} from './Mapa';
import {Bar} from './Bar';
import {Marcador} from "./Marcador";

export class DibujadorDeBares{
  public dibujarBar(bar: Bar) {
    var marcador: Marcador = new Marcador(bar.ubicacion, "/images/bar2.png", "Bar");
    Mapa.getInstance().agregarNuevoMarcador(marcador);
  }
  public borrarBares() {
    var tipoMarcador : string = "Bar";
    Mapa.getInstance().borrarMarcadores(tipoMarcador);
  }
}
