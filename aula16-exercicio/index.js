function calcular(){
    let primeiro = Number(document.getElementById('primeiro_numero').value)
    let segundo = Number(document.getElementById('segundo_numero').value)

    for (let i=1; i<=segundo; i++){
        document.getElementById('res').innerHTML += `<p>${primeiro} x ${i} = ${primeiro*i}</p>`
    }
}