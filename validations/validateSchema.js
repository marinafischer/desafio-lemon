const Joi = require('joi');
const {tiposDeConexao, classesDeConsumo, modalidadesTarifarias} = require('../helpers/tipos');
const {CPF_REGEX, CNPJ_REGEX} = require('../helpers/constants');

const schema = Joi.object({
  numeroDoDocumento: Joi.string().required(),
  tipoDeConexao: Joi.string().required(),
  classeDeConsumo: Joi.string().required(),
  modalidadeTarifaria: Joi.string().required(),
  historicoDeConsumo: Joi.array().items(
    Joi.number().integer().min(0).max(9999)
  ).max(12).min(3).required()
})

const schemaValidade = (data) => {
  const {error} = schema.validate(data)
  if(error) throw "Dados inválidos"

  const findConections = tiposDeConexao.find(tipo => tipo === data.tipoDeConexao);
  const findClasse = classesDeConsumo.find(classe => classe === data.classeDeConsumo);
  const findModalidade = modalidadesTarifarias
    .find(modalidade => modalidade === data.modalidadeTarifaria);

  if(!findClasse || !findConections || !findModalidade) throw "Dados inválidos"

  if(!CNPJ_REGEX.test(data.numeroDoDocumento) && !CPF_REGEX.test(data.numeroDoDocumento)) {
    throw "Dados inválidos"
  }
}


module.exports = schemaValidade;