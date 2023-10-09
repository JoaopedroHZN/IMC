function Calcular() {
    var Peso = Number(document.getElementById("Peso").value);
    var Altura = Number(document.getElementById("Altura").value);


    //Categoria IMC
    var imc = Peso / (Altura * Altura);
    var text=""

    if (imc < 18.5) {
        text = "Seu IMC está abaixo do Peso: " + imc;
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        text = "Você está no Peso ideal(Parabéns!!!): " + imc.toFixed(2);
    }
    else if (imc > 24.9 && imc <= 29.9) {
        text = " Você está Levemente acima do Peso: " + imc.toFixed(2);
    }
    else if (imc > 29.9 && imc <= 34.9) {
        text = "  Você está com Obesidade Grau 1: " + imc.toFixed(2);
    }
    else if (imc > 34.9 && imc <= 39.9) {
        text = " Você está com Obesidade Grau 2(Severa): " + imc.toFixed(2);
    }
    else {
        text = " Você está com Obesidade 3 (Mórbida): " + imc.toFixed(2);
    }
    document.getElementById("text_area").innerText=text;
}
