(async () => {

  const fs = require('fs/promises')

  try {

    const fileAfiliado = await fs.readFile('./data/afiliados-por-municio-sexo.json',
      'utf-8')
    const fileParados = await fs.readFile('./data/normalizacion-parados-por-municipio-sexo.json',
      'utf-8')
    let dataAfiliado = JSON.parse(dataAfiliado)
    let dataParados = JSON.parse(dataParados)

    const data = dataParados.reduce((acumulador, element) => {
      if (element.cantidad === null || element.cantidad === undefined) {
        return acumulador
      }

      const afiliado = dataAfiliados[element.CodigoPostal]?.[element.Sexo]?.[element.Periodo]?.cantidad

      if (afiliado === null || afiliado === undefined) {
        return acumulador
      }

      const porcentaje = parseFloat((element.cantidad / afiliados * 100)toFixed(2))
      acumulador.push({
        element,
        porcentaje: porcentaje
      })
      return acumulador
    }, [])

    await fs.writeFile('./data/afiliados-parados-combinado.json', JSON.stringify(data, null, 2))

  } catch (error) {
    console.log(error)
  }
})()