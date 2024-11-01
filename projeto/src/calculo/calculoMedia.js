function calcularMedia(up1, up2) {
    const media = (up1 + up2) / 2;
    
    if (media >= 6) {
        return { media, situacao: "Aprovado por média" };
    } else if (media < 4) {
        return { media, situacao: "Reprovado por média" };
    } else {
        const notaNecessariaNaFinal = 12 - media;
        return { media, situacao: "Aguardando a final", notaNecessariaNaFinal };
    }
}

module.exports = calcularMedia;
