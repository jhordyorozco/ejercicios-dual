(async () => {
  const fs = require('fs')
  const data = []
  const nombres = {
  MAD: 'Madrid',
  BCN: 'Barcelona',
  PMI: 'Palma de Mallorca'
}

  for (const aeropuerto of ['MAD', 'BCN', 'PMI']) {
    console.log('Consultando vuelos de', aeropuerto)

    let infovuelos = await fetch(
      `https://www.aena.es/sites/Satellite?pagename=AENA_ConsultarVuelos&airport=${aeropuerto}&flightType=L&dosDias=si`
    )

    let result = await infovuelos.json()

    let vuelos = result.map(vuelo => ({
      numeroVuelo: vuelo.iataCompania + vuelo.numVuelo,
      origen: vuelo.ciudadIataOtro,
      destino: nombres[aeropuerto],
      hora: vuelo.horaProgramada,
      estado: vuelo.estado
    }))

    console.log('Vuelos de', aeropuerto, vuelos)

    data.push({
      aeropuerto: aeropuerto,
      vuelos: vuelos
    })
  }

  fs.writeFileSync('infovuelos.json', JSON.stringify(data, null, 2))
})().catch(console.error)