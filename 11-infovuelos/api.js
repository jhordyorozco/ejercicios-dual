(async () => {
  const fs = require('fs')
  const data = []

  for (const aeropuerto of ['MAD', 'BCN', 'PMI']) {
    console.log('Consultando vuelos de', aeropuerto)

    let infovuelos = await fetch(
      `https://www.aena.es/sites/Satellite?pagename=AENA_ConsultarVuelos&airport=${aeropuerto}&flightType=L&dosDias=si`
    )

    let result = await infovuelos.json()

    data.push({
      aeropuerto: aeropuerto,
      vuelos: result
    })
  }

  fs.writeFileSync('infovuelos.json', JSON.stringify(data, null, 2)
  )
})()