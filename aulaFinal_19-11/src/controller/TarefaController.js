const { Tarefa } = require('../models/Tarefa')
const { TarefasPessoais} = require('../models/TarefasPessoais')
const { TarefasProfissionais } = require('../models/TarefasProfissionais')
const { Tarefas } = require('../config/DataBaseTarefas-')
const bancoTarefas = []

class TarefaController{
    AdicionarTarefa(descricao,status,prioridade,data){
        let Novatarefa;
        if(descricao.toLowerCase()=== 'tarefa'){
            Novatarefa = new tarefa(descricao,status,prioridade,data)
        } 
        else if(tipo.toLowerCase()=== 'tarefaPessoais'){
         Novatarefa = new tarefa(descricao,status,prioridade,data)
        }else if(tipo.toLowerCase()=== 'tarefasProfissionais'){
         Novatarefa = new tarefa(descricao,status,prioridade,data)
        }else{
         console.log('tarefa adicionada')
         return;
        }
     bancoTarefas.push(Novatarefa);
     console.log('Tarefa adicionada com sucesso');
 
    }
 listarTarefas(){
 }
 listarTarefasPessoais(){

 }
 listarTarefasProfissonais(){

 }




















}


module.exports = { TarefaController }





























}


module.exports = {}