class Veiculo {
      #ano
      #marca


constructor(marca,ano){
    this.#marca = marca

     this.#ano = ano;
    
}


get getMarca(){
    return this.#marca
}

set setMarca(marca){
    this.#marca = marca
}
get getAno(){
    return this.#ano
}
set setAno(ano){
    this.#ano = ano
}
getInfo(){
    return(`Marca:${this.getMarca}, Ano:${this.getAno}`);
}
calcularValor(){
    throw new Error('Método calcular valor deve ser implementado.')

}




}

module.exports = {  Veiculo  }