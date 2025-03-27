/*

<--  console.log(typeof listaDeConvidados)  -->   serve para conseguir descobrir a
string de qualquer (Variável).

*/


const listaDeConvidados = ["Lavinia", "Luciani", "Joacir", "Alvaro"]

// Push / Pop / Shift / Unshift 


listaDeConvidados.push("Nina")       //  <--- "Push"  inclui no final do Arrays. 
console.log(listaDeConvidados)


listaDeConvidados.pop()             //   <--- "Pop"   remove no final do Arrays. 
console.log(listaDeConvidados)


listaDeConvidados.unshift("Isaac")  //   <--- "Unshif" adiciona como 1 do Arrays.
console.log(listaDeConvidados)

listaDeConvidados.shift()
console.log(listaDeConvidados)     //   <--- "Shift" remove o primeiro item da lista.



console.log("Paula está na listaw ", listaDeConvidados.includes("Paula")) //    false
console.log("Alvaro está na listaw ", listaDeConvidados.includes("Alvaro"))//   true


//   <-- "Includes" -->    verifica se o nome(variável) esta na lista,  aparece "true" se estiver na lista, e aparece "false" se não estiver.