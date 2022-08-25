const {
  MONOFASICO_MIN_CONSUMPTION, BIFASICO_MIN_CONSUMPTION, TRIFASICO_MIN_CONSUMPTION, REASONS
} = require('./helpers/constants');
const calculate = require('./helpers/calculator')

const isElegible = (data) => {
  let elegivel = true;
  const razoesInelegibilidade = [];
  const { mediaConsumo, economiaAnualDeCO2} = calculate(data);

  try {
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


const data1 = {
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160, // 9 meses atras
    6941, // 10 meses atras
    4597  // 11 meses atras
  ]
}

const data2 = {
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "rural",
  "modalidadeTarifaria": "verde",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160, // 9 meses atras
  ]
}

console.log(isElegible(data1))
console.log(isElegible(data2))