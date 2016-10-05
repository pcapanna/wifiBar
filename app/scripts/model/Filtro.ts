import {Bar} from "./Bar";
import {DetalleDeBar} from "./DetalleDeBar";
import {Ubicacion} from "./Ubicacion";
import {EstrategiaDeComparacion} from "./EstrategiaDeComparacion";
import {GuiaDetalleDeBares} from "./GuiaDetalleDeBares";

export abstract class Filtro{
  abstract filtrar(unaColeccionDeDetalles: DetalleDeBar[]): Bar[];
}

class FiltroNull extends Filtro {

  // MENSAJES QUE RESPONDE
  filtrar(unaColeccionDeDetalles: DetalleDeBar[]): Bar[]{

    var baresFiltrados: Bar[] = [];

    for (var detalle of unaColeccionDeDetalles){
      baresFiltrados.push(detalle.getBar());
    }

    return baresFiltrados;
  }
}

abstract class FiltroPorCaracteristica extends Filtro{

  // COLABORADORES INTERNOS
  filtroComponente: Filtro;
  estrategia: EstrategiaDeComparacion;

  // CONSTRUCTOR
  constructor(unFiltroComponente: Filtro, unaEstrategia: EstrategiaDeComparacion) {
    this.filtroComponente = unFiltroComponente;
    this.estrategia = unaEstrategia;
  }

  // MENSAJES QUE RESPONDE

  filtrar(unaColeccionDeDetalles: DetalleDeBar[]){
    var detallesFiltrados: DetalleDeBar[] = [];
    for (var detalle of unaColeccionDeDetalles){
      if (this.estrategia.compararSegun(detalle))
        detallesFiltrados.push(detalle);
    }

    return this.filtroComponente.filtrar(detallesFiltrados);
  }
}

class FiltroPorDistancia extends FiltroPorCaracteristica{

}

class FiltroPorEnchufes extends FiltroPorCaracteristica{

}

class FiltroPorWifi extends FiltroPorCaracteristica{

}
