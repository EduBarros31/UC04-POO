const { Tarefa } = require("./Tarefa")

class TarefasPessoais extends Tarefa{
     #prioridade
     #data


constructor(descricao,prioridade, data){
    super(descricao)
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
    return this.#data 
}
set setData(novaData){
    this.#data = novaData
}


getInfo(){
    console.log('Tarefa realizada')
    console.log(`Descricao: ${this.getDescricao}, Prioridade: ${this.getPrioridade}, data: ${this.getData}`)
}

s

}

module.exports = { TarefasPessoais }