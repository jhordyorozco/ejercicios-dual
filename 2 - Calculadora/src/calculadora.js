export default (() => {
  const historial = document.querySelector('.historial')
  const input = document.querySelector('.resultado')
  const calculadora = document.querySelector('.calculadora')

  let expresion = ''

  const obtenerUltimoNumero = (valor) => {
    return valor.split(/[+\-*/]/).pop()
  }

  const actualizarPantalla = () => {
    const ultimoNumero = obtenerUltimoNumero(expresion)
    input.value = ultimoNumero === '' ? '0' : ultimoNumero
  }

  calculadora.addEventListener('click', (event) => {
    const btn = event.target

    if (btn.classList.contains('numero')) {
      const ultimoNumero = obtenerUltimoNumero(expresion)

      if (/^0+$/.test(ultimoNumero) && (btn.dataset.valor === '0' || btn.dataset.valor === '00')) {
        return
      }

      if (ultimoNumero === '0' && btn.dataset.valor !== '.') {
        expresion = expresion.slice(0, -1) + btn.dataset.valor
      } else {
        expresion += btn.dataset.valor
      }
    }

    if (
      btn.classList.contains('suma') ||
      btn.classList.contains('resta') ||
      btn.classList.contains('multiplicacion') ||
      btn.classList.contains('division')
    ) {
      const esMenos = btn.classList.contains('resta')

      if (expresion === '') {
        if (esMenos) expresion += '-'
      } else if (/[+\-*/]$/.test(expresion)) {
        if (esMenos && !expresion.endsWith('-')) {
          expresion += '-'
        } else {
          expresion = expresion.slice(0, -1) + btn.dataset.valor
        }
      } else {
        expresion += btn.dataset.valor
      }
    }

    if (btn.classList.contains('decimal')) {
      const ultimoNumero = obtenerUltimoNumero(expresion)
      if (ultimoNumero.includes('.')) return
      expresion += ultimoNumero === '' ? '0.' : '.'
    }

    if (btn.classList.contains('borrar')) {
      expresion = expresion.slice(0, -1)
    }

    if (btn.classList.contains('limpiar')) {
      expresion = ''
      resultadoAnterior.value = ''
    }

    if (btn.classList.contains('igual')) {
      if (expresion === '' || /[+\-*/.]$/.test(expresion)) return

      try {
        const resultado = eval(expresion)

        if (Number.isFinite(resultado)) {
          historial.value = input.value
          input.value = resultado
          expresion = String(resultado)
        } else {
          input.value = 'Error'
          expresion = ''
        }
      } catch {
        input.value = 'Error'
        expresion = ''
      }
      return
    }

    actualizarPantalla()
  })
})()