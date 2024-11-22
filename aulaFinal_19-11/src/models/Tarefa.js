


class Tarefa {
     #descricao
     #status
       


     constructor(descricao){
        this.#descricao = descricao;
        this.#status = 'Não Finalizada';
        Object.freeze(this)

     
     }

get getDescricao(){
   return this.#descricao;


}
set setDescricao(novaDeascricao){
  this.#descricao = novaDeascricao
}

get getStatus(){
    return this.#status 
}

finalizarTarefa(){
    console.log(`Tarefa finalizada: ${this.getStatus}`)
}


getInfo(){
  return (`Descricao:${this.getDescricao} - Status:${this.getStatus}`)

}


}

module.exports = { Tarefa }