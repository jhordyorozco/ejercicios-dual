export default (() => {
  const input = document.querySelector('.resultado')

  document.querySelector('.calculadora').addEventListener('click', (event) =>{
    if (event.target.classList.contains('1')) {
      input.value += 1
    }
    if (event.target.classList.contains('2')) {
      input.value += 2
    }
    if (event.target.classList.contains('3')) {
      input.value += 3
    }
    if (event.target.classList.contains('4')) {
      input.value += 4
    }
    if (event.target.classList.contains('5')) {
      input.value += 5
    }
    if (event.target.classList.contains('6')) {
      input.value += 6
    }
    if (event.target.classList.contains('7')) {
      input.value += 7
    }
    if (event.target.classList.contains('8')) {
      input.value += 8
    }
    if (event.target.classList.contains('9')) {
      input.value += 9
    }
    if (event.target.classList.contains('0')) {
      input.value += 0 
    }

    if (event.target.classList.contains('suma')) {
      input.value += '+'
    }

    if (event.target.classList.contains('resta')) {
      input.value += '-'
    }

    if (event.target.classList.contains('multiplicacion')) {
      input.value += '*'
    }

    if (event.target.classList.contains('division')) {
      input.value += '/'
    }

    if (event.target.classList.contains('decimal')) {
      input.value += '.'
    }


    document.querySelector('.limpiar').addEventListener('click', () => {
      input.value = 'null'
    })

    document.querySelector('.igual').addEventListener('click', () => {
      input.value = eval(input.value)
    })
  })
})();
