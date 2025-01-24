// conta corrente
//class

class ContaCorrente {
  private _agencia: string;
  private _numero: number;
  private _nomeCliente: string;
  private _dataNascimento: Date;
  private _saldo: number;
  private _dataCriacao: Date;
  private _cpf: string;


  constructor(agencia: string,
    numero: number,
    cpf: string,
    nomeCliente: string,
    dataNascimento: Date,
    dataCriacao: Date


  ) {
    this._agencia = agencia;
    this._numero = numero;
    this._nomeCliente = nomeCliente;
    this._dataNascimento = dataNascimento;
    this._dataCriacao = dataCriacao;
    this._cpf = cpf;
    this._saldo = 0;
  }

  get agencia(): string {
    return this._agencia;
  }
  get numero(): number {
    return this._numero;
  }
  get nomeCliente(): string {
    return this._nomeCliente;
  }
  get dataNascimento(): Date {
    return this._dataNascimento;
  }
  get dataCriacao(): Date {
    return this._dataCriacao;
  }
  get cpf(): string {
    return this._cpf;
  }


  public get saldo(): number {
    return this._saldo;
  }
  public setSaldo(valor: number, tipoOperacao: "C" | "D") {
    if (!valor || valor <= 0) {
      throw new Error("O valor informado é inválido");
    }

    switch (tipoOperacao) {
      case "C":
        this._saldo = this._saldo + valor;
        break;
      case "D":
        if (this._saldo < valor) {
          throw new Error("Operação inválida: saldo insuficiente");
        }
        this._saldo = this._saldo - valor;
        break;
      default:
        throw new Error("Operação inválida");
    }

  }

  public extrato(): string {
    return `Agencia: ${this._agencia} Conta: ${this._numero} Saldo: ${this._saldo}`;
  }


}

export default ContaCorrente;


