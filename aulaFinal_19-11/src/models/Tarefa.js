class Tarefa {
     #descricao
     #status
       


     constructor(descricao){
        this.#descricao = descricao;

     
     }

get getStatus(){
    return this.#status 
}

realizarTarefa(){
    console.log(`Tarefa finalizada: ${this.getStatus}`)
}


getInfo(){
  return (`Descricao:${this.#descricao}, Status:${this.getStatus}`)

}















}

module.exports = { Tarefa }