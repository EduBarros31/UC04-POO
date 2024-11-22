const { Tarefa } = require('../models/Tarefa')
const { TarefasPessoais} = require('../models/TarefasPessoais')
const { TarefasProfissionais } = require('../models/TarefasProfissionais')
const { DataBaseTarefas } = require('../config/DataBaseTarefas')

class TarefaController{
    AdicionarTarefa(dadosTarefa,tipo){
        try {
            
        if(descricao.toLowerCase()=== 'pessoal'){
            const tarefaPessoais = new tarefaPessoais(dadosTarefa.descricao, dadosTarefa.prioridade, dadosTarefa.data);
            tarefas.push(tarefaPessoais);
            console.log('Tarefa pessoal adicionada');
            tarefaPessoais.getInfo();
        } 
        else if(tipo.toLowerCase()=== 'tarefaProfissionais'){
         const tarefasProfissionais = new tarefasProfissionais(dadosTarefa.descricao, dadosTarefa.prioridade, dadosTarefa.data)
         tarefas.push(tarefasProfissionais);
         console.log('Tarefa profissional adicionada')
         tarefasProfissionais.getInfo();
        }
        else if(tipo.toLowerCase()=== ' simples'){
            const tarefa = new tarefa(dadosTarefa.descricao);
            tarefas.push(tarefa);
            console.log('Tarefa simples adicionada');
            tarefa.getInfo();
        }else{
            console.log('tarefa não foi criada')
        }
       
        } catch (error) {
            console.error('Erro ao criar tarefa',  error.message);
           
        }
    }
   
 listarTarefas(){
    try {
        if(tarefas.length>0){
            tarefas.forEach(tarefa =>{
                tarefa.getInfo()
            })
        }else{
            console.log('Nenuma tarefa registrada')
        }
        
    } catch (error) {
        console.error('Erro ao listar Tarefas')
    }
    
 }
 listarTarefasPessoais(){
    try {
        const tarefaPessoais = tarefas.filter((tarefa) => tarefa instanceof tarefaPessoais);
        if(tarefaPessoais.length > 0){
            tarefaPessoais.forEach(tarefa =>{
            tarefa.getInfo()
        });
    }else{
        console.log('Nenhuma tarefa pessoal')
    }
    } catch (error) {
        console.error('Erro ao listar tarefas pessoais', error.message)
        
    }

 }
 listarTarefasProfissonais(){
    try {
        const tarefasProfissionais = tarefas.filter((tarefa) => tarefa instanceof tarefasProfissionais);
        if(tarefasProfissionais.length > 0){
            tarefasProfissionais.forEach(tarefa =>{
                tarefa.getInfo();
            })
        }else{
            console.log('nenhuma tarefa profissional')
        }
    } catch (error) {
        console.error('erro ao listar tarefas profissionais', error.message)
    }

 }



}


module.exports = { TarefaController }
























