function tabuada(){
var num = window.document.getElementById('num')
var endpoint = window.document.getElementById('endpoint')

if (num.value == 0 || endpoint.value== 0 ) {
    window.alert("Digite um dado valido")

} else{
var n = Number(num.value)
var e = Number(endpoint.value)
var x = 0
var r = ''
var res = window.document.getElementById('resposta')

res.innerHTML = `A Tabuada do ${n} é: <br>  `

do{
    r = n*x
    res.innerHTML += `${n} x ${x} = ${r} <br>`
    x++
}
while( x <= e)

    }
}