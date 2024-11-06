

// const {Conta} = require('./ContaPoupanca');
const {ContaPoupanca} = require('./ContaPoupanca');

const poupanca01 = new ContaPoupanca('Eduardo', 5);
console.log(poupanca01.getSaldo)
poupanca01.setSaldo = 500;    //passsando o get ou set coloca o sinal de igualdade


poupanca01.atualizarRendimentos();
console.log(poupanca01.getSaldo)
