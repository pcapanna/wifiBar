import {DetalleDeBar} from "./DetalleDeBar";
import {Ubicacion} from "./Ubicacion";

export abstract class CriterioDeAceptacion {
  public abstract acepta(unDetalleDeBar:DetalleDeBar):boolean;
}


export class CriterioDeAceptacionDistanciaMaxima extends CriterioDeAceptacion {

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
  public acepta(unDetalleDeBar:DetalleDeBar):boolean {
    var ubicacionBar:Ubicacion = unDetalleDeBar.getDireccionBar();
    // TODO: implementame la comparacion
    return true;
  }
}

export abstract class CriterioDeAceptacionEstrellasPorCaracteristica extends CriterioDeAceptacion {
  public abstract acepta(unDetalleDeBar:DetalleDeBar):boolean;
}

export class CriterioDeAceptacionEstrellasPorEnchufes extends CriterioDeAceptacionEstrellasPorCaracteristica {

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

  acepta(unDetalleDeBar:DetalleDeBar):boolean {
    var califEnchufes:number = unDetalleDeBar.getCalificacionEnchufes();
    return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
  }
}

export class CriterioDeAceptacionEstrellasPorWifi extends CriterioDeAceptacionEstrellasPorCaracteristica {

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

  public acepta(unDetalleDeBar:DetalleDeBar):boolean {
    var califWifi:number = unDetalleDeBar.getCalificacionWifi();
    return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
  }
}
