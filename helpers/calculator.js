const calculate = (data) =>{
  const consumoAnual = data.historicoDeConsumo.reduce((acc, curr) => acc + curr);
  const mediaConsumo = consumoAnual/data.historicoDeConsumo.length;
  const economiaAnualDeCO2 = (consumoAnual/1000)*84;
  return {consumoAnual, mediaConsumo, economiaAnualDeCO2}
}

module.exports = calculate;