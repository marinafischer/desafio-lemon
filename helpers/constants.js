const MONOFASICO_MIN_CONSUMPTION = 400;
const BIFASICO_MIN_CONSUMPTION = 500;
const TRIFASICO_MIN_CONSUMPTION = 750;

const REASONS = {
  classe: 'Classe de consumo não aceita',
  modalidade: 'Modalidade tarifária não aceita',
  consumo: 'Consumo muito baixo para tipo de conexão',
};

const CPF_REGEX = /^\d{11}$/;
const CNPJ_REGEX = /^\d{14}$/;

module.exports = {
  MONOFASICO_MIN_CONSUMPTION,
  BIFASICO_MIN_CONSUMPTION,
  TRIFASICO_MIN_CONSUMPTION,
  REASONS,
  CPF_REGEX,
  CNPJ_REGEX,
};
