import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (value >= 0) {
      if (this.validateStatus()) {
        this.setBalance(value);
        console.log("Você pegou um empréstimo de " + value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '. A sua conta está com um saldo de ' + this.getBalance().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
      } else {
        console.log("Não é possível fazer empréstimos para contas inativas.")
      }
    } else {
      console.log("Valor informado para empréstimo inválido.");
    }
  }
}
