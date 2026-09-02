import Corrente from "./Corrente";
import Salario from './Salario.ts';
class Principal {

    teste:string="";

    main(): void{

        const ccore = new Corrente();
        ccore.saldo = 222.10;
        ccore.nome = "Pica Pau";
        console.log(ccore);

        const sl = new Salario();
        sl.nome ="Pica pau";
        sl.email = "picapau@gmail.com"

        sl.depositar(500);
        console.log(sl);
    }
}

const app = new Principal();
app.main();