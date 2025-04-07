function tabuada() {
var numero = Number(window.document.getElementById('textnumero').value)
var res = window.document.getElementById('res')
if (numero ="") {
    window.alert('Digite um número!')
    return
}
res.innerHTML =""
for (var c = 1; c <=10; c++) {
    var p = c * numero
    res.innerHTML += `${numero}X${c}=${p} <br>`
    
}
}