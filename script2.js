function verifique() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[Erro] Verifique os dados e tente NOVAMENTE!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Bebê
        img.setAttribute("src", "nenem.png");
      } else if (idade < 21) {
        // Adolescente
        img.setAttribute("src", "adolescente_homem.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "homem_adulto.png");
      } else {
        // Idoso
        img.setAttribute("src", "idoso.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Bebê
        img.setAttribute("src", "bebe_menina.png");
      } else if (idade < 21) {
        // Adolescente
        img.setAttribute("src", "adolescente_mulher.png");
      } else if (idade < 50) {
        // Adulta
        img.setAttribute("src", "mulher_adulta.png");
      } else {
        // Idosa
        img.setAttribute("src", "idosa.png");
      }
    }

    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
