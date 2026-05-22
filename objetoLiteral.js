const account1 = {
  name: "João",
  accountNumber: "12345678-9",
  balance: 500,
  displayBalance: function () {
    console.log(`Olá ${this.name}, o seu saldo é de R$${this.balance}.`);
  },
};

const account2 = {
  name: "Pedro",
  accountNumber: "87654321-9",
  balance: 5000,
  displayBalance: function () {
    console.log(`Olá ${this.name}, o seu saldo é de R$${this.balance}.`);
  },
};

console.log(account1);
console.log(account2);
