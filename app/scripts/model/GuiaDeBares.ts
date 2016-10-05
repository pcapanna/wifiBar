import {Bar} from "./Bar";

export class GuiaDeBares {

  // COLABORADORES INTERNOS
  bares: Bar[];

  // CONSTRUCTOR
  constructor(bares: Bar[]) {
    this.bares = bares;
  }

  // MENSAJES QUE RESPONDE
  public getBares(): Bar[]{
    return this.bares;
  }

  public addBar(unBar: Bar): void{
    (this.bares).push(unBar);
  }
}
