class Notebook{

 #numeroDeSerie
 marca
 modelo
 cor
 preco

 constructor(numeroDeSerie,marca,modelo,cor,preco){
     this.#numeroDeSerie = numeroDeSerie;
     this.marca = marca;
     this.modelo = modelo;
     this.cor = cor;
     this.preco = preco;

}

get getnumeroDeSerie(){
    return this.#numeroDeSerie

}
set setnumeroDeSerie(numeroDeSerie){
    this.#numeroDeSerie = numeroDeSerie
}





}



module.exports = { Notebook }






















}
