const {Conta} = require("./Conta")


class ContaPoupanca extends Conta{
  
  #taxaJuros
  #saldo
  
  constructor(titular,taxaJuros){
    super(titular);
    this.#taxaJuros = taxaJuros;   
  } 
get gettaxaJuros(){
  return this.#taxaJuros;
}
set setTaxaJuros(taxa){
  this.#taxaJuros = taxa;
}
atualizarRendimentos(){
  const rendimento = this.getSaldo * (this.#taxaJuros/100);
  this.setSaldo = rendimento;
}
sacar(valor){
  if(valor > this.getSaldo){
    console.log('Saldo insuficiente');
  }else{
    this.#saldo -= valor;
    console.log(`${valor}sacado. Saldo restante: ${this.getSaldo}`)
  }
}

}


module.exports = { ContaPoupanca};