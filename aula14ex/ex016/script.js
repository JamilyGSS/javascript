function contar() {
    var inicio = window.document.getElementById('textinicio')
    var fim = window.document.getElementById('textfim')
    var passo =window.document.getElementById('textpasso')
    var res = window.document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = "Impossível contar! Preencha todos os campos corretamente."
    } 
   inicio = Number(inicio.value)
   fim = Number(fim.value)
   passo = Number(passo.value)

   if (passo === 0) {
    res.innerHTML = 'Impossivel contar!'
    window.alert('Passo inválido! Considerando PASSO 1!')
    passo = 1
   }
    res.innerHTML = 'Contando: <br>'

   
    if (inicio < fim) {
    for (var c = inicio; c <= fim; c += passo) {
        res.innerHTML += `${c} 👉`
    }
    } else {
        for (var c = inicio; c >= fim; c -= passo) {
        res.innerHTML += `${c} 👉`
    }
    res.innerHTML += '🏁'
    }
    }

 /*if (passo === 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('Passo inválido! Considerando PASSO 1!')
        passo = 1
    } */