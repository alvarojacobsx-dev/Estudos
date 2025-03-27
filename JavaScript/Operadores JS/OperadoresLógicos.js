//  &&  / || /  !
//  AND / OR / NOT
//   e  / ou / negação



console.log("Maria foi parada em uma blitz")

const idadeMaria = 18
const cnh = true


// Usando o  " AND -> && "
console.log("Maria vai ser presa?", idadeMaria >= 18 && cnh === false )

//-------------------------------------------------------------------------


// Usando o "OR -> || "
const rg = true
console.log("Maria conseguio comprovar que é maior de idade?", cnh === true || rg === true  )

//--------------------------------------------------------------------------


// usando "NOT -> ! "
const gostaDeBeber = true 
const mariaGostaDeBeber = !gostaDeBeber
console.log("Maria gosta de beber?", mariaGostaDeBeber)