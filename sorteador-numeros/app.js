let lista_de_numeros_a_serem_sorteados = [];
function sortear() {
  lista_de_numeros_a_serem_sorteados = [];
  console.log("clikei");
  let quantidade_inserida = document.getElementById("quantidade").value;
  console.log(`quantidade inserida ${quantidade_inserida}`);
  let numero_inicial = document.getElementById("de").value;
  console.log(`numero inicial  ${numero_inicial}`);
  let numero_final = document.getElementById("ate").value;
  console.log(`até o número  ${numero_final}`);
  let equacao_verificacao_numero_inicial_final =
    Number(numero_final) - Number(numero_inicial);
  mudar_status_botao("btn-reiniciar");
  mudar_status_botao("btn-sortear");
  if (isNaN(quantidade_inserida)) {
    alert("insira apenas números");
    console.log("funcionou");
  }
  if (quantidade_inserida <= 0) {
    numero_inserido_problematico("quantidade inválida");
    clean_written_field(quantidade_inserida, "quantidade");
  } else if (numero_inicial <= 0) {
    numero_inserido_problematico("número inicial inválido");
    clean_written_field(numero_inicial, "de");
  } else if (numero_final <= 0) {
    numero_inserido_problematico("número final inválido");
    clean_written_field(numero_inicial, "ate");
  } else if (equacao_verificacao_numero_inicial_final <= 0) {
    console.log("numero inicial é maior ou igual ao número final");
    numero_inserido_problematico("número inicial é maior ou igual ao final");
    clean_written_field(numero_inicial, "de");
    clean_written_field(numero_final, "ate");
  } else if (
    Number(quantidade_inserida) >
    equacao_verificacao_numero_inicial_final + 1
  ) {
    console.log("quantidade de números para serem sorteados inválida");
    clean_written_field(quantidade_inserida, "quantidade");
    numero_inserido_problematico(
      "quantidade de números a serem sorteados inválida"
    );
  } else {
    logica_sorteio(quantidade_inserida, numero_inicial, numero_final);
    console.log(array_sorteado_nao_repetido.join(", "));
    mudanca_de_texto_secundario_ao_pressionar_botao(
      "os números sorteados são: " + array_sorteado_nao_repetido.join(", ")
    );
  }
}
function logica_sorteio(quantidade_inserida, numero_inicial, numero_final) {
  let variavel_for = numero_final - numero_inicial + 1;
  for (i = 0; i < variavel_for; i++) {
    lista_de_numeros_a_serem_sorteados.push(numero_inicial);
    numero_inicial++;
  }
  let = array_sorteado_nao_repetido = [];
  console.log(lista_de_numeros_a_serem_sorteados);
  for (i = 0; i < quantidade_inserida; i++) {
    let array_sorteado = [];
    while (array_sorteado_nao_repetido.length < quantidade_inserida) {
      array_sorteado =
        lista_de_numeros_a_serem_sorteados[
          Math.floor(Math.random() * lista_de_numeros_a_serem_sorteados.length)
        ];
      if (!array_sorteado_nao_repetido.includes(array_sorteado)) {
        array_sorteado_nao_repetido.push(array_sorteado);
      }
    }
  }
  array_sorteado_nao_repetido.sort((a, b) => a - b);
}
function mudar_status_botao(id) {
  let botao_sortear = document.getElementById(id);
  if (botao_sortear.classList.contains("container__botao-desabilitado")) {
    botao_sortear.classList.remove("container__botao-desabilitado");
    botao_sortear.classList.add("container__botao");
    botao_sortear.removeAttribute("disabled");
  } else {
    botao_sortear.classList.add("container__botao-desabilitado");
    botao_sortear.classList.remove("container__botao");
    botao_sortear.setAttribute("disabled", true);
  }
}
function reiniciar(quantidade_inserida, numero_inicial, numero_final) {
  clean_written_field(quantidade_inserida, "quantidade");
  clean_written_field(numero_inicial, "de");
  clean_written_field(numero_final, "ate");
  mudar_status_botao("btn-sortear");
  mudar_status_botao("btn-reiniciar");
  mudanca_de_texto_secundario_ao_pressionar_botao(
    "Números sorteados: nenhum até agora"
  );
}
function clean_written_field(variavel, id) {
  variavel = document.getElementById(id);
  variavel.value = "";
}
function mudanca_de_texto_secundario_ao_pressionar_botao(
  variavel_de_texto_secundario
) {
  let mensagem_na_tela = document.getElementById("campo_texto_secundario");
  mensagem_na_tela.innerHTML = variavel_de_texto_secundario;
}
function numero_inserido_problematico(campo_alerta) {
  alert(campo_alerta);
  mudar_status_botao("btn-sortear");
  mudar_status_botao("btn-reiniciar");
  mudanca_de_texto_secundario_ao_pressionar_botao(
    "Números sorteados: nenhum até agora"
  );
}
