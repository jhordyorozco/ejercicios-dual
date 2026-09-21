class Calculadora extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.expresion = ''
  }

  connectedCallback () {
    this.render()
    this.input = this.shadow.querySelector('.resultado')
    this.tablero = this.shadow.querySelector('.calculadora')

    this.tablero.addEventListener('click', (event) => {
      this.manejarClick(event)
    })
  }

  obtenerUltimoNumero (valor) {
    return valor.split(/[+\-*/]/).pop()
  }

  actualizarPantalla () {
    this.input.value = this.expresion === '' ? '0' : this.expresion
  }

  manejarNumero (btn) {
    const ultimoNumero = this.obtenerUltimoNumero(this.expresion)

    if (/^0+$/.test(ultimoNumero) && (btn.dataset.valor === '0' || btn.dataset.valor === '00')) {
      return
    }

    if (ultimoNumero === '0') {
      this.expresion = this.expresion.slice(0, -1) + btn.dataset.valor
    } else {
      this.expresion += btn.dataset.valor
    }
  }

  manejarOperador (btn) {
    const esMenos = btn.classList.contains('resta')

    if (this.expresion === '') {
      if (esMenos) this.expresion += '-'
      return
    }

    if (/[+\-*/]$/.test(this.expresion)) {
      if (esMenos && !this.expresion.endsWith('-')) {
        this.expresion += '-'
      } else {
        this.expresion = this.expresion.slice(0, -1) + btn.dataset.valor
      }
      return
    }

    this.expresion += btn.dataset.valor
  }

  manejarDecimal () {
    const ultimoNumero = this.obtenerUltimoNumero(this.expresion)
    if (ultimoNumero.includes('.')) return
    this.expresion += ultimoNumero === '' ? '0.' : '.'
  }

  manejarIgual () {
    if (this.expresion === '' || /[+\-*/.]$/.test(this.expresion)) return

    try {
      const resultado = eval(this.expresion)
      this.expresion = Number.isFinite(resultado) ? String(resultado) : ''
      this.input.value = Number.isFinite(resultado) ? resultado : 'Error'
    } catch {
      this.expresion = ''
      this.input.value = 'Error'
    }
  }

  manejarClick (event) {
    const btn = event.target

    if (btn.classList.contains('numero')) {
      this.manejarNumero(btn)
    } else if (
      btn.classList.contains('suma') ||
      btn.classList.contains('resta') ||
      btn.classList.contains('multiplicacion') ||
      btn.classList.contains('division')
    ) {
      this.manejarOperador(btn)
    } else if (btn.classList.contains('decimal')) {
      this.manejarDecimal()
    } else if (btn.classList.contains('borrar')) {
      this.expresion = this.expresion.slice(0, -1)
    } else if (btn.classList.contains('limpiar')) {
      this.expresion = ''
    } else if (btn.classList.contains('igual')) {
      this.manejarIgual()
      return
    }

    this.actualizarPantalla()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
        .calculadora {
    position: relative;
    z-index: 1000;
    width: min(100%, 450px);
    background-color: var(--negro);
    padding: 2rem;
    border: 3px solid var(--amarillo);
    border-radius: 1rem;
}

.marca {
    color: var(--amarillo);
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px var(--negro);
}

.pantalla input {
    min-height: 4rem;
    background-color: var(--grisoscuro);
    border: 0.1rem solid var(--gris);
    padding: 1rem;
    text-align: right;
    border-radius: 0.5rem;
    margin-bottom: 0.7rem;
    width: 100%;
}

.resultado {
    color: var(--amarillo);
    font-size: 2rem;
}

.teclado {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 0.4rem;
}

.operador {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 0.4rem;
    margin-top: 0.4rem;
}

button {
    min-height: 4rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

.numero,
.decimal {
    background-color: var(--grisoscuro);
    color: var(--blanco);
    border: 1px solid var(--gris);
}

.numero:hover,
.decimal:hover {
    background-color: var(--gris);
}

.borrar {
    background-color: var(--grisoscuro);
    color: var(--amarillo);
    border: 1px solid var(--amarillo);
}

.borrar:hover {
    background-color: var(--rojoscuro);
    color: var(--blanco);
}

.limpiar {
    background-color: var(--rojoscuro);
    color: var(--blanco);
}

.limpiar:hover {
    background-color: var(--rojo);
}

.igual {
    background-color: var(--amarillo);
    color: var(--negro);
}

.igual:hover {
    background-color: var(--amarilloclaro);
}

.operador .suma,
.operador .resta,
.operador .multiplicacion,
.operador .division {
    background-color: var(--grisoscuro);
    color: var(--amarillo);
}

.operador .suma:hover,
.operador .resta:hover,
.operador .multiplicacion:hover,
.operador .division:hover {
    background-color: var(--amarillo);
    color: var(--negro);
}   
    </style>

    <section class="calculadora">
        <section class="marca">
            Baticalculadora
        </section>

        <section class="pantalla">
            <input type="text" class="resultado" disabled>
        </section>

        <section class="teclado">
            <button class="numero" data-valor="7">7</button>
            <button class="numero" data-valor="8">8</button>
            <button class="numero" data-valor="9">9</button>
            <button class="numero" data-valor="4">4</button>
            <button class="numero" data-valor="5">5</button>
            <button class="numero" data-valor="6">6</button>
            <button class="numero" data-valor="1">1</button>
            <button class="numero" data-valor="2">2</button>
            <button class="numero" data-valor="3">3</button>
            <button class="numero" data-valor="0">0</button>
            <button class="numero" data-valor="00">00</button>
            <button class="decimal">.</button>
            <button class="borrar">BO</button>
            <button class="limpiar">AC</button>
            <button class="igual">=</button>
        </section>

        <section class="operador">
            <button class="suma" data-valor="+">+</button>
            <button class="resta" data-valor="-">-</button>
            <button class="multiplicacion" data-valor="*">*</button>
            <button class="division" data-valor="/">/</button>
        </section>
    </section>
    `
  }
}

customElements.define('calculadora', Calculadora);