const { Tarefa } = require("./Tarefa");



class TarefasProfissionais extends Tarefa{
     #prioridade
     #data

constructor(descricao,prioridade, data){
   super(descricao);
   this.#prioridade = prioridade;
   this.#data = data;


}


get getPrioridade(){
   return this.#prioridade
}

set setPrioridade(prioridade){
   this.#data = prioridade;
}
get getData(){
   return this.#data 
}
set setData(novaData){
   this.#data = novaData
}



getInfo(){
    console.log('Tarefas Profissionais')

   console.log(`Descricao: ${this.getDescricao}, Prioridade: ${this.getPrioridade}, data: ${this.getData}, Status: ${this.getStatus}`)
}




}



module.exports = { TarefasProfissionais}











