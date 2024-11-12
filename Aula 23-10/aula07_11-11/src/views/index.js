const prompt = require('prompt-sync')();
const { VeiculoController} = require('../controller/veiculoController');
const controller = new VeiculoController();

function iniciarSistema(){
    let opcao;
    do{
        console.log('Sistema de gerenciamento de veiculos');
        console.log('1. adicionar Veiculo');
        console.log('2. Listar Veiculos');
        console.log('3. Editar');
        console.log('4.Excluir Veiculo');
        console.log('5. Sair');
            opcao = prompt('Escolha uma opção: (0 a 4)');
       switch(opcao){
        case '1':
            adicionarVeiculo();
            break;
        case '2':
            controller.listarVeiculo();
            break;
        case '3':
            editarVeiculo(); 
            break;
        case '4':
            excluirVeiculo();
            break
        default:
            console.log('opção inválida')
       }
        
    }while(opcao!=='3');
}

function adicionarVeiculo(){
    const tipo = prompt('Digite o tipo de veiculo (Carro/Moto/Veiculo)')
    
    const marca = prompt('Digite a marca do veiculo (Carro/Veiculo)')
    const ano = parseInt(prompt('Digite o ano de veiculo (Carro/Veiculo)'));
    const cor = prompt('Digite a cor do veiculo (Carro/Veiculo)')
    const modelo = prompt('Digite o modelo do veiculo (Carro/Veiculo)')

    controller.criarVeiculo(tipo,marca,ano,modelo,cor)



}
function editarVeiculo(){
    const indice = parseInt(prompt("Digite o indice que você deseja editar"))
    const result = controller.buscarId(indice);
    if(result){
        console.log('Informe os novos dados(pressione enter para manter o valor atual')
        const marca = prompt('Nova marca');
        const ano = parseInt(prompt('Novo ano: '));
        const modelo = prompt('Novo modelo');
        const cor = prompt('Nova Cor')
        const novosDados = {};
        if(marca) novosDados.marca = marca
        if(ano) novosDados.ano = ano
        if(modelo)novosDados.modelo = modelo
        if(cor) novosDados.cor = cor
        controller.editarVeiculo(indice, novosDados);
    }else{
      console.log('Informe um indice valido')
    }
}


iniciarSistema();