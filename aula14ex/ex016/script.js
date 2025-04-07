function contar() {
    var inicio = Number(window.document.getElementById('textinicio').value)
    var fim = Number(window.document.getElementById('textfim').value)
    var passo = Number(window.document.getElementById('textpasso').value)
    var res = window.document.getElementById('res')
    if (passo === 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('Passo inválido! Considerando PASSO 1!')
        passo = 1
    } 
    if (inicio === "" || fim === "" || passo === "") {
        res.innerHTML = "Impossível contar!"
        return
    }
    res.innerHTML = 'Contando: <br>'
    for (var c = inicio; c <= fim; c += passo) {
        res.innerHTML += `${c} 👉`
    }
    res.innerHTML += '🏁'
}
