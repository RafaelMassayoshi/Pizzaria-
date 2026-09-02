export default interface IContas {

    depositar(valor: number): number;
    sacar(valor: number): number;
    saldos(): number;

}

export interface ICliente {
    _numbanco: number;
    _numconta: number;
    _saque: number;
    _deposito: number;
    _saldo: number;
    _nome: string;
    _endereco: string;
    _cpf: string;
    _email: string;
}

export interface IAbrir {
    abrirconta(cli: ICliente): void;
}