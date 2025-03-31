
const notasFinais = [
    {nome: "Alvaro", nota: 5},
    {nome: "Lavinia", nota: 7},
    {nome: "Luciani", nota: 10},
    {nome: "Joacir", nota: 5},
]

notasFinais.forEach ((aluno) => {
    if (aluno.nota >= 6) {
        console.log(`O aluno ${aluno.nota} está aprovado com ${aluno.nota}`)
    } else {
        console.log(`O aluno ${aluno.nome} está reprovado com ${aluno.nota}`)
    }
});


//        Link para pesquisar mais sobre o uso de "ForEach"
//  -->  https://www.w3schools.com/jsref/jsref_foreach.asp
//  -->  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
