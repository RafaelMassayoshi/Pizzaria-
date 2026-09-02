import Conta from "./Conta.ts";
import IContas, { IAbrir, ICliente } from './IConta';
export default class Salarios extends Conta implements IContas {

abrirconta(cli: ICliente): void {
        this.nome = cli._nome;
        this.cpf = cli._cpf;
        this.endereco = cli._endereco;
        this.email = cli._email;
        throw new Error('Method not implemented.');
    }
    
    depositar(valor: number): number {
        this.deposito = valor;
        return this.deposito;
    }
    sacar(valor: number): number {
        this.saque = valor;
        return this.saque;
    }
    saldos(): number {
        return this.saldo;
    }
}