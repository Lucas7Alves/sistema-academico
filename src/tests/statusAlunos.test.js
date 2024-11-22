const obterStatus = require('../calculo/statusAlunos');

describe('obterStatus', () => {
    test('Média inferior a 4.0 deve retornar "Reprovado por média"', () => {
        expect(obterStatus(3.5)).toBe("Reprovado por média");
    });

    test('Média igual a 4.0 deve retornar "Aguardando a final"', () => {
        expect(obterStatus(4.0)).toBe("Aguardando a final");
    });

    test('Média entre 4.0 e 6.0 deve retornar "Aguardando a final"', () => {
        expect(obterStatus(5.5)).toBe("Aguardando a final");
    });

    test('Média igual a 6.0 deve retornar "Aprovado por média"', () => {
        expect(obterStatus(6.0)).toBe("Aprovado por média");
    });

    test('Média superior a 6.0 deve retornar "Aprovado por média"', () => {
        expect(obterStatus(7.5)).toBe("Aprovado por média");
    });

    test('Média no limite inferior (0.0) deve retornar "Reprovado por média"', () => {
        expect(obterStatus(0.0)).toBe("Reprovado por média");
    });
});