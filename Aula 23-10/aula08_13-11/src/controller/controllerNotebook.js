
const { databaseNotebook } = require('../config/databaseNotebook')


const { Notebook } = require('../models/Notebook')

class ControllerNotebook {
    criarNotebook(numeroDeSerie, marca, modelo, cor, preco) {
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, cor, preco)
            databaseNotebook.push(novoNotebook)
            console.log('Notebook adicionado com sucesso')
            return novoNotebook

        } catch (error) {
            console.error('Erro ao criar Notebook', error.message)
        }
    }
    listarNotebook() {
        try {
            const notebooks = databaseNotebook.map(notebook => ({
                numeroDeSerie: notebook.getNumeroDeSerie,
                marca: notebook.marca,
                modelo: notebook.modelo,
                cor: notebook.cor,
                preco: notebook.getPreco



            }));
            console.table(notebooks)
        } catch (error) {
            console.error('erro ao listar Notebook', error.message)
        }

    }
    buscarNotebook(numeroDeSerie) {
        try {
            const notebook = databaseNotebook.find(n => n.getNumeroDeSerie === numeroDeSerie);
            if (!notebook) {
                console.error('Erro ao buscar notebook', error.message);
                return;
            }
            console.log('notebook encontrado:')
            console.table([notebook]);
            return notebook;


        } catch (error) {
            console.error('Erro ao buscar Notebook', error.message);
        }
    }


    editarNotebook(numeroDeSerie, novaMarca, novoModelo, NovaCor, NovoPreco) {
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if (notebook) {
                notebook.marca = novaMarca
                notebook.modelo = novoModelo
                notebook.cor = NovaCor
                notebook.setPreco = NovoPreco

            }
        }

        catch (error) {
            console.error('erro ao atualizar notebook', error.message);
        }
    }
    excluirNotebook(numeroDeSerie) {
        try {
            const notebook = this.buscarNotebook(numeroDeSerie);
            if (notebook) {
                const index =databaseNotebook.findIndex(n => n.getNumeroDeSerie)   // buscar novamente dentro do indice
                const notebookRemovido = databaseNotebook.splice(index, 1);
                console.log('notebook removido com sucesso')
                return notebookRemovido;                                                 //se a minha variavel existir ao buscar no banco da dados, utiliza-se o index

            }

        } catch (error) {
            console.error('erro ao remover notebook', error.message)
        }

    }

    excluirTodos() {
        try {
            if (databaseNotebook.length = 0) {              //Se o database for igual a zero ele limpa totalmente o Array
                databaseNotebook.length = 0;
            }
        } catch (error) {
            console.error('Erro ao excluir banco', error.message)
        }
    }
}


module.exports = { ControllerNotebook }