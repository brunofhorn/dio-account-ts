export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance += balance > 0 ? balance : 0;
  }

  deposit = (value: number): void => {
    this.setBalance(value);
    console.log('Você depositou ' + value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '. A sua conta ficou com o total de ' + this.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value && value > 0) {
        this.balance -= value;
        console.log('Você efetuou um saque de ' + value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '. A sua conta ficou com o saldo de ' + this.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
      } else {
        console.log('O valor informado para saque é inválido.');
      }
    } else {
      console.log('Você não pode solicitar um saque de uma conta inativa!');
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
