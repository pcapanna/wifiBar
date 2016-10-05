import {Bar} from "./Bar";
import {Ubicacion} from "./Ubicacion";

export class DetalleDeBar{

  // COLABORADORES INTERNOS
  bar: Bar;
  calificacionProcesadaEnchufes: number;
  calificacionProcesadaWifi: number;

  // CONSTRUCTOR
  constructor(unBar: Bar){
    this.bar = unBar;
  }

  // MENSAJES QUE RESPONDE

  setCalificacionProcesadaEnchufes(calificacion: number): void{
    this.calificacionProcesadaEnchufes = calificacion;
  }

  setCalificacionProcesadaWifi(calificacion: number): void{
    this.calificacionProcesadaWifi = calificacion;
  }

  getCalificacionEnchufes(): number{
    return this.calificacionProcesadaEnchufes;
  }

  getCalificacionWifi(): number{
    return this.calificacionProcesadaWifi;
  }

  getBar(): Bar{
    return this.bar;
  }

  getNombreBar(): string{
    return (this.bar).getNombre();
  }

  getDireccionBar(): Ubicacion{
    return (this.bar).getDireccion();
  }

}
