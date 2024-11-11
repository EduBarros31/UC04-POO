const {Animal} = require('./Animal');
const {Cachorro} = require('./Cachorro')


let a1 = new Animal('Edu')
let c1 = new Cachorro('Shark','SRD')

a1.emitirSom();
c1.emitirSom();
console.log(c1.getNome)