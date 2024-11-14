const { ControllerNotebook } = require('../controller/controllerNotebook');

// inicializando controller notebooks

//testando  o CRUD para o notebook

    const notebookController = new ControllerNotebook();

//1.criando notebboks
console.log('===criando Notebooks===');
notebookController.criarNotebook('123ABC','DELL',"Inspiron",'Prata',4000.00)
notebookController.criarNotebook('456ABC','Positivo',"Travando",'Preto',2500.00)
//2. Listando os notebooks
console.log('===Listando Notebooks===');
notebookController.listarNotebook();


//3 Buscando um notebook pleo numero de serie
console.log('=== Buscando um notebook pelo numero de serie===');
notebookController.buscarNotebook('123ABC');


//4 Atualizando notebook
console.log('=== Atualizando um notebook');
notebookController.editarNotebook('123ABC','Dell','XPS','Branco',4000.00);
//5. Removendo um notebook
console.log('===Removendo notebook===');
notebookController.excluirNotebook('456ABC')