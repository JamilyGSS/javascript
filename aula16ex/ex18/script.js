let num = document.getElementById('textnum')
let lista = document.getElementById('valor')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isinLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
   if (isNumero(num.value) && !isinLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.innerText = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML= ''
} else {
    window.alert('Valor inválido ou já está na lista')
}
num.value = ''
num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML= ''

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma = soma + valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < maior) {
                menor = valores[pos]
            }
            media = soma / valores.length
        }
        

        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. <br>`
        valores.sort()
        res.innerHTML +=`O menor valor informado foi ${valores[0]} <br>`
        res.innerHTML += `O maior valor informado foi ${maior} <br>`
        res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
        res.innerHTML += `A média dos valores digitados é ${media} <br>`
    }
}
