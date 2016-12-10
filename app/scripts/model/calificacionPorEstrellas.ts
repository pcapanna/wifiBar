module wifindBarApp {

  export class CalificacionPorEstrellas extends Calificacion{

    // COLABORADORES INTERNOS
    private estrellas:number;

    // CONSTRUCTOR
    constructor(estrellas:number) {
      super();
      this.estrellas = estrellas;
    }

    public getValor(){
      return this.estrellas;
    }

  }
}
