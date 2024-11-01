const calcularMedia = require('../calculo/calculoMedia.js');

describe('Cálculo de Média e Situação Acadêmica', () => {
    test('Aprovado por média', () => {
        const resultado = calcularMedia(8, 7);
        expect(resultado.media).toBe("7.50");
        expect(resultado.situacao).toBe("Aprovado por média");
        expect(resultado.notaNecessariaNaFinal).toBeNull();
    });

    test('Reprovado por média', () => {
        const resultado = calcularMedia(3, 2);
        expect(resultado.media).toBe("2.50");
        expect(resultado.situacao).toBe("Reprovado por média");
        expect(resultado.notaNecessariaNaFinal).toBeNull();
    });

    test('Aguardando a final', () => {
        const resultado = calcularMedia(5, 4);
        expect(resultado.media).toBe("4.50");
        expect(resultado.situacao).toBe("Aguardando a final");
        expect(resultado.notaNecessariaNaFinal).toBe("7.50");
    });
});
