const input = require("readline-sync");

console.log('== Vamos lá calcular sua média? ==')
const nota1 = input.question('qual foi sua primeira nota?  ')
const nota2 = input.question('qual foi sua segunda nota?  ')
const nota3 = input.question('qual foi sua terceira nota?  ')
const nota4 = input.question('qual foi sua quarta nota?  ')
const nota5 = input.question('qual foi sua quinta nota?  ')
const nota6 = input.question('qual foi sua sexta nota?  ')

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6))/6
const resultado = media.toFixed(1)

if (media >= 7){
  console.log(`Sua média foi:  ${resultado}. Parabéns, você foi aprovadx!`)
} else if (media < 5){
  console.log(`Sua média foi:  ${resultado}. Sinto muito, você foi reprovadx!`)
}else{
  console.log(`Sua média foi:  ${resultado}. Você está em recuperação! Estude!`)
}