// Para usar os arrys e utilizado os " [] "

const listaDeConvidados = ["Lavinia", "Luciani", "Joacir", "Alvaro"]

console.log("Alvaro fez aniversario e convidou : ", listaDeConvidados)
console.log("Quantos convidados?", listaDeConvidados.length)                           //   <--   "Length" faz a contagem automatica de items tem dentro do Arrys "[]"

// 1. Lavinia
// 2. Luciani
// 3. Joacir
// 4. Alvaro

console.log("Convidado numero 1:", listaDeConvidados[0])                                    //  <--   Para selecionar o (primeiro) item da lista 

console.log("Convidado numero 4:", listaDeConvidados[listaDeConvidados.length - 1])         //  <--   Para selecionar o (ultimo) item da lista

const indicejoacir = listaDeConvidados.indexOf("Joacir")
console.log("Joacir está em qual indice do nosso array?", indicejoacir )                    //  <--   Para descobrir o arreys

console.log("Joacir está em qual número da lista?", indicejoacir + 1 )                      //  <--   Para descobrir o lugar na "lista"