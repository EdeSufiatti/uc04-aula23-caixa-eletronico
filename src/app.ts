import express, { Express, Response } from "express";

class App {

  private readonly port: number = 5000;
  private _app: Express;

  constructor() {
    this._app = express();
  }
  public configure() {
    this._app.use(express.json());

    this._app.get("/health", (res: Response) => {
      res.send({ status: "OK" });
    }

    );
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


