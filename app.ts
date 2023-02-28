import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Bruno Fernandes Horn', 10)

console.log("CONTA DO BRUNO:");
console.log(peopleAccount);

console.log("Iniciando um depósito:");
peopleAccount.deposit(200.40);

console.log("Iniciando outro depósito:");
peopleAccount.deposit(1.34);

console.log("Iniciando um depósito negativo:");
peopleAccount.deposit(-200);

console.log("Iniciando um saque:");
peopleAccount.withdraw(125.34);

console.log("Iniciando um saque com valor negativo:");
peopleAccount.withdraw(-125.34);

console.log("Iniciando um saque com valor maior do que o saldo:");
peopleAccount.withdraw(1125.34);

console.log("Resultado da Conta:")
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Bruno Fernandes', 11);

console.log("CONTA DO BRUNO FERNANDES: ");
console.log(companyAccount);

console.log('Iniciando um empréstimo:');
companyAccount.getLoan(1350.49);

console.log('Iniciando um empréstimo negativo:');
companyAccount.getLoan(-1350.49);

console.log("Resultado da conta:");
console.log(companyAccount);

const plusAccount: PlusAccount = new PlusAccount('Bruno', 12);

console.log("Conta Plus de Bruno: ");
console.log(plusAccount);

console.log("Iniciando um depósito de R$ 100,00:");
plusAccount.depositPlus(100);

console.log('Resultado da conta:');
console.log(plusAccount);
