"use strict";
// conta corrente
//class
class ContaCorrente {
    constructor(agencia, numero, nomecliente, dadaNascimento, dataCriacao) {
        this._agencia = agencia;
        this._numero = numero;
        this._nomecliente = nomecliente;
        this._dadaNascimento = dadaNascimento;
        this._dataCriacao = dataCriacao;
    }
    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }
    get nomecliente() {
        return this._nomecliente;
    }
    get dadaNascimento() {
        return this._dadaNascimento;
    }
    get saldo() {
        return this._saldo;
    }
}
