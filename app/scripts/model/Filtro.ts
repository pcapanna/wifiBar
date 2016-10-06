import {Bar} from "./Bar";
import {DetalleDeBar} from "./DetalleDeBar";
import {EstrategiaDeComparacion} from "./EstrategiaDeComparacion";
import {CriterioDeAceptacion} from "./CriterioDeAceptacion";

export abstract class Filtro {
  public abstract filtrar(unaColeccionDeDetalles:DetalleDeBar[]):Bar[];
}

export class FiltroNull extends Filtro {

  // CONSTRUCTOR
  constructor() {
    super();
  }

  // MENSAJES QUE RESPONDE
  public filtrar(unaColeccionDeDetalles:DetalleDeBar[]):Bar[] {
    var baresFiltrados:Bar[] = [];
    for (var detalle of unaColeccionDeDetalles) {
      baresFiltrados.push(detalle.getBar());
    }
    return baresFiltrados;
  }
}

export class FiltroDecorator extends Filtro {

  // COLABORADORES INTERNOS
  private filtroComponente:Filtro;
  private estrategia:CriterioDeAceptacion;

  // CONSTRUCTOR
  constructor(unFiltroComponente:Filtro, unaEstrategia:CriterioDeAceptacion) {
    super();
    this.filtroComponente = unFiltroComponente;
    this.estrategia = unaEstrategia;
  }

  // MENSAJES QUE RESPONDE
  public filtrar(unaColeccionDeDetalles:DetalleDeBar[]) {
    var detallesFiltrados:DetalleDeBar[] = [];
    for (var detalle of unaColeccionDeDetalles) {
      if (this.estrategia.acepta(detalle))
        detallesFiltrados.push(detalle);
    }

    return this.filtroComponente.filtrar(detallesFiltrados);
  }
}

// wifindBarApp.component('Filtro', Filtro);
// wifindBarApp.component('FiltroNull', FiltroNull);
// wifindBarApp.component('FiltroPorCaracteristica', FiltroPorCaracteristica);
