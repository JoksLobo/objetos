class BankAccount {
  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this.initialBalance = initialBalance;
    this.address = address;
  }

  printInfo() {
    console.log(
      `Essa conta pertence a ${this.personName}, residente no endereço ${this.address} e possui um saldo atual de ${Number(this.initialBalance).toFixed(2)} reais.`,
    );
  }
}

const ba1 = new BankAccount("Joks Lobo", 3000, "Belchior de ordas");
ba1.printInfo();
console.log(ba1 instanceof BankAccount);
console.log(typeof ba1);
