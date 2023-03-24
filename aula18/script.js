let numeros = []
let resultado = document.getElementById('res')
let novo = document.getElementById('numero')
let lista = document.querySelector('select')

function isNumero(numero){
    if(Number(numero) >= 1 && Number(numero)<=100){
        return true
    } else {
        return false
    }
}

function inLista(numero, numeros){
    if(numeros.indexOf(Number(numero)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(novo.value) && !inLista(novo.value, numeros)){
        numeros.push(Number(novo.value))
        let item = document.createElement('option')
        item.text = `valor ${novo.value}`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('valor invalido')
    }
    novo.value = ''
    novo.focus()
}

function finalizar(){
    if(numeros.length == 0){
        window.alert('precisa adicionar valores')
    } else {
        let total = numeros.length;
        resultado.innerHTML = ``;
        resultado.innerHTML += `<p>temos ${total} itens ao todo</p>`

        let maior = numeros[0];
        let menor = numeros[0];
        for(let i=0; i<numeros.length; i++){
            if(numeros[i] > maior){
                maior = numeros[i]
            }
            if(numeros[i] < menor){
                menor = numeros[i]
            }
        }
        resultado.innerHTML += `<p>menor valor ${menor} e maior valor ${maior}</p>`
    }
}