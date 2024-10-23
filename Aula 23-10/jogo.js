class Jogo{
   titulo;
   gênero;
   anoDeLancamento;
    constructor( titulo,
        gênero,
        anoDeLancamento){
      this.titulo = titulo
      this.gênero = gênero
      this.anoDeLancamento = anoDeLancamento
        }
    get(){
        return this.titulo
    }
    get(){
        return this.gênero
    }
    get(){
        return this.anoDeLancamento
    }
    exibirDados() {
        console.log(`
            
            Dados dos Jogos /n
            Titulo : ${this.titulo}
            gênero ; ${this.gênero}
            anoDELancamento: ${this.anoDeLancamento}
            
            
            `
            
            )
    }}

    let jogo01 = new Jogo("War","Estratégia",1990);
   jogo01.exibirDados()
    let jogo02 = new Jogo("The Witcher","RPG",2015);
   jogo02.exibirDados()
    let jogo03 = new Jogo("Top Gear","Corrida",1990);
   jogo03.exibirDados()