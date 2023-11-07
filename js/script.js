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

document.getElementById("btnMulher").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "blueviolet";
    document.getElementById("btnCalcular").style.backgroundColor = "blueviolet";
    document.getElementById("rodape").style.backgroundColor = "blueviolet";
    document.getElementById("img").src = "img/mulher.png";
    document.getElementById("msg").innerHTML = "Jamais se subestime. Você é forte e será capaz de lutar e conquistar o seu espaço.";
}, false);

document.getElementById("btnHomem").addEventListener("click", function () {
    document.getElementById("header").style.backgroundColor = "blue";
    document.getElementById("btnCalcular").style.backgroundColor = "blue";
    document.getElementById("rodape").style.backgroundColor = "blue";
    document.getElementById("img").src = "img/homem.png";
    document.getElementById("msg").innerHTML = "Há grandes homens que fazem com que todos se sintam pequenos. Mas o verdadeiro grande homem é aquele que faz com que todos se sintam grandes.";
}, false);





