const {Animal} = require('./Animal')
const {Mamifero} = require('./Mamifero')
const {Ave} = require('./Ave')


let a1 = new Animal("Tigre", 20)
let m1 = new Mamifero("Macaco",20, 'Escuro', 'Selva')
let a2 = new Ave('Ganso',10, 'longo', 30)

a1.emitirSom()
a1.getInfo()
m1.emitirSom()
m1.getInfo()
a2.emitirSom()
a2.getInfo()