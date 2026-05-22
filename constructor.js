//constructor - construtor
// function createAccount(userName, accountNumber, initialBalance) {
//   return {
//     name: userName,
//     accountNumber,
//     balance: initialBalance,
//     displayBalance: function () {
//       console.log(`Olá ${this.name}, o seu saldo é de R$${this.balance}.`);
//     },
//   };
// }

function Account(userName, accountNumber, initialBalance) {
  this.name = userName;
  this.accountNumber = accountNumber;
  this.balance = initialBalance;
  this.displayBalance = function () {
    console.log(`Olá ${this.name}, o seu saldo é de R$${this.balance}.`);
  };
}

const account1 = new Account("João", "12345678-9", 500);

const account2 = new Account("Pedro", "87654321-9", 5000);

console.log(account1);
account1.displayBalance();

console.log(account2);
account2.displayBalance();
