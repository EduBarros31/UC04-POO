//como iniciar

class Pessoa{
   nome;
   rg;
   cpf
   idade
   sexo;
   nacionalidade;
   estadocivil;
   constructor(nome,rg,cpf,idade,sexo,nacionalidade,estadocivil){
     this.nome = nome,
     this.rg = rg,
     this.cpf = cpf,
     this.idade = idade,
     this.sexo = sexo,
     this.nacionalidade = nacionalidade,
     this.estadocivil =estadocivil

   }                    //Get serve para pegar o o atributo especifico //
    getNome(){
      return this.nome;
    }
    getRg(){
      return this.rg
    }
    getCpf(){
      return this.cpf
    }
    getIdade(){
      return this.idade;
    }
    getSexo(){
      return this.sexo;
    }
    getNacionalidade(){
      return this.nacionalidade
    }
    getEstadocivil(){
      return this.estadocivil
    }
    setNome(nome){             //O Set serve para ataulaizar o dado 
     this.nome = nome;
    }
exibirDados(){
  console.log(`
     
    Dados Pessoais: \n
    Nome: ${this.nome}
    RG: ${this.rg}
    CPF: ${this.cpf}
    Idade: ${this.idade}
    sexo: ${this.sexo}
    nacionalidade: ${this.nacionalidade}
    estadocivil: ${this.estadocivil}

  `)
  
}




}

let pessoa01 = new Pessoa("Joel",8855, 559847, 18, "indefinido", "potiguar","não sei");
console.log(pessoa01.getEstadocivil())
pessoa01.setNome("Joelma");
console.log(pessoa01.getNome());
pessoa01.exibirDados();