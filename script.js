const visor = document.getElementById("visor");
const teclas = document.getElementsByClassName("tecla");
let numerosSoma = [];
let flag = false;

for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", function () {
    // O innerHTML pega o valor de dentro da TAG
    // console.log(teclas[i].innerHTML)
    if (!isNaN(teclas[i].innerHTML)) {
      if (flag == true) {
        visor.innerHTML = teclas[i].innerHTML
      } else {
        visor.innerHTML += teclas[i].innerHTML
      }
    }
    // Precisa colocar o innerHTML pega o valor de dentro da TAG e conseguir comparar com o HTML
    if (teclas[i].innerHTML == "AC" || teclas[i].innerHTML == "CE"){
      visor.innerHTML = " "
      numerosSoma = []
    }
    if (teclas[i].innerHTML == "+") {
      // numerosSoma é um array que recebe pelo metodo PUSH os valores que foram pegos pelo visor usando a propriedade INNERHTML
      numerosSoma.push(visor.innerHTML)
      flag = true
    }
    if(teclas[i].innerHTML == "="){
      let totalDaSoma = parseInt(visor.innerHTML)
      for(let i=0; i< numerosSoma.length; i++){
        totalDaSoma += parseInt(numerosSoma[i]) 
      }
      console.log(totalDaSoma)
    }
  })
}

// Fazer botao subtração, divisão e multiplicação.
// Tentar adicionar a tecla de " . "