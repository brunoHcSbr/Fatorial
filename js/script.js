function fatorial(numero){
var soma = 1;
if(Number.isSafeInteger(numero) == true){
    while(numero > 0){
         soma = soma*numero;
         numero--;
    }
    return soma;
}
else{
    alert("O número digitado não é inteiro!!!")
    return 'O número digitado não é inteiro!!!';
}
}
function conta(){
    const num = parseFloat(prompt('Digite um número inteiro'))
    const resultado = document.getElementById('resultado');
    resultado.innerText = 'Fatorial: ' + fatorial(num);
}
window.addEventListener('load', conta)