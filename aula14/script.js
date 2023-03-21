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

function verificar(){
    let data = new Date();
    let ano = data.getFullYear();

    let fano = document.getElementById('ano');
    let fsexo = document.getElementById('sexo');
    let res = document.getElementById('res');


    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ano incorreto')
    } else {
        var sex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada ${idade}`
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(sex[0].checked){
            genero = 'Masculino'
            if(idade >=0 && idade <=10){
                img.setAttribute('src','img/crianca.png')
            } else if(idade <18){
                img.setAttribute('src','img/jovem.png')
            } else if(idade <60){
                img.setAttribute('src','img/homem.png')
            } else {
                img.setAttribute('src','img/idoso.png')
            }   
        }
        if(sex[1].checked){
            genero = 'Feminino'
            if(idade >=0 && idade <=10){
                img.setAttribute('src','img/menina.png')
            } else if(idade <18){
                img.setAttribute('src','img/jovem_mulher.png')
            } else if(idade <60){
                img.setAttribute('src','img/mulher.png')
            } else {
                img.setAttribute('src','img/idosa.png')
            } 
        }
        res.innerHTML =`<p>detectamos ${genero} de ${idade}</p>`
        res.appendChild(img)
    }
}