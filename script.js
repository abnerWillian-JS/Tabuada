let tab = document.querySelector(`input#txtT`)
let res = document.querySelector(`select#resultado`)

function calcular() {

    if (tab.value.length == 0) {
        alert('ERRO! Inserir dados corretamente')
    } else {
        let t = Number(tab.value)
        res.innerHTML = ` `

        for (let i = 1; i <= 10; i++) {
            let r = i * t
            let item = document.createElement('option')

            item.text = `${t} x ${i}= ${r}`
            res.value = `${i}`
            res.appendChild(item)
        }
    }

}
function apagar() {
    res.innerHTML = '<option>Digite um número acima para gerar uma tabuada</option>'
    tab.value = ` `
}