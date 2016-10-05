import {DetalleDeBar} from "./DetalleDeBar";
import {Ubicacion} from "./Ubicacion";

export abstract class EstrategiaDeComparacion {
  public abstract compararSegun(unDetalleDeBar:DetalleDeBar):boolean;
}


export class EstrategiaDistanciaMaximaEnMetros extends EstrategiaDeComparacion {

  // COLABORADORES INTERNOS
  private unaDistancia:number;
  private unaUbicacionOrigen:Ubicacion;

  // CONSTRUCTOR
  constructor(unaDistancia:number, unaUbicacionOrigen:Ubicacion) {
    super();
    this.unaDistancia = unaDistancia;
    this.unaUbicacionOrigen = unaUbicacionOrigen;
  }

  // MENSAJES QUE RESPONDE
  public compararSegun(unDetalleDeBar:DetalleDeBar):boolean {
    var ubicacionBar:Ubicacion = unDetalleDeBar.getDireccionBar();
    // TODO: implementame la comparacion
    return true;
  }
}

export abstract class EstrategiaCalificacionesEstrellasPorCaracteristica extends EstrategiaDeComparacion {
  public abstract compararSegun(unDetalleDeBar:DetalleDeBar):boolean;
}

export class EstrategiaCalficiacionesEstrellasEnchufes extends EstrategiaCalificacionesEstrellasPorCaracteristica {

  // COLABORADORES INTERNOS
  private calificacionDesde:number;
  private calificacionHasta:number;

  // CONSTRUCTOR
  constructor(calificacionDesde:number, calificacionHasta:number) {
    super();
    this.calificacionDesde = calificacionDesde;
    this.calificacionHasta = calificacionHasta;
  }

  // MENSAJES QUE RESPONDE

  compararSegun(unDetalleDeBar:DetalleDeBar):boolean {
    var califEnchufes:number = unDetalleDeBar.getCalificacionEnchufes();
    return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
  }
}

export class EstrategiaCalficiacionesEstrellasWifi extends EstrategiaCalificacionesEstrellasPorCaracteristica {

  // COLABORADORES INTERNOS
  private calificacionDesde:number;
  private calificacionHasta:number;

  // CONSTRUCTOR
  constructor(calificacionDesde:number, calificacionHasta:number) {
    super();
    this.calificacionDesde = calificacionDesde;
    this.calificacionHasta = calificacionHasta;
  }

  // MENSAJES QUE RESPONDE

  public compararSegun(unDetalleDeBar:DetalleDeBar):boolean {
    var califWifi:number = unDetalleDeBar.getCalificacionWifi();
    return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
  }
}
