module wifindBarApp {
  export class DetalleDeBar {

    // COLABORADORES INTERNOS
    private bar:Bar;
    private calificacionProcesadaEnchufes:number;
    private calificacionProcesadaWifi:number;

    // QUE PASA SI NO TIENE CALIFICACIONES EN ALGUNO DE ESTOS?
    // TODO: FALTA MODELAR PROPIEDADES CALIFICABLES. UN DETALLE BAR DEBERIA TENER UN DICCIONARIO DE
    // TODO: PROPIEDAD -> CALIFICACION (Ej.: {enchufe: 3, wifi: 2, buenPrecio: 5})

    // CONSTRUCTOR
    constructor(unBar:Bar) {
      this.bar = unBar;
    }

    // MENSAJES QUE RESPONDE

    public setCalificacionProcesadaEnchufes(calificacion:number):void {
      this.calificacionProcesadaEnchufes = calificacion;
    }

    public setCalificacionProcesadaWifi(calificacion:number):void {
      this.calificacionProcesadaWifi = calificacion;
    }

    public getCalificacionEnchufes():number {
      return this.calificacionProcesadaEnchufes;
    }

    public getCalificacionWifi():number {
      return this.calificacionProcesadaWifi;
    }

    public getBar():Bar {
      return this.bar;
    }

    public getNombreBar():string {
      return (this.bar).getNombre();
    }

    public getDireccionBar():Ubicacion {
      return (this.bar).getDireccion();
    }

  }
}
