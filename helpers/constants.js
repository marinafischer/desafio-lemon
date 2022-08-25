const MONOFASICO_MIN_CONSUMPTION = 400;
const BIFASICO_MIN_CONSUMPTION = 500;
const TRIFASICO_MIN_CONSUMPTION = 750;

const REASONS = {
  classe: "Classe de consumo não aceita",
  modalidade: "Modalidade tarifária não aceita",
  consumo: "Consumo médio não aceito"
}

module.exports = {
	MONOFASICO_MIN_CONSUMPTION,
  BIFASICO_MIN_CONSUMPTION,
  TRIFASICO_MIN_CONSUMPTION,
  REASONS
}