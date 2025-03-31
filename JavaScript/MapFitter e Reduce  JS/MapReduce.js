
const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000]

// MAP 

const distanciaEmKm = distanciaEmMetros.map(distancia => distancia / 1000);
console.log ("Distancia em KM: ", distanciaEmKm)


// FILTER

const intensFiltrados = distanciaEmMetros.filter ((distancia) => {
    if (distancia > 2000) return distancia;
})

console.log("Intens filtrados: ", intensFiltrados)


// REDUCE

const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
    return acc + distancia 
}, 0)

console.log("Distancia Total ", distanciaTotal  )