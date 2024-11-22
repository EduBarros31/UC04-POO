
const { TarefaController } = require('../controller/TarefaController');
const tarefaController = new TarefaController();

let dadosTarefas = {descricao: 'Efetuar', data:'21-11-2024', prioridade: 'alta'};

 tarefaController.AdicionarTarefa(dadosTarefas,'privado');
 tarefaController.AdicionarTarefa(dadosTarefas, 'comum');
 dadosTarefas = {descricao: 'conferir tarefa', data:'21-11-2024', prioridade:'baixa'};
 tarefaController.AdicionarTarefa(dadosTarefas, 'Pessoal');

 tarefaController.listarTarefas();
 tarefaController.listarTarefasPessoais();
 tarefaController.listarTarefasProfissonais();