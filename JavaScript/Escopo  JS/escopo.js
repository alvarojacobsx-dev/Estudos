
// Escopo Global

const x = 'variavel global'


// Escopo de Bloco
if (x) {
    const z = 'variavel de bloco'   // <------  Hoisting 
    console.log("X é: ", x);
    console.log("Z é: ", z);
   
}


// Escopo de Função 
const funcao = () => {
    const a = 'variavel do escopo da funcao'
    console.log("Na função, A é", a);    
}

funcao (); 



