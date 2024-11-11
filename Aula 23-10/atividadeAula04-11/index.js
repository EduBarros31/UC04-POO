const prompt = require("prompt-sync")()

const {Dado} = require('./dado')
const {Jogador} = require('./jogador')
const {SistemaAzar} = require('./sistemaAzar')

function executar(){
    let novoTurno='';

  console.log("Bem-vindo ao Sistema Azar 1.0")

    do{
        const nome = prompt("qual o nome do jogador")
        const aposta = parseInt (prompt("Digite o valor de  1 a 6 :"))
        const lance = new Dado();
        const jogador01 = new Jogador(nome,aposta);
        const tigrinho = new SistemaAzar(lance, jogador01);
        tigrinho.verificarGanhador();
        novoTurno = prompt("Digite sim para uam nova aposta ou não para sair")
    }while(novoTurno !=='N')
console.log("Até Logo!")

} 


executar()


