const isElegible = require('./validations/validateElegibility');
const schemaValidade = require('./validations/validateSchema');
// const { data1, data2 } = require('./tests/mocks');

const verifyElegible = (data) => {
  try {
    schemaValidade(data);
    return isElegible(data);
  } catch ({ message }) {
    return message;
  }
};
// para verificar os dados chame a função acima ou descomente as linhas 3, 16 e 17
// em seguida rode o comando npm start

// console.log(verifyElegible(data1));
// console.log(verifyElegible(data2));

module.exports = verifyElegible;
