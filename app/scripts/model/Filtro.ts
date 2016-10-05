import {Bar} from "./Bar";
import {DetalleDeBar} from "./DetalleDeBar";
import {EstrategiaDeComparacion} from "./EstrategiaDeComparacion";

export abstract class Filtro {
  public abstract filtrar(unaColeccionDeDetalles:DetalleDeBar[]):Bar[];
}

class FiltroNull extends Filtro {

  // MENSAJES QUE RESPONDE
  public filtrar(unaColeccionDeDetalles:DetalleDeBar[]):Bar[] {
    var baresFiltrados:Bar[] = [];
    for (var detalle of unaColeccionDeDetalles) {
      baresFiltrados.push(detalle.getBar());
    }
    return baresFiltrados;
  }
}

abstract class FiltroPorCaracteristica extends Filtro {

  // COLABORADORES INTERNOS
  private filtroComponente:Filtro;
  private estrategia:EstrategiaDeComparacion;

  // CONSTRUCTOR
  constructor(unFiltroComponente:Filtro, unaEstrategia:EstrategiaDeComparacion) {
    super();
    this.filtroComponente = unFiltroComponente;
    this.estrategia = unaEstrategia;
  }

  // MENSAJES QUE RESPONDE
  public filtrar(unaColeccionDeDetalles:DetalleDeBar[]) {
    var detallesFiltrados:DetalleDeBar[] = [];
    for (var detalle of unaColeccionDeDetalles) {
      if (this.estrategia.compararSegun(detalle))
        detallesFiltrados.push(detalle);
    }

    return this.filtroComponente.filtrar(detallesFiltrados);
  }
}

class FiltroPorDistancia extends FiltroPorCaracteristica {

}

class FiltroPorEnchufes extends FiltroPorCaracteristica {

}

class FiltroPorWifi extends FiltroPorCaracteristica {

}
