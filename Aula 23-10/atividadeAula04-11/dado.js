




class Dado{
    #face

 constructor(){
   this.#face = Math.floor(Math.random()*6, 0)


 }


get getFace(){
    return this.#face;

}
set setFace(face){
   this.#face = face
}


}
 module.exports = { Dado }
 let D1 = new Dado()
 console.log (D1.getFace)