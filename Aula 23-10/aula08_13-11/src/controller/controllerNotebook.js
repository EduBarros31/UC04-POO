
const { databaseNoteBook } = require('../config/databaseNotebook')


const {Notebook, Notebook} = require('../models/Notebook')

class ControllerNotebook{
    criarNotebook(numeroDeSerie,marca,modelo,cor,preco){
        try {
            const novoNotebook = new Notebook(numeroDeSerie,marca,modelo,cor,preco)
            databaseNoteBook.push(novoNotebook)
            console.log('Notebook adicionado com sucesso')
            return novoNotebook
            
        } catch (error) {
            console.error('Erro ao criar Notebook', error.message)
        }
    }
    listarNotebook(){
        try {
            const notebooks = databaseNoteBook.map(Notebook =>({
                numeroDeSerie : Notebook.getNumeroDeSerie,
                marca: Notebook.getMarca,
                modelo: Notebook.getModelo,
                cor: Notebook.getCor,
                preco: Notebook.getPreco

             

            }));
            console.table(notebooks)
        } catch (error) {
         console.error('erro ao listar Notebook', error.message)
        }

    }
    editarNotebook(numeroDeSerie,novaMarca,novoModelo,NovaCor,NovoPreco){
        try {
          


            }

        catch (error) {
            
        }
    }
    excluirNotebook(){
        try {
            const Notebook = notebooks.find(Notebook => notebooks.getMarca === marca);
            if(index !== -1){
                const
               
        } catch (error) {
            
        }
    excluirTodos(){
        
    }
    }


    }   

module.exports = { ControllerNotebook}