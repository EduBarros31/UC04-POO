
const { Veiculo } = require('../models/Veículo')
const { Carro } = require('../models/Carro');
const  { Moto } = require('../models/Moto');

const bancoVeiculos = [];
class VeiculoController{
    criarVeiculo(tipo,marca,ano,modelo,cor){
       let veiculo;
       if(tipo.toLowerCase()=== 'carro'){
        veiculo = new Carro(marca,ano,modelo,cor)
       }else if(tipo.toLowerCase()=== 'moto'){
        veiculo = new Moto(marca,ano,modelo,cor)
       }else if(tipo.toLowerCase()=== 'veiculo'){
        veiculo = new Veiculo(marca,ano,modelo,cor)
       }else{
        console.log('Tipo de Veiculo invalido')
        return;
       }
    bancoVeiculos.push(veiculo);
    console.log('Veiculo cadastrado com sucesso!!');

    }
   listarVeiculo(){
    if(bancoVeiculos.length>0){
        console.log('=== Veículos Cadastrados ====');
        bancoVeiculos.forEach((veiculo,index)=>{
            console.log(`${index + 1}`);
            veiculo.getInfo();
            veiculo.calcularValor();
        })
        }else{
            console.log('Nenhum veiculo registrado')
        }
    }
   buscarId(indice){
    if(bancoVeiculos.length>=indice-1){
        return true
    }
    return false;
   }
   editarVeiculo(indice,novosDados){
     
        const novoVeiculo = bancoVeiculos[indice-1];
        if(novosDados.marca){
            novoVeiculo.setMarca = novosDados.marca
        }
        if(novosDados.ano){
            novoVeiculo.setMarca = novosDados.ano
        }
        if(novosDados.modelo){
            novoVeiculo.setModelo = novosDados.modelo
        }
        if(novosDados.cor){
            novoVeiculo.setCor = novosDados.cor
        }
        console.log('Veiculo atualizado com sucesso.Novos Dados:');
        novoVeiculo.getInfo();
        bancoVeiculos[indice-1] = novoVeiculo
     } 
      



    }  


   

   module.exports = { VeiculoController }



