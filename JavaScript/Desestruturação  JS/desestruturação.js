
const nomes = [ "Maria", "Alvaro", "Jose"]


// const [nome1, nome2, nome3] = nomes;
// console.log("Nome 1", nome1)
// console.log("Nome 2", nome2)
// console.log("Nome 3", nome3)

//----------------------------------------------------------------------------------
const casais = [["Maria", "Decio"], ["Matheus", "Beatriz"]]

// const [casal1, casal2] = casais
// console.log("Csala 1: ", casal1)

const[[nome1, nome2], [nome3, nome4]] = casais 
console.log("Nome 1", nome1);
console.log("Nome 2", nome2);
console.log("Nome 3", nome3);
console.log("Nome 4", nome4);

//----------------------------------------------------------------------------------



// Desestruturação de objetos 

const pessoa = {
    nome: "Maria",
    sobrenome: "Elena",
    familia: ["Decio", "Bazin", "Warhem"]
}

const { nome:primeiroNome, sobrenome: segundoNome, familia:mebros } = pessoa;
console.log(primeiroNome, segundoNome, mebros)

