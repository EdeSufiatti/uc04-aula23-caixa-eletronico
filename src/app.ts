import express, { Express } from "express";

class App {

  private readonly port: number = 5000;
  private _app: Express;

  constructor() {
    this._app = express();
  }
  public configure() {

  }
  public strat() {
    this._app.listen(this.port, (error) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Servidor rodando na porta ${this.port}`);
    })

  }

}

export const app = new App();


