(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/afiliados-por-municio-sexo.json', 'utf-8')
    let data = JSON.parse(file)
    let datas = data.series[0].data
    let sexoExcluido = ["TOTAL"]
    let municipiosExcluidos = ["ILLES BALEARS", "Sin descripción", "MALLORCA", "MENORCA", "Menorca", "Eivissa", "FORMENTERA", "EIVISSA"]

    filterData = datas.filter(element => {
      return !sexoExcluido.includes(element.Sexo) &&
        !municipiosExcluidos.includes(element['Isla y municipio de residencia'])
    })

    filterData = filterData.reduce((acumulador, element) => {
      let [CodigoPostal, Municipio] = element['Isla y municipio de residencia'].split(" ")
      let cantidad = Number(element.cantidad) ? Number(element.cantidad.replace('.', '')) : Number(element.cantidad)
      if (!acumulador[CodigoPostal]) acumulador[CodigoPostal] = {}
      if (!acumulador[CodigoPostal][element.Sexo]) acumulador[CodigoPostal][element.Sexo] = {}
      acumulador[CodigoPostal][element.Sexo][element.Periodo] = {
        Periodo: element.Periodo,
        CodigoPostal: CodigoPostal,
        Municipio: Municipio,
        Sexo: element.Sexo,
        cantidad: cantidad
      }
      return acumulador
    }, {})

    await fs.writeFile('./data/normalizacion-afiliados-por-municio-sexo.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()