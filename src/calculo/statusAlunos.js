function obterStatus(media) {
  if (media < 4.0) {
      return "Reprovado por média";
  } else if (media >= 6.0) {
      return "Aprovado por média";
  } else if (media >= 4.0 && media < 6.0) {
      return "Aguardando a final";
  }
  throw new Error("Média inválida");
}

module.exports = obterStatus;