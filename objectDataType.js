function bankAccount(personName, initialBallance, address) {
  this.personName = personName;
  this.initialBallance = initialBallance;
  this.address = address;
}

const acc1 = new bankAccount("Joks", 200, "Belchior de ordas");
console.log(acc1);
console.log(typeof acc1);

const acc2 = new bankAccount("Naty", 500, "Guarapari");
console.log(acc2);

// const obj1 = {
//   nome: "Joks",
//   endereco: "Belchior de ordas",
//   saldo: 200,
// };

// const var1 = 2;
// const var2 = "2";
