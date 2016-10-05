import {Bar} from "./Bar";
import {BuscadorDeBares} from "./BuscadorDeBares";
import {DibujadorEnMapa} from "./DibujadorEnMapa";
import {Filtro} from "./Filtro";
import {Filtrador} from "./Filtrador";
import {GuiaDeBares} from "./GuiaDeBares";
import {GuiaDetalleDeBares} from "./GuiaDetalleDeBares";


function buscar(unFiltro:Filtro):Bar[] {

  var unaGuiaDeDetalles:GuiaDetalleDeBares;
  var unaGuiaDeBares:GuiaDeBares;          // las guias y el dibujador deberian ser globales.... no estoy segura de como hacer eso
  var unDibujador:DibujadorEnMapa;
  var unFiltrador = new Filtrador(unFiltro, unaGuiaDeDetalles);
  var unBuscador = new BuscadorDeBares(unaGuiaDeBares, unFiltrador, unDibujador);

  return unBuscador.buscarBares();

}
