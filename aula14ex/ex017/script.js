function tabuada() {
var numero = Number(window.document.getElementById('textnumero').value)
var res = window.document.getElementById('saltab')
if (numero =="") {
    window.alert('Digite um número!')
}
res.innerHTML =""
for (var c = 1; c <=10; c++) {
    var item = document.createElement('option')
    item.text =`${numero}X${c}=${ c*numero}`
    item.value =`tab${c}`
    res.appendChild(item)
}
} 