const isElegible = require('./validations/validateElegibility');
const schemaValidade = require('./validations/validateSchema');
// para verificar os dados chame esta função, em seguida rode o comando npm start

const verifyElegible = (data) => {
  try {
    schemaValidade(data)
    return isElegible(data)
  } catch (error) {
    return error;
  }
}


module.exports = verifyElegible

