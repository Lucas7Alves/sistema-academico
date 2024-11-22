
function lancarNotas(up1, up2) {
  
  if (isNaN(up1) || isNaN(up2)) {
    throw new Error('Erro: "Entradas devem ser numéricas"')
  } else if (up1 < 0 || up1 > 10) {
    throw new Error('Erro: "Nota de 1UP inválida"') 
  } else if (up2 < 0 || up2 > 10) {
    throw new Error('Erro: "Nota de 2UP inválida"') 
  } else if (contarCasasDecimais(up1) > 2) {
    throw new Error('Erro: "Nota de 1UP inválida"') 
  } else if (contarCasasDecimais(up2) > 2) {
    throw new Error('Erro: "Nota de 2UP inválida"') 
  } else {
    return "Notas salvas com sucesso"
  }
}

// Função auxiliar
function contarCasasDecimais(numero) {
  const str = numero.toString();
  const decimalIndex = str.indexOf('.');
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
}

module.exports = lancarNotas