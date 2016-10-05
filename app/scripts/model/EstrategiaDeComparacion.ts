import {DetalleDeBar} from "./DetalleDeBar";
import {Ubicacion} from "./Ubicacion";

export abstract class EstrategiaDeComparacion{

  abstract compararSegun(unDetalleDeBar: DetalleDeBar): boolean;

}


export class EstrategiaDistanciaMaximaEnMetros extends EstrategiaDeComparacion{

  // COLABORADORES INTERNOS
  unaDistancia: number;
  unaUbicacionOrigen: Ubicacion;

  // CONSTRUCTOR
  constructor(unaDistancia: number, unaUbicacionOrigen: Ubicacion){
    this.unaDistancia = unaDistancia;
    this.unaUbicacionOrigen = unaUbicacionOrigen;
  }

  // MENSAJES QUE RESPONDE
  compararSegun(unDetalleDeBar: DetalleDeBar): boolean{

    var ubicacionBar: Ubicacion = unDetalleDeBar.getDireccionBar();

    // implementame la comparacion

    return true;
  }
}

export abstract class EstrategiaCalificacionesEstrellasPorCaracteristica extends EstrategiaDeComparacion{

  abstract compararSegun(unDetalleDeBar: DetalleDeBar): boolean;

}


export class EstrategiaCalficiacionesEstrellasEnchufes extends EstrategiaCalificacionesEstrellasPorCaracteristica{

  // COLABORADORES INTERNOS
  calificacionDesde: number;
  calificacionHasta: number;

  // CONSTRUCTOR
  constructor(calificacionDesde: number, calificacionHasta: number){
    this.calificacionDesde = calificacionDesde;
    this.calificacionHasta = calificacionHasta;
  }

  // MENSAJES QUE RESPONDE

  compararSegun(unDetalleDeBar: DetalleDeBar): boolean{
    var califEnchufes = unDetalleDeBar.getCalificacionEnchufes;
    return (califEnchufes <= this.calificacionHasta && califEnchufes >= this.calificacionDesde);
  }
}

export class EstrategiaCalficiacionesEstrellasWifi extends EstrategiaCalificacionesEstrellasPorCaracteristica{

  // COLABORADORES INTERNOS
  calificacionDesde: number;
  calificacionHasta: number;

  // CONSTRUCTOR
  constructor(calificacionDesde: number, calificacionHasta: number){
    this.calificacionDesde = calificacionDesde;
    this.calificacionHasta = calificacionHasta;
  }

  // MENSAJES QUE RESPONDE

  compararSegun(unDetalleDeBar: DetalleDeBar): boolean{
    var califWifi = unDetalleDeBar.getCalificacionWifi;
    return (califWifi <= this.calificacionHasta && califWifi >= this.calificacionDesde);
  }
}
