var valorEmLibraTexto = prompt("Qual o valor em libra você quer converter?");
var libra = 1.38

var valorEmLibraNumero = parseFloat(valorEmLibraTexto);

var valorEmDolar = valorEmLibraNumero * libra
var valorEmDolarFixado = valorEmDolar.toFixed(2);

document.write(valorEmDolarFixado);


