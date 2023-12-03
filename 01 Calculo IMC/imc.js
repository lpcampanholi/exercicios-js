const botao = document.querySelector("#botao");
botao.addEventListener("click", calculaIMC);

function calculaIMC() {
  const resposta = document.querySelector(".resposta");
  const nome = document.querySelector("#nome").value;
  const altura = document.querySelector("#altura").value;
  const peso = document.querySelector("#peso").value;
  const imc = (peso / altura ** 2).toFixed(2);

  resposta.innerHTML = `
        <p>${nome}, seu IMC é <strong>${imc}</strong></p>
        `;

  if (imc < 18.5) {
    resposta.innerHTML += `
        <p>Classificação: <strong>MAGREZA</strong> (menor que 18,5)</p>
        `;
  }
  if (imc >= 18.5 && imc < 25) {
    resposta.innerHTML += `
        <p>Classificação: <strong>NORMAL</strong> (entre 18,5 e 24,9)</p>
        `;
  }
  if (imc >= 25 && imc < 30) {
    resposta.innerHTML += `
        <p>Classificação: <strong>SOBREPESO</strong> (entre 25 e 29,9)</p>
        `;
  }
  if (imc >= 30 && imc < 40) {
    resposta.innerHTML += `
        <p>Classificação: <strong>OBESIDADE</strong> (entre 30 e 39,9)</p>
        `;
  }
  if (imc >= 40) {
    resposta.innerHTML += `
        <p>Classificação: <strong>OBESIDADE GRAVE</strong> (maior que 40)</p>
        `;
  }
}
