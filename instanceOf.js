function bankAccount(personName, initialBalance, Address) {
  this.personName = personName;
  this.initialBalance = initialBalance;
  this.Address = Address;

  this.printTnfo = function () {
    console.log(
      `Essa conta pertence a ${this.personName}, residente no endereço ${this.Address} e possui um saldo atual de ${Number(this.initialBalance).toFixed(2)} reais.`,
    );
  };
}

const ba1 = new bankAccount("Joks", 200, "Belchior de ordas");
ba1.printTnfo();
console.log(typeof ba1);
console.log(ba1 instanceof bankAccount);
