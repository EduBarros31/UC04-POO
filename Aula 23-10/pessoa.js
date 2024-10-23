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

   }
    
}

let pessoa01 = new Pessoa("Joel",8855, 559847, 18, "indefinido", "potiguar","não sei");
console.log(pessoa01)