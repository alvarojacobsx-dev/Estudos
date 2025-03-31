
//      ----Valores falsy----- 
//  0, "", '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))


//   -----Valores Truthy-----
// Valores que quando convertidos para boolean são true

console.log("1: ", Boolean(1))
console.log("Ola mundo:", Boolean('Ola Mundo'))
console.log("Objeto: ",Boolean({valor1: 1, valor2: 2}))
console.log("Array:", Boolean(1,2))

// ---------------EXEMPLO--------------

const nomes = ['Alvaro', 'lavinia', '', 'Luciani']
console.log("nomes:", nomes)

const nomesFiltrados = nomes.filter((nome) => nome); //  <---- Filtragem
console.log("nomesFiltrados: ", nomesFiltrados)