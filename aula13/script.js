function load(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if (hora > 5 && hora < 12){
        img.src = 'img/amanhecer.png'
        document.body.style.backgroundColor = '#5DA9E9'
    } else if(hora >= 12 && hora <= 18) {
        img.src = 'img/entardecer.png'
        document.body.style.backgroundColor = '#C84630'
    } else {
        img.src = 'img/anoitecer.png'
        document.body.style.backgroundColor = '#6D6466'
    }
}