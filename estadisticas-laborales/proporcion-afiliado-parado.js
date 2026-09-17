(async () => {

  const fs = require('fs/promises')

  try {

    const file1 = await fs.readFile('./data/afiliados-por-municio-sexo.json', 
    'utf-8')
     const file2 = await fs.readFile('./data/normalizacion-parados-por-municipio-sexo.json', 
    'utf-8')
    let data1 = JSON.parse(file1)
    let data2 = JSON.parse(file2)
    let  data = { ...data1, ...data2}

    let filterData = data.reduce((acumulador, element) => {
      

    }, []);

    
   

    await fs.writeFile('./data/afiliados-parados-combinado.json', JSON.stringify(filterData, null, 2))

  } catch (error) {
    console.log(error)
  }
})()