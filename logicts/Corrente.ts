import Conta from './Conta.ts'
import IContas,{IAbrir, ICliente} from './IConta';

export default class Corrente extends Conta implements IContas, IAbrir{

    abrirconta(cli: ICliente): void {
        this.nome = cli._nome;
        this.cpf = cli._cpf;
        this.endereco = cli._endereco;
        this.email = cli._email;
        throw new Error('Method not implemented.');
    }
    
    depositar(valor: number): number {
        this.deposito = valor;
        throw new Error('Method not implemented.');
    }
    sacar(valor: number): number {
        this.saque = valor;
        throw new Error('Method not implemented.');
    }
    saldos(): number {

        throw new Error('Method not implemented.');
    }


}