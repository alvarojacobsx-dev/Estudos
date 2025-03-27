
const fichaDoAlvaro = {

    nome: "Alvaro",
    idade: 18,
    profissao: "programador",
    filho: false, 

}
console.log("Ficha do Alvaro", fichaDoAlvaro)

console.log("Nome: " + fichaDoAlvaro.nome)


// Comando para adicionar variavel 
fichaDoAlvaro.carro = "Lancer EVO "
console.log("Ficha do Alvaro", fichaDoAlvaro)

// Comando para excluir uma variavel
delete fichaDoAlvaro.carro
console.log("Ficha Do Alvaro", fichaDoAlvaro)