let vetor = [5,6,1]

vetor.push(7)

for(let i=0; i<vetor.length; i++){
    console.log(vetor[i])
}

for(let pos in vetor) {
    console.log(`em posição ${pos} temos ${vetor[pos]}`)
}