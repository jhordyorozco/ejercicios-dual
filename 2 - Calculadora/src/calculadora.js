export default (() => {
  const input = document.querySelector('.resultado')
  const calculadora = document.querySelector('.calculadora')

  calculadora.addEventListener('click', (event) => {
    const btn = event.target

    if (btn.classList.contains('numero')) {
      input.value += btn.dataset.valor
    }

    if (
      btn.classList.contains('suma') ||
      btn.classList.contains('resta') ||
      btn.classList.contains('multiplicacion') ||
      btn.classList.contains('division')
    ) {
      input.value += btn.dataset.valor
    }

    if (btn.classList.contains('decimal')) {
      input.value += '.'
    }

    if (btn.classList.contains('borrar')) {
      input.value = input.value.slice(0, -1)
    }

    if (btn.classList.contains('limpiar')) {
      input.value = ''
    }

    if (btn.classList.contains('igual')) {
      try {
        input.value = eval(input.value)
      } catch {
        input.value = 'Error'
      }
    }
  })
})()