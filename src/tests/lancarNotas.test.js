const lancarNotas = require("../funcoes/lancamentoNotas");

describe('lançarNotas', () => {

  test('deve lançar Notas salvas com sucesso', () => {
    expect(lancarNotas(7.5, 8.2)).toBe('Notas salvas com sucesso');
  });
  test('deve lançar um erro se alguma nota for menor que 0', () => {
    expect(() => lancarNotas(-1, 8.2)).toThrow('Erro: "Nota de 1UP inválida"');
  });

  test('deve lançar um erro se alguma nota for maior que 10', () => {
    expect(() => lancarNotas(7.5, 12.0)).toThrow('Erro: "Nota de 2UP inválida"');
  });

  test('deve lançar um erro se a nota up1 tiver mais de duas casas decimais', () => {
    expect(() => lancarNotas(7.567, 8.2)).toThrow('Erro: "Nota de 1UP inválida"');
  });

  test('deve lançar um erro se a nota up2 tiver nota tiver mais de duas casas decimais', () => {
    expect(() => lancarNotas(7.5, 8.256)).toThrow('Erro: "Nota de 2UP inválida"');
  });

  test('deve lançar um erro se alguma nota não for um número', () => {
    expect(() => lancarNotas('sete', 8.2)).toThrow('Erro: "Entradas devem ser numéricas"');
  });
});