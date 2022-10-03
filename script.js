const visor = document.getElementById("visor");
const teclas = document.getElementsByClassName("tecla");
let ultimoNumero = 0;
let ultimaOperacao = "";
let total = "";
let flag = false;
let arrayOperadores = ["+", "-", "x", "/"];

for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", function () {
    // O innerHTML pega o valor de dentro da TAG
    // console.log(teclas[i].innerHTML)
    if (!isNaN(teclas[i].innerHTML)) {
      if (flag == true) {
        visor.innerHTML = teclas[i].innerHTML
        // Esse ELSE está fazendo a funcao de concatenar os numeros exemplo 333 .... 555 etc...
      } else {
        visor.innerHTML += teclas[i].innerHTML
      }
    } else {
      if (flag == true && arrayOperadores.includes(this.innerHTML))
        calcular()
    }
    // Precisa colocar o innerHTML pega o valor de dentro da TAG e conseguir comparar com o HTML
    if (teclas[i].innerHTML == "AC" || teclas[i].innerHTML == "CE") {
      visor.innerHTML = ""
      flag = false
      ultimoNumero = 0
    }
    if (teclas[i].innerHTML == "=") {
      calcular()
      flag = false
    }
    if (teclas[i].innerHTML == "+") {
      ultimoNumero =  Number(visor.innerHTML)
      ultimaOperacao = "+"
      flag = true
    }
    if (teclas[i].innerHTML == "-") {
      ultimoNumero = Number(visor.innerHTML)
      ultimaOperacao = "-"
      flag = true
    }
    if (teclas[i].innerHTML == "x") {
      ultimoNumero = Number(visor.innerHTML)
      ultimaOperacao = "x"
      flag = true
    }
    if (teclas[i].innerHTML == "/") {
      ultimoNumero = Number(visor.innerHTML)
      ultimaOperacao = "/"
      flag = true
    } 
    // !visor.innertHTML.includes('.') = dentro do visor ainda nao tem o . isso pq usamos a ! no começo;
    if (teclas[i].innerHTML == "." && !visor.innerHTML.includes('.')) {
      if(visor.innerHTML == "") {
      visor.innerHTML += '0.' 
      } else {
      visor.innerHTML += "."
    }
    }
    if (teclas[i].innerHTML == "limpar") {
      let result = visor.innerHTML.substring(0, visor.innerHTML.length-1);
      visor.innerHTML = result
      // console.log(result)
    }
  })
}

function calcular() {
  if (ultimaOperacao == "+") {
    total = Number(visor.innerHTML) + ultimoNumero
  } else if (ultimaOperacao == "x") {
    total = Number(visor.innerHTML) * ultimoNumero
  } else if (ultimaOperacao == "-") {
    total = ultimoNumero - Number(visor.innerHTML)
  }else if (ultimaOperacao == "/") {
    total = ultimoNumero / Number(visor.innerHTML)
  }
  console.log(total)
  visor.innerHTML = total
}



