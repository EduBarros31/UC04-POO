const { Tarefa } = require("./Tarefa")

class TarefasPessoais extends Tarefa{
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
    this.#prioridade = prioridade
}
get getData(){
    return this.#data = data
}
set setData(data){
    this.#data = data
}
realizarTarefa(){
    console.log(``)
}


getInfo(){
    return(`Prioridade: ${this.getPrioridade}, data: ${this.getData}`)
}
























}

module.exports = { TarefasPessoais }