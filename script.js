let meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

document.getElementById("btn").onclick = function() {
  let data = document.getElementById("data").value 
  data = data.split("/");
  let mesEscolhido = meses[parseInt(data[1])-1]
  let dataPorExtenso = data[0] + " de " + mesEscolhido + " de " + data[2];
  document.getElementById("dataPorExtenso").textContent = dataPorExtenso
}