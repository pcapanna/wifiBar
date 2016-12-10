module wifindBarApp {
  export class Bar {

    // COLABORADORES INTERNOS
    private nombre:Nombre;
    private direccion:Ubicacion;

    // CONSTRUCTOR
    constructor(nombre:Nombre, direccion:Ubicacion/*, horario:*/) {
      this.nombre = nombre;
      this.direccion = direccion;
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
