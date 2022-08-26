/* eslint-disable no-undef */
const verifyElegible = require('../index');
const {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
  data12,
  data13,
  data14,
  data15,
  data16,
  data17,
  data18,
} = require('./mocks');

describe('Quando a pessoa é elegível', () => {
  const result = verifyElegible(data1);
  it('Retorna um objeto', () => {
    expect(typeof result).toBe('object');
  });
  it('O objeto tem a chaves "elegivel" com o valor true', () => {
    expect(result).toHaveProperty('elegivel', true);
  });
  it('O objeto tem as chaves "economiaAnualDeCO2" com o valor true', () => {
    expect(result).toHaveProperty('economiaAnualDeCO2', 5553.24);
  });
  it('O objeto não tem a propriedade "razoesInelegibilidade"', () => {
    expect(result).not.toHaveProperty('razoesInelegibilidade');
  });
});

describe('Quando a pessoa não é elegível', () => {
  const result = verifyElegible(data2);
  it('Retorna um objeto', () => {
    expect(typeof result).toBe('object');
  });
  it('O objeto tem a chaves "elegivel" com o valor falso', () => {
    expect(result).toHaveProperty('elegivel', false);
  });
  it('O objeto tem as chaves "razoesInelegibilidade" com o valor true', () => {
    expect(result).toHaveProperty(
      'razoesInelegibilidade',
      ['Classe de consumo não aceita', 'Modalidade tarifária não aceita'],
    );
  });
  it('O objeto não tem a propriedade "economiaAnualDeCO2"', () => {
    expect(result).not.toHaveProperty('economiaAnualDeCO2');
  });
});

describe('Quando é passado uma chave a mais no objeto', () => {
  it('A função retorna uma mensagem de "dados inválidos"', () => {
    const result = verifyElegible(data12);
    expect(result).toBe('Dados inválidos');
  });
});

describe('Quando a chave numeroDoDocumento', () => {
  it('Não é informada', () => {
    const result = verifyElegible(data3);
    expect(result).toBe('Dados inválidos');
  });
  it('Não é um cpf ou cnpj válido', () => {
    const result = verifyElegible(data4);
    expect(result).toBe('Dados inválidos');
  });
});

describe('Quando a chaves tipoDeConexao', () => {
  it('Não é informada', () => {
    const result = verifyElegible(data15);
    expect(result).toBe('Dados inválidos');
  });
  it('Não é uma das opções esperadas', () => {
    const result = verifyElegible(data5);
    expect(result).toBe('Dados inválidos');
  });
});

describe('Quando a chaves classeDeConsumo', () => {
  it('Não é informada', () => {
    const result = verifyElegible(data16);
    expect(result).toBe('Dados inválidos');
  });
  it('Não é uma das opções esperadas', () => {
    const result = verifyElegible(data6);
    expect(result).toBe('Dados inválidos');
  });
});

describe('Quando a chaves modalidadeTarifaria', () => {
  it('Não é informada', () => {
    const result = verifyElegible(data17);
    expect(result).toBe('Dados inválidos');
  });
  it('Não é uma das opções esperadas', () => {
    const result = verifyElegible(data7);
    expect(result).toBe('Dados inválidos');
  });
});

describe('Quando a chaves historicoDeConsumo', () => {
  it('Não é informada', () => {
    const result = verifyElegible(data18);
    expect(result).toBe('Dados inválidos');
  });
  it('Não é um array', () => {
    const result = verifyElegible(data8);
    expect(result).toBe('Dados inválidos');
  });
  it('Não é um array de números', () => {
    const result = verifyElegible(data11);
    expect(result).toBe('Dados inválidos');
  });
  it('É um array com menos de 3 numeros', () => {
    const result = verifyElegible(data9);
    expect(result).toBe('Dados inválidos');
  });
  it('É um array com mais de 12 numeros', () => {
    const result = verifyElegible(data10);
    expect(result).toBe('Dados inválidos');
  });
  it('É um array com um numero menor que zero', () => {
    const result = verifyElegible(data13);
    expect(result).toBe('Dados inválidos');
  });
  it('É um array com um numero maior que 9999', () => {
    const result = verifyElegible(data14);
    expect(result).toBe('Dados inválidos');
  });
});
