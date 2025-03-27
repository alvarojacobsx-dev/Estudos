
const idadeMaria = 16
const maioridade = 18

if (idadeMaria >= 18 ){
    console.log("Maria pode dirigir")
} else {
    const anosFaltantes = maioridade - idadeMaria
    console.log("Maria NÃO pode dirigir") 
    console.log(`Faltam ${anosFaltantes} para maria poder dirigir`) 
}
   


// Operador ternários 
idadeMaria >= maioridade
? console.log("Maria pode dirigir") : console.log("Maria NÃO pode dirigir por agora")
    

// "if" e usado para fazer as condições no JS
// "else" ele entra na operação se ela não for execultada 
//  pode ser declarada variaveis dentro do else



console.log("----------------EXEMPLO---------------")

// 0 a 12 anos -> infância 
// 13 a 17 anos -> adolesncência
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// +60 anos -> idoso

const idadePessoa = 61 

if (idadePessoa >= 0 && idadePessoa <=12) {
    console.log("infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem Adulto");
} else if (idadePessoa >= 26 && idadePessoa <= 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
