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
        resultado.innerHTML = ``
    }
}