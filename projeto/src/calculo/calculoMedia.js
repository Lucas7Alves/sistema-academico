function calcularMedia(nota1, nota2) {
    if (typeof nota1 !== 'number' || typeof nota2 !== 'number') {
        throw new Error("As notas devem ser números.");
    }
    if (nota1 < 0.0 || nota1 > 10.0 || nota2 < 0.0 || nota2 > 10.0) {
        throw new Error("As notas devem estar entre 0.0 e 10.0.");
    }

    const media = (nota1 + nota2) / 2;

    if (media < 0.0 || media > 10.0) {
        throw new Error("A média calculada está fora do intervalo permitido.");
    }

    return parseFloat(media.toFixed(1)); 
}

module.exports = { calcularMedia };
