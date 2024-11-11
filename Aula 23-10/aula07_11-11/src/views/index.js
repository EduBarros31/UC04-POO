const prompt = require('prompt-sync')();
const { VeiculoController} = require('../controller/veiculoController');
const controller = new VeiculoController();

function iniciarSistema(){
    let opcao;
    do{
        console.log('Sistema de gerenciamento de veiculos');
        console.log('1. adicionar Veiculo');
        console.log('2. Listar Veiculos')
        console.log('3. Sair');
            opcao = prompt('Escolha uma opção');
       switch(opcao){
        case '1':
            adicionarVeiculo();
            break;
        case '2':
            controller.listarVeiculo();
            break;
        case 3:
            console.log('Saindo de sistema')
            break;
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

iniciarSistema();