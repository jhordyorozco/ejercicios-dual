(async () => {
  const fs = require('fs')
  const aeropuertos = ['MAD', 'BCN', 'PMI']

  const nombres = {
    MAD: 'Madrid',
    BCN: 'Barcelona',
    PMI: 'Palma de Mallorca'
  }

  async function consultarVuelos(aeropuerto) {
    console.log('Consultando vuelos de', aeropuerto)

    const infovuelos = await fetch(
      `https://www.aena.es/sites/Satellite?pagename=AENA_ConsultarVuelos&airport=${aeropuerto}&flightType=L&dosDias=si`
    )

    const result = await infovuelos.json()

    const vuelos = result.map(vuelo => ({
      numeroVuelo: vuelo.iataCompania + vuelo.numVuelo,
      origen: vuelo.ciudadIataOtro,
      destino: nombres[aeropuerto],
      hora: vuelo.horaProgramada,
      estado: vuelo.estado
    }))

    return {
      aeropuerto,
      vuelos
    }
  }

  // Inicio
  const data = []

  for (const aeropuerto of aeropuertos) {
    const resultado = await consultarVuelos(aeropuerto)
    data.push(resultado)
  }
  // Fin

  console.log(JSON.stringify(data, null, 2))

  fs.writeFileSync('infovuelos.json', JSON.stringify(data, null, 2))
})().catch(console.error)

//Cambia por estas opciones

//1. Una única llamada: solo Madrid
//const data = [await consultarVuelos('MAD')]

//2. Secuencial: los tres aeropuertos
//Es el bloque que ya está en el código completo
// const data = []

// for (const aeropuerto of aeropuertos) {
//   const resultado = await consultarVuelos(aeropuerto)
//   data.push(resultado)
// }

//3. Inicia las tres consultas y espera sus resultados juntos.
// const promises = []

// for (const aeropuerto of aeropuertos) {
//   promises.push(consultarVuelos(aeropuerto))
// }

// const data = await Promise.all(promises)

//4. Hace lo mismo que la opción 3, escrito de forma más compacta.
// const data = await Promise.all(
//   aeropuertos.map(aeropuerto => consultarVuelos(aeropuerto))
// )

//ejecutar en la terminal:
//node api.js