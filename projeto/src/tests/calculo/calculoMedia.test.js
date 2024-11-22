const { calcularMedia } = require('calculo/calculoMedia');



describe("Testes para a função calcularMedia", () => {
    test("Deve calcular a média corretamente para notas válidas", () => {
        expect(calcularMedia(7.0, 8.0)).toBe(7.5);
    });

    test("Deve retornar a mesma nota quando ambas as notas são iguais", () => {
        expect(calcularMedia(5.0, 5.0)).toBe(5.0);
    });

    test("Deve calcular corretamente para a nota mínima e máxima", () => {
        expect(calcularMedia(0.0, 10.0)).toBe(5.0);
    });

    test("Deve calcular corretamente para nota de 1UP no limite inferior", () => {
        expect(calcularMedia(0.0, 7.0)).toBe(3.5);
    });

    test("Deve calcular corretamente para nota de 2UP no limite superior", () => {
        expect(calcularMedia(8.0, 10.0)).toBe(9.0);
    });

    test("Deve lançar erro se as notas forem fora do intervalo permitido", () => {
        expect(() => calcularMedia(-1.0, 11.0)).toThrow("As notas devem estar entre 0.0 e 10.0.");
    });

    test("Deve lançar erro se as entradas não forem numéricas", () => {
        expect(() => calcularMedia("7.0", 8.0)).toThrow("As notas devem ser números.");
    });
});
