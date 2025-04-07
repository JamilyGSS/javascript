function verificar() {
var data = new Date()
var ano = data.getFullYear()
var anonasc = window.document.getElementById('textano')
var res =  window.document.getElementById('res')
if (anonasc.value.length == 0 || Number(anonasc.value) > ano) {
    window.alert('[ERRO]Tente novamente')
} else {
    var sex = window.document.getElementsByName('sexo')
    var idade = ano - Number(anonasc.value)
    var genero = " "
    var img = document.createElement('img')
    if (sex[0].checked) {
        genero = 'Homem'
        if (idade <= 10) {
            img.setAttribute('src', 'meninobb.jpg')
        } else if (idade <= 30) {
            img.setAttribute('src', 'jovemhomem.jpg')
        } else if (idade <= 60) {
            img.setAttribute('src', 'adulto.jpg')
        } else {
            img.setAttribute('src', 'idoso.jpg')
        }
    } else {
        genero = 'Mulher'
        if (idade <= 10) {
            img.setAttribute('src', 'meninabb.jpg')
        } else if (idade <= 30) {
            img.setAttribute('src', 'jovemmulher.jpg')
        } else if (idade <= 60) {
            img.setAttribute('src', 'adulta.jpg')
        } else {
            img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
    res.appendChild(img)
}
}