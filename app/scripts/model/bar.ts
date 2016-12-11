module wifindBarApp {
  export class Bar {

    // COLABORADORES INTERNOS
    private nombre:Nombre;
    private direccion:Ubicacion;

    // CONSTRUCTOR
    constructor(unNombre:Nombre, unaDireccion:Ubicacion/*, horario:*/) {
      this.nombre = unNombre;
      this.direccion = unaDireccion;
      //this.horario = horario;
    }

    // MENSAJES QUE RESPONDE
    public getNombre():Nombre {
      return this.nombre;
    }

    public getDireccion():Ubicacion {
      return this.direccion;
    }

    /*public getHorario(){
     return this.horario;
     }*/
  }

}
