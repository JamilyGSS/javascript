function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '../imagens/dia.jpg'
        document.body.style.background = 'rgba(57, 127, 150, 0.73)'
    } else if (hora >= 12 && hora <=18) {
        img.src = '../imagens/tarde.jpg'
        document.body.style.background = 'rgb(213, 142, 55)'
    } else {
        img.src = '../imagens/noite.jpg'
        document.body.style.background = 'rgb(15, 26, 84)'
    }
}
