const {
  MONOFASICO_MIN_CONSUMPTION, BIFASICO_MIN_CONSUMPTION, TRIFASICO_MIN_CONSUMPTION, REASONS
} = require('./constants');
const calculate = require('./calculator')
const schemaValidade = require('./validateSchema');

const isElegible = (data) => {
  let elegivel = true;
  const razoesInelegibilidade = [];
  const { mediaConsumo, economiaAnualDeCO2} = calculate(data);
  try {
    schemaValidade(data)

    if(data.classeDeConsumo === "poderPublico" || data.classeDeConsumo === "rural"){
      elegivel = false;
      razoesInelegibilidade.push(REASONS.classe)
    } 
    
    if(data.modalidadeTarifaria === "azul" || data.modalidadeTarifaria === "verde") {
      elegivel = false;
      razoesInelegibilidade.push(REASONS.modalidade)
    }

    if(data.tipoDeConexao === "monofasico" && mediaConsumo <= MONOFASICO_MIN_CONSUMPTION ) {
      elegivel = false;
      razoesInelegibilidade.push(REASONS.consumo)
    }

    if(data.tipoDeConexao === "bifasico" && mediaConsumo <= BIFASICO_MIN_CONSUMPTION ) {
      elegivel = false;
      razoesInelegibilidade.push(REASONS.consumo)
    }

    if(data.tipoDeConexao === "trifasico" && mediaConsumo <= TRIFASICO_MIN_CONSUMPTION ) {
      elegivel = false;
      razoesInelegibilidade.push(REASONS.consumo)
    }

    if(elegivel) return {
      elegivel, economiaAnualDeCO2
    }
    return {elegivel, razoesInelegibilidade}
  } catch (error) {
    return error;
  }
}

module.exports = isElegible

