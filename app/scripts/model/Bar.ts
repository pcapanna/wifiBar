import {Ubicacion} from "./Ubicacion";

export class Bar {

  // COLABORADORES INTERNOS
  private nombre:string;
  private direccion:Ubicacion;
  //horario: ;

  // CONSTRUCTOR
  constructor(nombre:string, direccion:Ubicacion/*, horario:*/) {
    this.nombre = nombre;
    this.direccion = direccion;
    //this.horario = horario;
  }

  // MENSAJES QUE RESPONDE
  public getNombre():string {
    return this.nombre;
  }

  public getDireccion():Ubicacion {
    return this.direccion;
  }

  /*public getHorario(){
   return this.horario;
   }*/
}
