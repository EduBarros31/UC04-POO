const { Tarefa } = require("./Tarefa")



class TarefasProfissionais extends Tarefa{
     #prioridade
     #data

constructor(prioridade, data){
   this.#prioridade = prioridade
   this.#data = data


}


get getPrioridade(){
   return this.#prioridade
}

set setPrioridade(prioridade){
   this.#data = prioridade
}
get getData(){
   return this.#data = data
}
set setData(data){
   this.#data = data
}



getInfo(){
    console.log(``)

   return(`Prioridade: ${this.getPrioridade}, data: ${this.getData}`)
}






}



module.exports = { TarefasProfissionais}











