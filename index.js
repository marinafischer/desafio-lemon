const isElegible = require('./helpers/verifyData');
const schemaValidade = require('./helpers/validateSchema');
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

