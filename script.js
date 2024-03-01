/* window.alert("Minha primeira mensagem")
window.confirm('Minha sugunda mensagem')
window.prompt("Qual é o seu nome?") */

var nome = window.prompt("Qual é o seu nome?")
window.alert("É um prazer te conhecer, " + nome + "!")

var num1 = Number.parseInt(window.prompt("Digite sua nota do C1"))
var num2 = Number.parseInt(window.prompt("Digite sua nota do C2"))
var num3 = Number.parseInt(window.prompt("Digite sua nota do C3"))
var total
total = (num1 + num2 + num3) / 3
window.alert("Sua média de aprovação é" + total + "!")

if (total >= 6){ 
    window.alert("Você está aprovado, " + nome + "!")}
else if (total < 6){
    window.alert("Você foi reprovado." + nome)}