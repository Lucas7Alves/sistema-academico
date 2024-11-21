const calcularMedia = require('./CalculoMedia');

describe('Testes para a função calcularMedia', () => {
    test('Calcula a média das notas válidas', () => {
        expect(calcularMedia(7.0, 8.0)).toBe(7.5);
    });

    test('Calcula a média das notas iguais', () => {
        expect(calcularMedia(5.0, 5.0)).toBe(5.0);
    });

    test('Calcula a média com valores mínimo e máximo', () => {
        expect(calcularMedia(0.0, 10.0)).toBe(5.0);
    });

    test('Calcula a média com limite inferior da nota 1', () => {
        expect(calcularMedia(0.0, 7.0)).toBe(3.5);
    });

    test('Calcula a média com limite superior da nota 2', () => {
        expect(calcularMedia(8.0, 10.0)).toBe(9.0);
    });

    test('Lança erro se as notas não estão entre 0.0 a 10.0', () => {
        expect(() => calcularMedia(-1.0, 11.0)).toThrow("As notas devem estar entre de 0.0 a 10.0.");
    });

    test('Lança erro se as entradas não forem números', () => {
        expect(() => calcularMedia("sete", 8.0)).toThrow("As notas devem ser números.");
    });
});
