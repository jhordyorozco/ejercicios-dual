export default (() => {
  const input = document.querySelector('.resultado')
  const calculadora = document.querySelector('.calculadora')

  let expresion = ''

  const obtenerUltimoNumero = (valor) => {
    return valor.split(/[+\-*/]/).pop()
  }

  const actualizarPantalla = () => {
    input.value = expresion === '' ? '0' : expresion
  }

  const manejarNumero = (btn) => {
    const ultimoNumero = obtenerUltimoNumero(expresion)

    if (/^0+$/.test(ultimoNumero) && (btn.dataset.valor === '0' || btn.dataset.valor === '00')) {
      return
    }

    if (ultimoNumero === '0') {
      expresion = expresion.slice(0, -1) + btn.dataset.valor
    } else {
      expresion += btn.dataset.valor
    }
  }

  const manejarOperador = (btn) => {
    const esMenos = btn.classList.contains('resta')

    if (expresion === '') {
      if (esMenos) expresion += '-'
      return
    }

    if (/[+\-*/]$/.test(expresion)) {
      if (esMenos && !expresion.endsWith('-')) {
        expresion += '-'
      } else {
        expresion = expresion.slice(0, -1) + btn.dataset.valor
      }
      return
    }

    expresion += btn.dataset.valor
  }

  const manejarDecimal = () => {
    const ultimoNumero = obtenerUltimoNumero(expresion)
    if (ultimoNumero.includes('.')) return
    expresion += ultimoNumero === '' ? '0.' : '.'
  }

  const manejarIgual = () => {
    if (expresion === '' || /[+\-*/.]$/.test(expresion)) return

    try {
      const resultado = eval(expresion)
      expresion = Number.isFinite(resultado) ? String(resultado) : ''
      input.value = Number.isFinite(resultado) ? resultado : 'Error'
    } catch {
      expresion = ''
      input.value = 'Error'
    }
  }

  calculadora.addEventListener('click', (event) => {
    const btn = event.target

    if (btn.classList.contains('numero')) {
      manejarNumero(btn)
    } else if (
      btn.classList.contains('suma') ||
      btn.classList.contains('resta') ||
      btn.classList.contains('multiplicacion') ||
      btn.classList.contains('division')
    ) {
      manejarOperador(btn)
    } else if (btn.classList.contains('decimal')) {
      manejarDecimal()
    } else if (btn.classList.contains('borrar')) {
      expresion = expresion.slice(0, -1)
    } else if (btn.classList.contains('limpiar')) {
      expresion = ''
    } else if (btn.classList.contains('igual')) {
      manejarIgual()
      return
    }

    actualizarPantalla()
  })
})()