




class Dado{
    #face    //encapsulamento do metodo
    
    getDado(){
      return this.#face
      Object.freeze
    }

   setFace(face){
     return this.#face = face
   }

 constructor(){
   this.#face = Math.floor(Math.random()*6 + 1)   // no construtor pega o atributo e utiliza o metodo ramdomico
   Object.freeze(this)

 }


get getFace(){
    return this.#face;

}
set setFace(face){
   this.#face = face
}


}
 module.exports = { Dado }
//  let D1 = new Dado()
//  console.log (D1.getFace)

